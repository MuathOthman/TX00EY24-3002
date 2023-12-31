// Define role-based middleware
function propertyOwner(id) {
    return (req, res, next) => {
        const userId = req.user.userId; // Assuming the role is included in the JWT payload

        if (userId === id) {
            next(); // User has the required role, continue to the next middleware
        } else {
            res.status(403).json({ message: 'Done' }); // User doesn't have the required role
        }
    };
}


module.exports = propertyOwner
