const router = require('express').Router();
const userRoutes = require('./userRoutes');
const templateRoutes = require('./templateRoute');

router.use('/templates',templateRoutes);
router.use('/users',userRoutes);



module.exports = router;