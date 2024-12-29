import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const protect = (req, res, next) => {
    // Get the token from cookies
    const authtoken = req.cookies.jwt;
    // If no token, send an authentication error
    if (!authtoken) {
        return res.status(401).json({ message: "Not authenticated" });
    }
    try {
        // Verify the JWT and decode the payload
        const decoded = jwt.verify(authtoken, process.env.SECRET_KEY);
        // Attach the user information to the request object
        req.user = decoded.user;
        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // If verification fails, send an error
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
