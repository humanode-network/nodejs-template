# Humanode Node.js Template

A basic template for a node.js app capable of interacting with Humanode network.

## Usage

### Setup

1. Clone this repo or create a new repo from this template.

2. `yarn install`

   Install the dependencies.

3. `RPC_WS_URL=wss://explorer-rpc-ws.testnet4.stages.humanode.io yarn start`

   Run the code and connect
   to `wss://explorer-rpc-ws.testnet4.stages.humanode.io` - the public node
   for the Testnet 4.

   You might have to connect to a different URL - a more modern testnet,
   a mainnet or a .

### Development

This template comes with a working `@polkadot/api` integration.

See the code at `src/` directory.

To learn more about how you can interact with Humanode network via
Polkadot.js API package see the documentation: https://polkadot.js.org/docs.
