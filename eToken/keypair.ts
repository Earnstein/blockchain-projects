import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "colors";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log("secretkey : ".green.underline, keypair.secretKey)