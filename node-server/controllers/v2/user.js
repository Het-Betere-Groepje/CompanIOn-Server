import dataUser from '../../data/v2/user.js';

// get the location from a user
export const getUserLocation = async (req, res) => {
    const { id } = req.params;
    const results = await dataUser.getUserLocation(id);
    res.send(results);
}
export const getUsers = async (req, res) => {
    const results = await dataUser.getUsers();
    res.send(results);
}

// export const getUserLocationByName = async (req, res) => {
//     const { name } = req.params;
//     const results = await dataUser.getUserLocationByName(name);
//     res.send(results);
// }

export const getUserLocationById = async (req, res) => {
    const { id } = req.params;
    const userConsent = await dataUser.getUserConsent(id);

    if (userConsent[0].level === 0) {
        throw new Error('User has not given consent');
    } else {
        const results = await dataUser.getUserLocationById(id);
        res.send(results);
    }
}

// update the location of a user
export const putUserLocation = (req, res) => {
    const { id, locationId } = req.body;
    dataUser.putUserLocation(id, locationId);
    res.send('Location updated');
}

// get the consent level that a user has set.
export const getUserConsent = async (req, res) => {
    const { id } = req.params;
    const results = await dataUser.getUserConsent(id);
    res.send(results);
}

// update the consent level of a user
export const patchUserConsent = (req, res) => {
    const { id, consentId } = req.body;
    dataUser.patchUserConsent(id, consentId);
    res.send('Consent updated');
}