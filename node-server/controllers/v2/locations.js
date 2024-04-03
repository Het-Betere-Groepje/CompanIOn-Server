import dataLocation from '../../data/v2/locations.js';

// get all available locations
export const getLocations = async (req, res) => {
    const result = await dataLocation.getLocations();
    res.send(result);
}