# Cadinu Subgraph (Fork of pancake)

TheGraph exposes a GraphQL endpoint to query the events and entities within the Binance Smart Chain and CadinuSwap ecosystem.

Currently, there are multiple subgraphs, but additional subgraphs can be added to this repository, following the current architecture.

## Subgraphs

1. **[Lottery](https://thegraph.com/legacy-explorer/subgraph/cadinu/lottery)**: Tracks all Cadinu Lottery with rounds, draws and tickets.

2. **[SmartChef](https://thegraph.com/legacy-explorer/subgraph/cadinu/smartchef)**: Tracks all CadinuSwap SmartChef (a.k.a. Syrup Pools) with tokens and rewards.

3. **MasterChef (v3)**: Tracks data for MasterChefV3.
    - BSC https://thegraph.com/hosted-service/subgraph/cadinu/masterchef-v3-bsc


4. **Exchange (v3)**: Tracks all CadinuSwap V3 Exchange data with price, volume, liquidity
    - BSC https://thegraph.com/hosted-service/subgraph/cadinu/exchange-v3-lite


## Dependencies
- [Graph CLI](https://github.com/graphprotocol/graph-cli)
    - Required to generate and build local GraphQL dependencies.

```shell
yarn global add @graphprotocol/graph-cli
```

## Deployment

For any of the subgraph: `blocks` as `[subgraph]`

1. Run the `cd subgraphs/[subgraph]` command to move to the subgraph directory.

2. Run the `yarn codegen` command to prepare the TypeScript sources for the GraphQL (generated/*).

3. Run the `yarn build` command to build the subgraph, and check compilation errors before deploying.

4. Run `graph auth --product hosted-service '<ACCESS_TOKEN>'`

5. Deploy via `yarn deploy`.

