module.exports = function(app, path) {
    week5_user = [
      {
        username: "A-user",
        birthday: "01/01/2000",
        age: "19",
        email: "a-user@mail.com",
        password: "123",
        valid: ""
      },
      {
        username: "B-user",
        birthday: "02/02/2001",
        age: "18",
        email: "b-user@mail.com",
        password: "321",
        valid: ""
      },
      {
        username: "C-user",
        birthday: "03/03/2002",
        age: "17",
        email: "c-user@mail.com",
        password: "123c",
        valid: ""
      }
    ];
  
    app.post("/api/auth", function(req, res) {
      if (!req.body) {
        return res.sendStatus(400);
      }
      var customer = {};
      customer.email = "";
      customer.username = "";
      customer.password = "";
      customer.birthday = "";
      customer.age = 0;
      customer.valid = false;
  
      for (let i = 0; i < week5_user.length; i++) {
        if (
          req.body.email == week5_user[i].email &&
          req.body.password == week5_user[i].password
        ) {
          customer.valid = true;
          customer.email = week5_user[i].email;
          customer.password = week5_user[i].password;
          customer.username = week5_user[i].username;
          customer.birthday = week5_user[i].birthday;
          customer.age = week5_user[i].age;
  
          // var cust = JSON.stringify(customer);
        }
      }
  
      res.send(customer);
    });
  };