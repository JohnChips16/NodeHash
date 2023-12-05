/*
Script usage
*/

const { runLibHashPythonScript, compareLibHashPythonScript } = require('../src/module.exports.js');  // Adjust the path based on your project structure


const { HashCc, comparePasswordsCc } = require('../src/module.exports.js')


/*1. Hash*/

 const inputPwd = 'bbq'
runLibHashPythonScript(inputPwd)
    .then((hashedPassword) => {
        console.log('Hashed Password (Python):', hashedPassword);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

/*2. Compare*/

const pwd = "33a6c812b8bb6732e7e5c92763a93f85771103aac9beb1c01956cd2e182f6c04cfe00bae24ef3144d5e0f8e8b41d95fa56a0832e1f88620504c20fba65419305"

compareLibHashPythonScript(inputPwd, pwd)


/*3*/

HashCc('test')
    .then(hashResult => {
        console.log(`Hash Result (C++/Shell): ${hashResult}`);
    })
    .catch(error => {
        console.error(error);
    });
    
    
    
 /*4*/
 
const inputPassword = 'test'; // Replace with your actual input password
const hashedPassword = 'ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff'; // Replace with your actual stored hashed password

comparePasswordsCc(inputPassword, hashedPassword)
    .then(passwordsMatch => {
        if (passwordsMatch) {
            console.log('Passwords match! (C++/shell)');
        } else {
            console.log('Passwords do not match.');
        }
    })
    .catch(error => {
        console.error(error);
    });
