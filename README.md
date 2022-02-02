# Getting Started

## Prerequisites
You will need *Node*, *Homebrew*, *Git* and *Git LFS* installed to complete setup.

### Homebrew
You can test to see if you already have Homebrew installed by running

```
brew -v
```

If it gives you a version, (e.g. `Homebrew 3.3.11`) you already have it installed! If you get a message like `command not found` you will need to install it using this command:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Node
Check if you have Node installed by running:

```
npm -v
```

If it gives you a version, (e.g. `8.3.1`) you already have it installed! If you get a message like `command not found` you will need to install it using this command:

```
brew install node
```

### Git
You _probably_ already have `git` installed, but just in case you don't, check by running:

```
git --version
```

If it's installed, you'll see something like `git version 2.34.1`. Otherwise, install it with:

```
brew install git
```

### Git LFS
This project also requires [Git LFS](https://git-lfs.github.com/). You can install it with:

```
brew install git-lfs
```

## First-time Development Environment Setup

Once all prerequisites are installed, you can set up the Refcode Development Environment.

Clone the repository to a local directory and navigate to that directory with your terminal.

Run the following commands:

```
npm install
git lfs install
```

Once you've run those two commands, the repository should be ready to run using the commands below.

## Available Scripts

Once you are set up you will have the following scripts available for use.

### Start the Development Environment

You'll use this command to spin up the development environment for doing work on the website. This allows you to see your changes on the website at http://localhost:3000.

`npm start`

 - Runs the app in the development mode.\
 - Open [http://localhost:3000](http://localhost:3000) to view it in the browser. All images will be broken when you do this. Read the next section for why.
 - The page will automatically reload if you make edits.\
 - You will also see any lint errors in the console.
 - Exit by typing `control + C` in the terminal.

### Build the app similar to a production build

This command does a full build and is sometimes necessary to get things configured correctly, e.g. when changes to images have been made, they won't show up in the Development Environment until after this command is run.

`npm run build`

 - Builds the app for production to the `build` folder.\
 - It correctly bundles React in production mode and optimizes the build and images for the best performance. No images will work at all until this command is run. So if you run `npm start` without ever having run this command, all images will be broken. This command will also need to be run again to see any subsequent image changes. Added a new image? Run `npm run build`. Edited an image? Run `npm run build`. Some image isn't working in the dev environment?  Run `npm run build`!
 - The build is minified and the filenames include the hashes.\
 - See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



# More information about Create-React-App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The following is the standard information that every Create-React-App project contains. You usually won't need to refer to these links, but they may be helpful.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
