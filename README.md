# CIVI Mobile App

CIVI Mobile App

## Required tools
<!--ts-->
   * [Homebrew 3.2.6](#homebrew) - Only for MacOS
   * [Node.js 14 (LTS)](https://nodejs.org/en/download/)
   * [Yarn 1.22.11](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
   * [CocoaPods 1.10.2](#cocoapods)
   * [Watchman 2021.08.02.00](#nodejs-and-watchman) - Only for MacOS
   * [JDK 11 (LTS)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
   * [Android Studio and dependencies.](https://developer.android.com/studio/)
   * [Xcode 12 (LTS)](#xcode-12-is-required) - Only for MacOS
   * [Appcenter Cli 2.10.0](https://docs.microsoft.com/pt-br/appcenter/cli/)
<!--te-->
## Configuration guide
#### MacOS - for windows you can click on the links in the required tools section
##### Homebrew
```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
##### NodeJs and Watchman
```bash
$ brew install node@14 watchman
```
##### Yarn
```bash
$ npm install --global yarn
```
##### CocoaPods
```bash
$ gem install cocoapods
```

##### The next step is to install Android Studio and dependencies
To test React-Native on Android, an Android simulator is required and the use of [Android Studio](https://developer.android.com/studio/) is recommended. For Android Studio, JDK is required and version 8 is about to be discontinued, so install [JDK 11 (LTS)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).

##### Xcode 12 is required
This information is available [here](https://reactnative.dev/blog/2021/03/12/version-0.64#major-dependency-version-changes). Download of [Xcode here](https://apps.apple.com/br/app/xcode/id497799835?mt=12) or search the Mac App Store for Xcode.
###### If you have problem with this configuration, [Here](https://react-native.rocketseat.dev/) you can find more information on how to configure React-Native for Windows, Linux and MacOs.
## Testing the app

##### IOS
```bash
# Under the root folder /civi
$ yarn
# Go to the ios folder /civi/ios
$ cd ios && pod install && cd ..
# Create a .env file based on .env.example file
$ cp .env.example .env
# Inside the .env, populate the required environments API_URL= #http://your-network-address:3333 or #http://localhost:3333
# Then run the app
$ yarn ios
```
##### Android
```bash
# Under the root folder /civi
$ yarn
# Create a .env file based on .env.example file
$ cp .env.example .env
# Inside the .env, populate the required environments API_URL= #http://your-network-address:3333
# Then run the app
$ yarn android
```
## Linter
```bash
# To test the linter and get the possible errors, under the root folder /civi
$ yarn lint
```

# CIVI API

CIVI Api

## Required tools
<!--ts-->
   * [Node.js 14 (LTS)](https://nodejs.org/en/download/)
   * [Yarn 1.22.11](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
   * [Homebrew 3.2.6](#homebrew) - Only for MacOS
<!--te-->
## Configuration guide
#### MacOS - for windows you can click on the links in the required tools section
##### Homebrew
```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
##### NodeJs
```bash
$ brew install node@14
```
##### Yarn
```bash
$ npm install --global yarn
```

##### RUN API
```bash
# Under the root folder /api
$ yarn
# Then run the api
$ yarn start
```
## Linter
```bash
# To test the linter and get the possible errors, under the root folder /civi
$ yarn lint
```
### OBS
```bash
# If the data not showing, verify if the api is running
# You must run the api and then run the mobile app
```

