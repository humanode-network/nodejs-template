// Required imports
import { ApiPromise, WsProvider } from "@polkadot/api";

const rpcWsUrl = process.env.RPC_WS_URL || "ws://127.0.0.1:9944";

// Initialise the provider to connect to the local node.
const provider = new WsProvider(rpcWsUrl);

// Create the API and wait until ready.
const api = await ApiPromise.create({ provider });

// Retrieve the chain & node information information via rpc calls
const [chain, nodeName, nodeVersion] = await Promise.all([
  api.rpc.system.chain(),
  api.rpc.system.name(),
  api.rpc.system.version(),
]);

console.log(
  `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`
);
