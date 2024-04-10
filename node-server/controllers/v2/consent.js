import dataConsent from '../../data/v2/consent.js';

// get all available locations
export const getConsentLevels = async (req, res) => {
    const result = await dataConsent.getConsentLevels();
    res.send(result);
}