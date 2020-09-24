const jsonfile = require('jsonfile');

const DATA_FILE = 'data.json';

function readDataFile() {
  let data = { rows: [] };

  try {
    data = jsonfile.readFileSync(DATA_FILE);
  } catch (err) {
    jsonfile.writeFileSync(DATA_FILE, data, { spaces: 2 });
  }

  return data;
}

function writeDataFile(data) {
  jsonfile.writeFileSync(DATA_FILE, data, { spaces: 2 });
}

module.exports = {
  readDataFile,
  writeDataFile,
};