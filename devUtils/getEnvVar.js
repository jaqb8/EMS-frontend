const fs = require('fs');

fs.readFile('.env.local', 'utf-8', (err, data) => {
  const text = data.split(/[=\n]/);
  const result = {};
  for (let i = 0; i < text.length; i = i + 2) {
    result[text[i]] = text[i + 1];
  }

  console.log(result.VUE_APP_BACKEND_DIR);
});
