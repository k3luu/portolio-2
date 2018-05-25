const express = require('express');
const path = require('path');
const app = express();

app.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});
// app.get('*.css', function(req, res, next) {
//     req.url = req.url + '.gz';
//     res.set('Content-Encoding', 'gzip');
//     res.set('Content-Type', 'text/css');
//     next();
// });

app.use('/', express.static('./build'));

// app.get('*', function(req, res) {
//   res.sendFile(path.resolve(__dirname + '/index.html'));
// });

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000);
console.log('server started on port ' + process.env.PORT);
