import { con } from '../../database.js';

const getConsentLevels = async () => {
    const [results] = await con.query('SELECT id, level, description FROM Consent')
    return results;
}
export default {
    getConsentLevels
}