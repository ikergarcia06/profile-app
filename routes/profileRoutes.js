const express = require('express');
const router = express.Router();
const profileHandler = require('../handlers/profileHandler');

router.get('/profiles', profileHandler.showProfiles);
router.post('/profiles', profileHandler.registerProfile);

module.exports = router;
