// After th break

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    const API_SECRET = process.env.SECRET || "super secret";

    if(authorization === API_SECRET) {
        next();
    } else {
        res.status(403).json({ you: "have no power here" });
    }
};