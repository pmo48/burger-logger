// homemade ORM from database 

var connection = require("./connection.js");

// helper function 

function createQmarks(num) {
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push("?");
  }   
  return arr.toString();   
}

// helper function 

function translateSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

// ORM functions - select all, inserting, updating and deleting (CRUD)

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table,cols,vals,cb) {
      var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";

      console.log(queryString);

      connection.query(queryString, vals, function(err, res) {
        if (err) throw err;
        console.log(res);
        cb(res);
      });
    },

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;

        console.log(queryString);

      connection.query(queryString, function(err, res) {
        if (err) {
          throw err;
        }
  
        cb(res);
      });
  },
  deleteOne: function(table,condition,cb) {
      var queryString = "DELETE FROM " + table + " WHERE " + condition;

      console.log(queryString);

      connection.query(queryString, function(err, res) {
        if (err) {
          throw err;
        }
  
        cb(res);
      });

  }
};

// exports ORM to use in model

module.exports = orm;
