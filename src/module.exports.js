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
                console.log('Passwords match! (Python)');
            } else {
                console.log('Passwords do not match.');
            }
        })
        .catch((error) => {
            console.error('Error at comparing password:', error);
        });
}


function HashCc(inputString) {
    const scriptPath = path.resolve('../lib/libc++/command.sh'); // Replace with the actual path to your script
    const programPath = path.resolve('./lib/libc++/my_program'); // Replace with the actual path to your program

    return new Promise((resolve, reject) => {
        const command = `${scriptPath} "${inputString}"`;

        // Set the working directory to the script's directory
        const options = {
            cwd: path.dirname(scriptPath)
        };

        exec(command, options, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                reject(`stderr: ${stderr}`);
                return;
            }
            resolve(stdout.trim()); // Trim to remove trailing newline
        });
    });
}


function comparePasswordsCc(inputPassword, hashedPassword) {
    const scriptPath = path.resolve('../lib/libc++/command.sh'); // Replace with the actual path to your script

    return HashCc(inputPassword, scriptPath)
        .then(hashedInputPassword => {
            // Compare the hashed input password with the provided hashed password
            return hashedInputPassword === hashedPassword;
        })
        .catch(error => {
            console.error(`Error comparing passwords: ${error}`);
            return false; // Comparison failed due to an error
        });
}


// Example usage:
// const inputString = 'your_input_string'; // Replace with your actual input string

// executeShellScript(inputString)
//     .then(output => {
//         console.log(`Script Output: ${output}`);
//     })
//     .catch(error => {
//         console.error(error);
//     });


// Example usage:
// const inputString = 'test'; // Replace with your actual input string

// hashString(inputString)
//     .then(hashResult => {
//         console.log(`Hash Result: ${hashResult}`);
//     })
//     .catch(error => {
//         console.error(error);
//     });





// function HashCc(inputString) {
//     const executablePath = path.resolve('../lib/libc++/my_program'); // Replace with the actual relative path

//     return new Promise((resolve, reject) => {
//         // Command to execute the compiled C++ program
//         const command = `${executablePath} ${inputString}`;

//         exec(command, (error, stdout, stderr) => {
//             if (error) {
//                 reject(`Error: ${error.message}`);
//                 return;
//             }
//             if (stderr) {
//                 reject(`stderr: ${stderr}`);
//                 return;
//             }
//             resolve(stdout.trim()); // Trim to remove trailing newline
//         });
//     });
// }

// Example usage:
// const inputString = 'your_input_string'; // Replace with your actual input string

// hashString(inputString)
//     .then(hashResult => {
//         console.log(`Hash Result: ${hashResult}`);
//     })
//     .catch(error => {
//         console.error(error);
//     });


// Example usage:
// const inputString = 'your_input_string'; // Replace with your actual input string

// hashString(inputString)
//     .then(hashResult => {
//         console.log(`Hash Result: ${hashResult}`);
//     })
//     .catch(error => {
//         console.error(error);
//     });





// Export the functions for use in other modules
module.exports = {
    runLibHashPythonScript,
    compareLibHashPythonScript,
    HashCc,
    comparePasswordsCc
};
