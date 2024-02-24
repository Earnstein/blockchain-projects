import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
import "colors";
import { keypair } from "../keypair";


const fetchWallectBalance =async () => {
    try {
        const connection = new Connection(clusterApiUrl("devnet"));
        const publickey = new PublicKey(keypair.publicKey);
        const walletBalance = await connection.getBalance(publickey);
        const solBalance = walletBalance/LAMPORTS_PER_SOL
        console.log(`Wallect balance is: ${solBalance}`.green.underline)
        return solBalance
    } catch (error) {
        console.error(`Unable to fetch balance: ${error}`.red.underline);
        
    }
}

export {
    fetchWallectBalance
}