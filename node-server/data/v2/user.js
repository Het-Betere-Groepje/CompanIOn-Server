import { con } from '../../database.js';

const getUserLocation = async (id) => {
    const [results] = await con.query('SELECT Location.id, Location.name FROM UserLocation RIGHT JOIN Location ON UserLocation.location_id = Location.id WHERE user_id = ?', [id]);
    return results;
}

const getUserLocationByName = async (name) => {
    const [result] = await con.query('SELECT Location.name FROM User JOIN UserLocation ON UserLocation.user_id = User.id JOIN Location ON Location.id = UserLocation.location_id WHERE User.name = ?', [name]);
    return results;
}

const putUserLocation = async (id, locationId) => {
    let results = await con.query('UPDATE UserLocation SET location_id = ? WHERE user_id = ?', [locationId, id]);
    if (results[0].affectedRows === 0) {
        results = await con.query('INSERT INTO UserLocation (user_id, location_id) VALUES (?, ?)', [id, locationId]);
    }
    if (results[0].affectedRows === 0) {
        throw new Error('Location not updated');
    }
}

const getUserConsent = async (id) => {
    const [results] = await con.query('SELECT Consent.id, Consent.level, Consent.beschrijving FROM User RIGHT JOIN Consent ON User.consent_id = Consent.id WHERE User.id = ?', [id]);
    return results;
}

const patchUserConsent = async (id, consentId) => {
    let results = await con.query('UPDATE User SET consent_id = ? WHERE id = ?', [consentId, id]);
    if (results[0].affectedRows === 0) {
        throw new Error('Consent not updated');
    }
}

export default {
    getUserLocation,
    getUserLocationByName,
    putUserLocation,
    getUserConsent,
    patchUserConsent
}