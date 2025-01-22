const fs = require('fs').promises
const default_text = "Pranisha Shrestha"
async function readFile(location){
    try{
        const data = await fs.readFile(location)
        console.log(data.toString())
    }
    catch(error){
        await fs.writeFile(location, default_text)
    }
}
readFile('testFile.txt')