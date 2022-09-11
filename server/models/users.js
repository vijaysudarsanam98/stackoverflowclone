
const db=require('../services/db')

module.exports.createUser = async function (name,email,password,is_disabled) {
    let insertQuery = 'INSERT INTO USERS(name, email,password,is_disabled) VALUES($1, $2,$3,$4) RETURNING id';
    let response = await db.executeSql(insertQuery, [name,email,password,is_disabled]);
    if (response.rows != null && response.rows !== undefined && response.rows.length > 0) {
        return response.rows[0].id;
    } else {
        return null;
    }
}

module.exports.checkExistsEmailAddress = async function (email) {
    let sqlQuery = 'SELECT id FROM users WHERE is_disabled = false AND email = $1';
    let response = await db.executeSql(sqlQuery, [email.toString().toLowerCase()]);
    if (response.rows[0] != null && response.rows[0] !== undefined) {
            return 'Email Address already exists';
    } else {
            return '';
    }
}

module.exports.checkExistsPassword = async function (password) {
    let sqlQuery = 'SELECT id FROM users WHERE is_disabled = false AND password = $1';
    let response = await db.executeSql(sqlQuery, [password]);
    if (response.rows[0] != null && response.rows[0] !== undefined) {
            return 'Password Address already exists';
    } else {
            return '';
    }
}

module.exports.usersGetById = async function (id) {
    let sqlQuery = 'SELECT id,name,email FROM users WHERE is_disabled = false AND id = $1';
    let response = await db.executeSql(sqlQuery, [id]);
    if (response.rows != null && response.rows !== undefined) {
            return response.rows[0]
    } else {
            return '';
    }
}
