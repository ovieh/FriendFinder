const friends = require('../data/friends')

module.exports = app => {
    app.get("/api/friends", (req, res) => {
        res.json(friends)
    });

    app.post("/api/friends", (req, res) => {

        let matchScore, match, user = req.body;
        
        user.scores = user.scores.map(score => {	
            score = parseInt(score);
            return score;
        });

        friends.forEach( friend => {
            const compScore = friend.scores.reduce((accumulator, value, index) => {
                return Math.abs(user.scores[index] - value) + accumulator;
            }, 0);

            if(!match || compScore < matchScore) {
                match = friend;
                matchScore = compScore;
            }
        });

        friends.push(req.body);
        res.json(match);
        // console.log(match);
        // console.log(match.name);
    });

}