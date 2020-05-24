var orm = require("../config/orm.js");

var burger_call = {
  insert: function (some_val, cb) {
    orm.insert("burgers_db", "burger_name", some_val, function (res) {
      cb(res);
    });
  },
  read: function (cb) {
    orm.read("burgers_db", function (res) {
      cb(res);
    });
  },
  update: function (user_id, cb) {
    orm.update("burgers_db", "devoured", 1, "id", user_id, function (res) {
      cb(res);
    });
  },
  delete: function (user_id, cb) {
    orm.delete("burgers_db", "id", user_id, function (res) {
      cb(res);
    });
  },
};

module.exports = burger_call;
