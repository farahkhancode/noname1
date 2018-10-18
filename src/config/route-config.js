module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const userRoutes = require("../routes/users");
    const locationRoutes = require("../routes/locations");
    

    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(locationRoutes);

  }
}
