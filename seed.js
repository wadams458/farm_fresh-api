const db = require('./models');
const data = require('./farmData.json');

db.Farm.deleteMany({}, (err, deletedFarms) => {
    db.Farm.create(data.farms, (err, seededFarms) => {
        if (err) console.log(err);
        
        console.log(data.farms.length, 'farms created successfully');
        
        process.exit();
    });
});
