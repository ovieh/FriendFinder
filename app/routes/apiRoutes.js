const friends = require('../data/friends')

module.exports = app => {
    app.get("/api/friends", (req, res) => {
        res.json(friends)
    });

    app.post("/api/friends", (req, res) => {

        let user = req.body;
        
        user.scores = user.scores.map(score => {	
            score = parseInt(score);
            console.log(score);
            return score;
        });

        friends.push(req.body);
        // res.json(true);
    });

}