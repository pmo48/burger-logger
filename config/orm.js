var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection


//Console log all the party names.
//Console log all the client names.
//Console log all the parties that have a party-type of grown-up.
//Console log all the clients and their parties.

// var orm = {
//   selectAll: function(tableInput, colToSearch) {
//     var queryString = "SELECT ??? FROM ??";
//     connection.query(queryString, [tableInput, colToSearch], function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   },

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