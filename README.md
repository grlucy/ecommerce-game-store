# MERN Starter Code

This repo takes the MERN starter code provided by the University of Richmond Full Stack Bootcamp and adds the following dependencies:

- axios
- react-router-dom
- mongoose
- babel-plugin-transform-remove-console (Removes console.\*'s from production build - see notes below)

Dependencies have also been audited to fix all security vulnerabilities.

.gitignore files have been added to the root and client directories.

## To Use:

1. Clone the repo to your local machine
2. Open the root directory in terminal and run "npm install"
3. Replace the app name (currently "groceries") in both package.json files, both package-lock.json files, and in manifest.json
4. Replace logo192.png and favicon.ico with your own icon art (Recommended icon generator: https://favicon.io/)
5. The code is now ready for you to add your own site content.

## Notes:

- You will still be able to see console.log's in your development build. They will only be removed from the production build, which is created automatically when you push to heroku.
