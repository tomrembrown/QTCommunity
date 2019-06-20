'use strict'

const passwordHash = require('password-hash')
const db = require('./../db')

const checkPassword = async function (login, password) {
	let authenticated = false;
	
	const now = new Date();
	const token = Number.parseInt(Date.now() / 1000) + '' + login + password;
	
	const updateQuery = 'UPDATE organizations SET login_token = MD5($1), last_logged_in = $2 WHERE login = $3';
	const passwordLookupQuery = 'SELECT password_encrypted, login_token FROM organizations WHERE login = $1';
	let passwordEncrypted, loginToken;
	
	try{
		await db.query(updateQuery, [token, now, login]);
		const {rows} = await db.query(passwordLookupQuery, [login]);
		
		passwordEncrypted = rows[0].password_encrypted;
		loginToken = rows[0].login_token;
	}
	catch(error){
		console.log("Error running query", error);
	}

	if(passwordEncrypted !== null || passwordEncrypted !== undefined){
    authenticated = passwordHash.verify(password, passwordEncrypted);
	}
	
	if(authenticated){
		return {'authenticationToken':loginToken};
	}
	else{
		return {};
	}
}

module.exports = checkPassword
