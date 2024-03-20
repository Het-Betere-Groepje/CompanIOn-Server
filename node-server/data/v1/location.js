import { con } from '../../database.js';

const getUserLocation = async (id) => {
    const [results] = await con.query('SELECT Location.id, Location.name FROM UserLocation RIGHT JOIN Location ON UserLocation.location_id = Location.id WHERE user_id = ?', [id]);
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

export default {
    getUserLocation,
    putUserLocation
}