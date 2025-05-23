const express = require('express');
const app = express();
const port = 3000;
const weatherRouter = require('./routes/weather');
const path = require('path');

app.use(express.json());
app.use('/api/weather', weatherRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});