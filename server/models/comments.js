const db = require('../services/db')


module.exports.createComments = async function (comments,answerId,userId) {
    let insertQuery = 'INSERT INTO COMMENTS(comments,answerId,userId) VALUES($1, $2,$3) RETURNING id';
    let response = await db.executeSql(insertQuery, [comments,answerId,userId]);
    if (response.rows != null && response.rows !== undefined && response.rows.length > 0) {
        return response.rows[0].id;
    } else {
        return null;
    }
}

module.exports.commentsGetById = async function (id) {
    let sqlQuery = 'SELECT * FROM COMMENTS WHERE is_disabled = false AND id = $1';
    let response = await db.executeSql(sqlQuery, [id]);
    if (response.rows != null && response.rows !== undefined) {
        return response.rows[0]
    } else {
        return '';
    }
}


module.exports.deleteComments = async function (id) {
    let sqlQuery = 'UPDATE COMMENTS SET is_disabled=true where id=$1';
    let response = await db.executeSql(sqlQuery, [id]);
    if (response.rows != null && response.rows !== undefined) {
        return response.rows[0]
    } else {
        return '';
    }
}


