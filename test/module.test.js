/*
Script usage
*/

const { runLibHashPythonScript, compareLibHashPythonScript } = require('../src/module.exports.js');  // Adjust the path based on your project structure
/*1. Hash*/

 const inputPwd = 'bbq'
runLibHashPythonScript(inputPwd)
    .then((hashedPassword) => {
        console.log('Hashed Password (1):', hashedPassword);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

/*2. Compare*/

const pwd = "33a6c812b8bb6732e7e5c92763a93f85771103aac9beb1c01956cd2e182f6c04cfe00bae24ef3144d5e0f8e8b41d95fa56a0832e1f88620504c20fba65419305"

compareLibHashPythonScript(inputPwd, pwd)
