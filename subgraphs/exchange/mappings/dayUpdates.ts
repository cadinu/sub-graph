/* eslint-disable prefer-const */
import { PairHourData } from "../generated/schema";
import { BigInt, BigDecimal, ethereum } from "@graphprotocol/graph-ts";
import { Pair, Bundle, Token, CadinuFactory, CadinuDayData, PairDayData, TokenDayData } from "../generated/schema";
import { ONE_BI, ZERO_BD, ZERO_BI, FACTORY_ADDRESS } from "./utils";

export function updateCadinuDayData(event: ethereum.Event): CadinuDayData {
  let cadinu = CadinuFactory.load(FACTORY_ADDRESS);
  let timestamp = event.block.timestamp.toI32();
  let dayID = timestamp / 86400;
  let dayStartTimestamp = dayID * 86400;

  let cadinuDayData = CadinuDayData.load(dayID.toString());
  if (cadinuDayData === null) {
    cadinuDayData = new CadinuDayData(dayID.toString());
    cadinuDayData.date = dayStartTimestamp;
    cadinuDayData.dailyVolumeUSD = ZERO_BD;
    cadinuDayData.dailyVolumeBNB = ZERO_BD;
    cadinuDayData.totalVolumeUSD = ZERO_BD;
    cadinuDayData.totalVolumeBNB = ZERO_BD;
    cadinuDayData.dailyVolumeUntracked = ZERO_BD;
  }
  cadinuDayData.totalLiquidityUSD = cadinu.totalLiquidityUSD;
  cadinuDayData.totalLiquidityBNB = cadinu.totalLiquidityBNB;
  cadinuDayData.totalTransactions = cadinu.totalTransactions;
  cadinuDayData.save();

  return cadinuDayData as CadinuDayData;
}

export function updatePairDayData(event: ethereum.Event): PairDayData {
  let timestamp = event.block.timestamp.toI32();
  let dayID = timestamp / 86400;
  let dayStartTimestamp = dayID * 86400;
  let dayPairID = event.address.toHex().concat("-").concat(BigInt.fromI32(dayID).toString());
  let pair = Pair.load(event.address.toHex());
  let pairDayData = PairDayData.load(dayPairID);
  if (pairDayData === null) {
    pairDayData = new PairDayData(dayPairID);
    pairDayData.date = dayStartTimestamp;
    pairDayData.token0 = pair.token0;
    pairDayData.token1 = pair.token1;
    pairDayData.pairAddress = event.address;
    pairDayData.dailyVolumeToken0 = ZERO_BD;
    pairDayData.dailyVolumeToken1 = ZERO_BD;
    pairDayData.dailyVolumeUSD = ZERO_BD;
    pairDayData.dailyTxns = ZERO_BI;
  }
  pairDayData.totalSupply = pair.totalSupply;
  pairDayData.reserve0 = pair.reserve0;
  pairDayData.reserve1 = pair.reserve1;
  pairDayData.reserveUSD = pair.reserveUSD;
  pairDayData.dailyTxns = pairDayData.dailyTxns.plus(ONE_BI);
  pairDayData.save();

  return pairDayData as PairDayData;
}

export function updatePairHourData(event: ethereum.Event): PairHourData {
  let timestamp = event.block.timestamp.toI32();
  let hourIndex = timestamp / 3600;
  let hourStartUnix = hourIndex * 3600;
  let hourPairID = event.address.toHex().concat("-").concat(BigInt.fromI32(hourIndex).toString());
  let pair = Pair.load(event.address.toHex());
  let pairHourData = PairHourData.load(hourPairID);
  if (pairHourData === null) {
    pairHourData = new PairHourData(hourPairID);
    pairHourData.hourStartUnix = hourStartUnix;
    pairHourData.pair = event.address.toHex();
    pairHourData.hourlyVolumeToken0 = ZERO_BD;
    pairHourData.hourlyVolumeToken1 = ZERO_BD;
    pairHourData.hourlyVolumeUSD = ZERO_BD;
    pairHourData.hourlyTxns = ZERO_BI;
  }
  pairHourData.totalSupply = pair.totalSupply;
  pairHourData.reserve0 = pair.reserve0;
  pairHourData.reserve1 = pair.reserve1;
  pairHourData.reserveUSD = pair.reserveUSD;
  pairHourData.hourlyTxns = pairHourData.hourlyTxns.plus(ONE_BI);
  pairHourData.save();

  return pairHourData as PairHourData;
}

export function updateTokenDayData(token: Token, event: ethereum.Event): TokenDayData {
  let bundle = Bundle.load("1");
  let timestamp = event.block.timestamp.toI32();
  let dayID = timestamp / 86400;
  let dayStartTimestamp = dayID * 86400;
  let tokenDayID = token.id.toString().concat("-").concat(BigInt.fromI32(dayID).toString());

  let tokenDayData = TokenDayData.load(tokenDayID);
  if (tokenDayData === null) {
    tokenDayData = new TokenDayData(tokenDayID);
    tokenDayData.date = dayStartTimestamp;
    tokenDayData.token = token.id;
    tokenDayData.priceUSD = token.derivedBNB.times(bundle.bnbPrice);
    tokenDayData.dailyVolumeToken = ZERO_BD;
    tokenDayData.dailyVolumeBNB = ZERO_BD;
    tokenDayData.dailyVolumeUSD = ZERO_BD;
    tokenDayData.dailyTxns = ZERO_BI;
    tokenDayData.totalLiquidityUSD = ZERO_BD;
  }
  tokenDayData.priceUSD = token.derivedBNB.times(bundle.bnbPrice);
  tokenDayData.totalLiquidityToken = token.totalLiquidity;
  tokenDayData.totalLiquidityBNB = token.totalLiquidity.times(token.derivedBNB as BigDecimal);
  tokenDayData.totalLiquidityUSD = tokenDayData.totalLiquidityBNB.times(bundle.bnbPrice);
  tokenDayData.dailyTxns = tokenDayData.dailyTxns.plus(ONE_BI);
  tokenDayData.save();

  return tokenDayData as TokenDayData;
}
