const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  response.sendFile('/index.html');
});

app.listen(port, () => {
  console.log(`Server Running on => localhost:${port}`);
});
