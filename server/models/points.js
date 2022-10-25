const db = require('../services/db')


module.exports.createPoints = async function (points,answerId,userId) {
    let insertQuery = 'INSERT INTO POINTS(points,answerId,userId) VALUES($1, $2,$3) RETURNING id';
    let response = await db.executeSql(insertQuery, [points,answerId,userId]);
    if (response.rows != null && response.rows !== undefined && response.rows.length > 0) {
        return response.rows[0].id;
    } else {
        return null;
    }
}

