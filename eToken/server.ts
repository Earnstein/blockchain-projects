import { fetchWallectBalance } from "./src/utils/lib"

const main =async () => {
    try {
        await fetchWallectBalance() 
    } catch (error) {
        console.log(`Error from main: ${error}`.green.underline)
    }
}


main()