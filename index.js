const mongoUtils = require("./mongoUtils");
const mongo = new mongoUtils();

(async() => {
    let insert = await mongo.insert("Ejecutando mongo desde nodeJS 1");
    console.log(insert);
})();

