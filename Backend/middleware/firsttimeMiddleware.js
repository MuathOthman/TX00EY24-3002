// Define role-based middleware
const {
    createChart1,
} = require("../controllers/chart1Controller");

function firsttime(attempts) {
    return (req, res, next) => {
        const userId = req.user.attempts; // Assuming the role is included in the JWT payload

        if (attempts === 0) {
            createChart1({
                userId: userId,
                January: 0,
                February: 0,
                March: 0,
                April: 0,
                May: 0,
                June: 0,
                July: 0,
                August: 0,
                September: 0,
                October: 0,
                November: 0,
                December: 0,
            });
            console.log('Attempts 0');
            next(); // User has the required role, continue to the next middleware
        } else {
            res.status(200).json({ message: 'Attempsts more than 1' }); // User doesn't have the required role
        }
    };
}


module.exports = firsttime
