const router = require("express").Router();
const appRoutes = require("./productRoutes");

// Destination routes
router.use("/products", appRoutes);

module.exports = router;
