import { con } from '../../database.js';

const getConsentLevels = async () => {
    const [results] = await con.query('')
    return results;
}
export default {
    getConsentLevels
}