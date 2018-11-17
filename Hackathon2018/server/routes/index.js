var express = require('express');
var router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString =  'postgresql://bridget:password123@localhost:5432/Budget';

router.get('/', function (req, res, next) {
  res.sendFile(path.join(
    __dirname, '..', '..', 'client', 'views', 'Transactions.html'));
});

router.post('/api/v1/Budget', (req, res, next) => {
  const results = [];
  // Grab data from http request
  const data = {type: req.body.text, amount: req.body.text, amount: req.body,text, location: req.body.text, reason: req.body.text, subType: req.body.text};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    client.query('INSERT INTO income_expenses_sheet(type, date, amount, location, reason, subType) values($1, now(), $2, $3, $4, $5)',
    [data.type_id, data.date, data.amount, data.location, data.reason, data.subType]);
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM test ORDER BY id ASC');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

router.get('/api/v1/Budget', (req, res, next) => {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM subTypeID ORDER BY id ASC;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

router.get('api/v1/Budget', (req, res, next) => {
  const results = [];

})

router.put('/api/v1/Budget/:test_id', (req, res, next) => {
  const results = [];
  // Grab data from the URL parameters
  const id = req.params.test_id;
  // Grab data from http request
  const data = {text: req.body.text, complete: req.body.complete};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Update Data
    client.query('UPDATE test SET text=($1), complete=($2) WHERE id=($3)',
    [data.text, data.complete, id]);
    // SQL Query > Select Data
    const query = client.query("SELECT * FROM test ORDER BY id ASC");
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      return res.json(results);
    });
  });
});

router.delete('/api/v1/Budget/:test_id', (req, res, next) => {
  const results = [];
  // Grab data from the URL parameters
  const id = req.params.todo_id;
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Delete Data
    client.query('DELETE FROM test WHERE id=($1)', [id]);
    // SQL Query > Select Data
    var query = client.query('SELECT * FROM test ORDER BY id ASC');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

module.exports = router;
