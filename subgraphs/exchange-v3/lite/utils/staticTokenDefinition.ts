import { Address, BigInt } from "@graphprotocol/graph-ts";

// Initialize a Token Definition with the attributes
export class StaticTokenDefinition {
  address: Address;
  symbol: string;
  name: string;
  decimals: BigInt;

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address;
    this.symbol = symbol;
    this.name = name;
    this.decimals = decimals;
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<StaticTokenDefinition> {
    let staticDefinitions = new Array<StaticTokenDefinition>(6);

    // Add CBON
    let tokenCBON = new StaticTokenDefinition(
      Address.fromString("0x6e64fCF15Be3eB71C3d42AcF44D85bB119b2D98b"),
      "CBON",
      "CADINU Bonus",
      BigInt.fromI32(18)
    );
    staticDefinitions.push(tokenCBON);

    // Add CADINU
    let tokenCADINU = new StaticTokenDefinition(
      Address.fromString("0x76e112203eF59D445452ef7556386dD2DF3Ed914"),
      "CADINU",
      "Canadian Inuit Dog V2",
      BigInt.fromI32(18)
    );
    staticDefinitions.push(tokenCBON);

    // Add LIF
    let tokenLIF = new StaticTokenDefinition(
      Address.fromString("0xeb9951021698b42e4399f9cbb6267aa35f82d59d"),
      "LIF",
      "Lif",
      BigInt.fromI32(18)
    );
    staticDefinitions.push(tokenLIF);

    // Add SVD
    let tokenSVD = new StaticTokenDefinition(
      Address.fromString("0xbdeb4b83251fb146687fa19d1c660f99411eefe3"),
      "SVD",
      "savedroid",
      BigInt.fromI32(18)
    );
    staticDefinitions.push(tokenSVD);

    // Add TheDAO
    let tokenTheDAO = new StaticTokenDefinition(
      Address.fromString("0xbb9bc244d798123fde783fcc1c72d3bb8c189413"),
      "TheDAO",
      "TheDAO",
      BigInt.fromI32(16)
    );
    staticDefinitions.push(tokenTheDAO);

    // Add HPB
    let tokenHPB = new StaticTokenDefinition(
      Address.fromString("0x38c6a68304cdefb9bec48bbfaaba5c5b47818bb2"),
      "HPB",
      "HPBCoin",
      BigInt.fromI32(18)
    );
    staticDefinitions.push(tokenHPB);

    return staticDefinitions;
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address): StaticTokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions();
    let tokenAddressHex = tokenAddress.toHexString();

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i];
      if (staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition;
      }
    }

    // If not found, return null
    return null;
  }
}
