const express = require('express');

const app = express();
const appPort = process.env.PORT || 3000;

app.get('/', (req, res) => {
  return res.json({ message: 'Hello world! this is auto deployed!' });
});

app.listen(appPort, () => {
  console.log(`App Statred on PORT: ${appPort}`);
});
