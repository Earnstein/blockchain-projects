import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";


export const keypair = getKeypairFromEnvironment("SECRET_KEY");
