// libHash.js
const { exec } = require('child_process');
const path = require('path');

function runLibHashPythonScript(inputString) {
    return new Promise((resolve, reject) => {
        const pythonScriptPath = path.join(__dirname, '../lib/libpython/lib_module.py');

        exec(`python "${pythonScriptPath}" "${inputString}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                reject(error.message);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                reject(stderr);
                return;
            }
            // Resolve the Promise with the hashed password
            resolve(stdout.trim());
        });
    });
}

function compareLibHashPythonScript(inputPwd, hashedPwdFromDatabase) {
    runLibHashPythonScript(inputPwd)
        .then((hashedPassword) => {
            // Compare the hashed input password to the hashed password from the database
            if (hashedPassword === hashedPwdFromDatabase) {
                console.log('Passwords match!');
            } else {
                console.log('Passwords do not match.');
            }
        })
        .catch((error) => {
            console.error('Error at comparing password:', error);
        });
}

// Export the functions for use in other modules
module.exports = {
    runLibHashPythonScript,
    compareLibHashPythonScript
};
