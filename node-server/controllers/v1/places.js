import dataPlaces from '../../data/v1/places.js';

export const getPlaces = async (req, res) => {
    const results = await dataPlaces.getPlaces();
    res.send(results);
}