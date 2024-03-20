import dataLocation from '../../data/v1/location.js';

// get the location from a user
export const getLocation = async (req, res) => {
    const { id } = req.params;
    const results = await dataLocation.getUserLocation(id);
    res.send(results);
}

// update the location of a user
export const putLocation = (req, res) => {
    const { id, locationId } = req.body;
    dataLocation.putUserLocation(id, locationId);
    res.send('Location updated');
}