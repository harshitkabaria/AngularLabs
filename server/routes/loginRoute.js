module.exports = function(app, path) {
    app.get("/login", (res, req) => {
      let filepath = path.resolve("../src/app/login/login.component.html");
      res.sendFile(filepath);
    });
  };