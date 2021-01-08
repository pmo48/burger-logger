var connection = require("./connection.js");

function createQmarks(num) {
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push("?");
  }   
  return arr.toString();   
}

function translateSql(obj) {
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

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, res) {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  insertOne: function(table,cols,vals,cb) {
      var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";

      console.log(queryString);

      connection.query(queryString, function(err, res) {
        if (err) throw err;
        console.log(res);
        cb(res);
      });
    },

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;

        console.log(queryString);

      connection.query(queryString, function(err, res) {
        if (err) throw err;
        console.log(res);
        cb(res);
      });
  },
  deleteOne: function(table,condition,cb) {
      var queryString = "DELETE FROM " + table + " WHERE " + condition;

      console.log(queryString);

      connection.query(queryString, function(err, res) {
        if (err) throw err;
        console.log(res);
        cb(res);
      });

  }
};
//   selectWhere: function(tableInput, colToSearch, valOfCol) {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   },
//   selectAndOrder: function(whatToSelect, table, orderCol) {
//     var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
//     console.log(queryString);
//     connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   },
//   findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
//     var queryString =
//       "SELECT ?? FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

//     connection.query(
//       queryString,
//       [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
//       function(err, result) {
//         if (err) throw err;
//         console.log(result);
//       }
//     );
//   }
// };

// module.exports = orm;