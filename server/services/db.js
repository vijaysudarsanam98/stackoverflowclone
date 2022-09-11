const { Pool } = require('pg');

/* Connection string settings */
const pool = new Pool({
    host: 'localhost',
    port: '5432',
    database: 'stackoverflowdb',
    user: 'postgres',
    password: 'vijay',
    max: 5
});
let resContent = {};

exports.executeSql = async function (query, params) {
    try {
        const result = await pool.query(query, params);
        resContent.message = 'Success.';
        resContent.success = true;
        resContent.rows = result.rows || null;
        return resContent;
    } catch (err) {
        console.log(err)
        resContent.message = err;
        resContent.success = false;
        resContent.rows = null;
        throw resContent;
    }
}