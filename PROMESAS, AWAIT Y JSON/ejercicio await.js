const fs = require ("fs").promises;

async function fetchData () {
    try {
        const data = await fs.readFile("robots.txt", "utf-8");
        console.log(data);
    } catch (error) {
        console.error("Error al leer el archi:", error.message);
    }
}
console.log("Codigo sincrino");
fectchData();