import { con } from '../../database.js';

export const getPlaces = async (req, res) => {
    const [results] = await con.query('SELECT id, name FROM Location'); 
    res.send(results);

    // con.connect(function(err) {
    //     if (err) throw err;
    //     con.query("SELECT id, name FROM Location", function (err, result, fields) {
    //         if (err) throw err;
    //         res.send(result);
    //         con.end();
    //     });
    // });
}