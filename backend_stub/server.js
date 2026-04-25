const express = require('express');
const app = express();
const path = require('path');

app.use('/files', express.static(path.join(__dirname, '..')));

app.get('/api/file/:name', (req, res) => {
  const file = req.params.name;
  res.redirect('/files/' + file);
});

app.listen(3000, () => console.log('Backend T777 running on port 3000'));