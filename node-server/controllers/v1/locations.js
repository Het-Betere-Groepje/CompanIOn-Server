import dataLocation from '../../data/v1/locations.js';

// get the location from a user
export const getUserLocation = async (req, res) => {
    const { id } = req.params;
    const results = await dataLocation.getUserLocation(id);
    res.send(results);
}

// update the location of a user
export const putUserLocation = (req, res) => {
    const { id, locationId } = req.body;
    dataLocation.putUserLocation(id, locationId);
    res.send('Location updated');
}

// get all available locations
export const getLocations = async (req, res) => {
    const result = await dataLocation.getLocations();
    res.send(result);
}