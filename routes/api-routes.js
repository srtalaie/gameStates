var db = require('../models');

module.exports = function(app){
    app.get('/api/games', function(req, res){
        db.Games.findAll({})
            .then(function(data){
                res.json(data)
            });
    });
}