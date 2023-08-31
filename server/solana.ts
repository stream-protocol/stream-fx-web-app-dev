import { Connection } from "@solana/web3.js";

const environment: any = process.env['NODE_ENV']
const NETWORK_URL = 'https://solana-mainnet.g.alchemy.com/v2/ZWDnDI0R0v6eHFg9RBXRbU52kB35QKWt';

export const getTransaction = async (signature: string) => {
  const connection = new Connection(NETWORK_URL);
  const confirmed = await connection.confirmTransaction(signature);
  if (confirmed) {
    const transaction = await connection.getTransaction(signature);
    console.log(transaction?.meta);
    console.log(transaction?.transaction.message);
    console.log(transaction?.transaction.message.instructions);
  } else {
    return
  }
}