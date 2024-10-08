// share code

// why having package.json is so important when 
// we start sharing our project with others developers
// we need to use git and github and create a new repository

// -new - new repository
// owner: mmansteve06   / repository name: temp-node-tut
// -create repository

 /*          ****
we need these 3 command
push an existing repository from the command line

git remote add origin git@github.com:mansteve06/temp-node-tut.git
git branch -M main
git push -u origin main
 */

// i copy the first url: git@github.com:mansteve06/temp-node-tut.git
// so i know where to push it

// inside ou repo or folder in vsc before we set it up as github repo 
// , we create a .gitignore file because 
// we want to place the node_modules folder in .gitignore file
// so that they will be ignored by mmy sourse control 
// and i won't bee pushing up this giant folder to github
// because there is no need for it

// type in .gitignore:  /node_modules   and this folder will be irnored

//the in terminal type: 
// -git init      // to initialise as an empty repo 
// - git add .
// - git commit -m "first commit"

// then we copy and paste these 3 command from git repo in order 
/// to set up that url (the remote url)

// then i go back to my github, reflesh the page and my repo will be there