const db = require('../services/db')


module.exports.createQuestion = async function (question, userId) {
    let insertQuery = 'INSERT INTO QUESTIONS(question,userid) VALUES($1, $2) RETURNING id';
    let response = await db.executeSql(insertQuery, [question, userId]);
    if (response.rows != null && response.rows !== undefined && response.rows.length > 0) {
        return response.rows[0].id;
    } else {
        return null;
    }
}

module.exports.questionsGetById = async function (id) {
    let sqlQuery = 'SELECT id,question FROM users WHERE is_disabled = false AND id = $1';
    let response = await db.executeSql(sqlQuery, [id]);
    if (response.rows != null && response.rows !== undefined) {
        return response.rows[0]
    } else {
        return '';
    }
}


module.exports.deleteQuestion = async function (id) {
    let sqlQuery = 'UPDATE QUESTIONS SET is_disabled=true where id=$1';
    let response = await db.executeSql(sqlQuery, [id]);
    if (response.rows != null && response.rows !== undefined) {
        return response.rows[0]
    } else {
        return '';
    }
}

module.exports.checkExistsQuestion = async function (question) {
    let sqlQuery = 'SELECT id FROM questions WHERE is_disabled = false AND question = $1';
    let response = await db.executeSql(sqlQuery, [question]);
    if (response.rows[0] != null && response.rows[0] !== undefined) {
        return 'question already exists';
    } else {
        return '';
    }
}