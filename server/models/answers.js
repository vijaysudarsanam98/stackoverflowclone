const db = require('../services/db')


module.exports.createAnswer = async function (answer, userId, questionId) {
    let insertQuery = 'INSERT INTO ANSWERS(answer,userId,questionId) VALUES($1, $2,$3) RETURNING id';
    let response = await db.executeSql(insertQuery, [answer,userId,questionId]);
    if (response.rows != null && response.rows !== undefined && response.rows.length > 0) {
        return response.rows[0].id;
    } else {
        return null;
    }
}

module.exports.answersGetById = async function (id) {
    let sqlQuery = 'SELECT id,question FROM users WHERE is_disabled = false AND id = $1';
    let response = await db.executeSql(sqlQuery, [id]);
    if (response.rows != null && response.rows !== undefined) {
        return response.rows[0]
    } else {
        return '';
    }
}


module.exports.deleteAnswers = async function (id) {
    let sqlQuery = 'UPDATE QUESTIONS SET is_disabled=true where id=$1';
    let response = await db.executeSql(sqlQuery, [id]);
    if (response.rows != null && response.rows !== undefined) {
        return response.rows[0]
    } else {
        return '';
    }
}

module.exports.checkExistsAnswers = async function (questionId) {
    let sqlQuery = 'SELECT id FROM questions WHERE is_disabled = false AND question = $1';
    let response = await db.executeSql(sqlQuery, [questionId]);
    if (response.rows[0] != null && response.rows[0] !== undefined) {
        return 'question already exists';
    } else {
        return '';
    }
}
