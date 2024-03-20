import { con } from '../../database.js';

const getPlaces = async () => {
    const [results] = await con.query('SELECT id, name FROM Location');
    return results;
}

export default {
    getPlaces
}