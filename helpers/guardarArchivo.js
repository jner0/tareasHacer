const fs = require("fs");

const guardarDB = (data) => {
  const archivo = "./database/data.json";

  fs.writeFileSync(archivo, JSON.stringify(data));
};

module.exports = {
  guardarDB,
};
