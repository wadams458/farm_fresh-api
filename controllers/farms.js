const db = require('../models');

const index = (req, res) => {
    db.Farm.find({}, (err, foundFarms) => {
        if (err) console.log('Error in farms#index:', err);

        res.send("Incomplete farms#index controller function");
    });
};

const show = (req, res) => {
    db.Farm.findById(req.params.id, (err, foundFarm) => {
        if (err) console.log('Error in farms#show:', err);

        res.send("Incomplete farms#show controller function");
    });
};

const create = (req, res) => {
    db.Farm.create(req.body, (err, savedFarm) => {
        if (err) console.log('Error in farms#create:', err);

        res.send("Incomplete farms#create controller function");
    });
};

const update = (req, res) => {
    db.Farm.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFarm) => {
        if (err) console.log('Error in farms#update:', err);

        res.send("Incomplete farms#update controller function");
    });
};

const destroy = (req, res) => {
    db.Farm.findByIdAndDelete(req.params.id, (err, deletedFarm) => {
        if (err) console.log('Error in Farms#destroy:', err);

        res.send("Incomplete farms#destroy controller function");
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
