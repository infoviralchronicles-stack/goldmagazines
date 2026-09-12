const fs = require('fs');
function write(file, str) {
  fs.writeFileSync(file, str, 'utf8');
  console.log('Wrote:', file);
}
module.exports = { write };
