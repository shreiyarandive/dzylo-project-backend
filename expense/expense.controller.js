const mysql = require("mysql");
const config = require("../config/config");

exports.getAllExpense = async (req, res, next) => {
  let connection = mysql.createConnection(config.mysql);

  let sql = "SELECT * FROM expense_management";

  connection.query(sql, true, async (error, results, fields) => {
    connection.end();
    if (error) {
      console.log("error", error);
      res.json(error);
    }
    res.json(results);
  });
};

exports.getExpensebyId = async (req, res, next) => {
  let params = req.query;
  let connection = mysql.createConnection(config.mysql);

  let sql = `SELECT * FROM expense_management where id = ${params.id}`;

  connection.query(sql, true, async (error, results, fields) => {
    connection.end();
    if (error) {
      console.log("error", error);
      res.json(error);
    }
    res.json(results);
  });
};
exports.bookExpense = async (req, res, next) => {
  let body = req.body;
  let connection = mysql.createConnection(config.mysql);
  let sql = `INSERT INTO expense_management (item, price, date) VALUES 
                ('${body.item}', ${body.price}, '${body.date}')`;

  connection.query(sql, true, async (error, results, fields) => {
    connection.end();
    if (error) {
      console.log("error", error);
      res.json(error);
    }
    res.json(results);
  });
};

exports.updateExpense = async (req, res, next) => {
  let body = req.body;
  let connection = mysql.createConnection(config.mysql);

  let sql = `UPDATE expense_management SET item = '${body.item}', 
                price = ${body.price}, date = '${body.date}' where id = ${body.id}`;

  connection.query(sql, true, async (error, results, fields) => {
    connection.end();
    if (error) {
      console.log("error", error);
      res.json(error);
    }
    res.json(results);
  });
};

exports.deleteExpenseById = async (req, res, next) => {
  let params = req.query;
  let connection = mysql.createConnection(config.mysql);

  let sql = `DELETE FROM expense_management where id = ${params.id}`;

  connection.query(sql, true, async (error, results, fields) => {
    connection.end();
    if (error) {
      console.log("error", error);
      res.json(error);
    }
    res.json(results);
  });
};
