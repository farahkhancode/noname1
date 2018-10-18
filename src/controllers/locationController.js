const locationQueries = require("../db/queries.locations.js");

module.exports = {
  index(req, res, next){
    locationQueries.getAllLocations((err, locations) => {

     if(err){
       res.redirect(500, "static/index");
     } else {
       res.render("locations/index", {locations});
     }
   })
},

new(req, res, next){
      res.render("locations/new");
},

destroy(req, res, next){
     locationQueries.deleteLocation(req.params.id, (err, location) => {
       if(err){
         res.redirect(500, `/locations/${location.id}`)
       } else {
         res.redirect(303, "/locations")
       }
     });
   },

create(req, res, next){
     let newLocation = {
       name: req.body.name
     };

     locationQueries.addLocation(newLocation, (err, location) => {
       if(err){
         res.redirect(500, "/locations/new");
       } else {
         res.redirect(303, `/locations/${location.id}`);
       }
     });
   },
   show(req, res, next){

//#1
     locationQueries.getLocation(req.params.id, (err, location) => {

//#2
       if(err || location == null){
         res.redirect(404, "/");
       } else {
         res.render("locations/show", {location});
       }
     });
   }
}
