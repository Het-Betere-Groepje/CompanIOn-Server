import { con } from '../../database.js';

const getLocations = async () => {
    const [results] = await con.query('select id, name from Location')
    return results;
}
export default {
    getLocations
}