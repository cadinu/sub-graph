/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from "@graphprotocol/graph-ts";
import { Factory as FactoryContract } from "../generated/templates/Pool/Factory";

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
// prettier-ignore
// export const FACTORY_ADDRESS = "0x2cb62aEBa8eB609020129983A5141DB883abca85";
export const FACTORY_ADDRESS = "0x2cb62aeba8eb609020129983a5141db883abca85";

export let ZERO_BI = BigInt.fromI32(0);
export let ONE_BI = BigInt.fromI32(1);
export let ZERO_BD = BigDecimal.fromString("0");
export let ONE_BD = BigDecimal.fromString("1");
export let BI_18 = BigInt.fromI32(18);

export let TWO_BD = BigDecimal.fromString("2");

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS));
