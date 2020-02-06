
exports.seed = function(knex, Promise) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        {VIN:"1sd345", make: 'Chevorolet', model:"Malibu", milage: "1000.00"},
        {VIN:"1sd346", make: 'Volkes Wagon', model:"Jetta", milage: "40000.00"},
        {VIN:"1sd347", make: 'Nissan', model:"Sentra", milage: "5000.00"},
        
      ]);
    });
};
