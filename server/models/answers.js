const db=require('../services/db')


module.exports.createAnswer = async function (answer,userId,questionId) {
    let insertQuery = 'INSERT INTO ANSWERS(answer,userId,questionId) VALUES($1, $2,$3) RETURNING id';
    let response = await db.executeSql(insertQuery, [question,userId]);
    if (response.rows != null && response.rows !== undefined && response.rows.length > 0) {
        return response.rows[0].id;
    } else {
        return null;
    }
}

