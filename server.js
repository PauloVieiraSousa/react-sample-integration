// import express (after npm install express)
const express = require('express');
const app = express();
const PORT = 8080;
const baseDir = `${__dirname}/build/`;

console.log(__dirname);

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }));

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});