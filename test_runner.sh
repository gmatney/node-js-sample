#!/bin/bash
./grader.js -c test/checks-test-1.json -f test/test1.html 
./grader.js -c test/checks-test-1.json -f test/test2.html 
./grader.js -c test/checks-test-2.json -f test/test1.html 
./grader.js -c test/checks-test-2.json -f test/test2.html
./grader.js --checks checks.json --url  http://hidden-everglades-8866.herokuapp.com/ 
