const fs = require('fs');
const path = require('path');

function save(rel, content) {
  const full = path.join(__dirname, rel);
  const dir = path.dirname(full);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(full, content.trim() + '\n', 'utf8');
  console.log('Saved:', rel);
}

module.exports = { save };
