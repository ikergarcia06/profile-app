const profiles = [
    { fullName: 'Andrea Ruiz', contact: 'andrea@correo.com' },
    { fullName: 'Carlos Méndez', contact: 'carlos@correo.com' }
];

function fetchAllProfiles() {
    return profiles;
}

function addProfile(profile) {
    profiles.push(profile);
}

module.exports = { fetchAllProfiles, addProfile };
