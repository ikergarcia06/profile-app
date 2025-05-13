const profileData = require('../data/profileData');

function showProfiles(req, res) {
    const profiles = profileData.fetchAllProfiles();
    res.render('dashboard', { title: 'Perfiles', header: 'Lista de perfiles activos', profiles: profiles });
}

function registerProfile(req, res) {
    const incomingProfile = req.body;
    profileData.addProfile(incomingProfile);
    res.status(201).send('Perfil registrado correctamente');
}

module.exports = { showProfiles, registerProfile };
