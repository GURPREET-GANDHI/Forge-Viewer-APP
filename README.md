--------------
Prerequisites:
--------------
 - node v10.15.3
 - cordova 8.0.0
 - npm 6.1.0
 - Setup valid iOS development certificate & provisioning profile to build app for iOS
 - The model drawings should be served from a server and the links should be updated in file 'src\app\service\offline-data-service.ts'

---------------
Steps to build:
---------------
Android:
 - npm install
 - npm run build
 - cordova platform add android@6.1.0
 - cordova run android  (apk will be generated in platforms\android\)

iOS:
 - npm install
 - npm run build
 - cordova platform add ios@4.4.0 (This creates xcodepfoject file in platforms folder)
 - open xCode project and select 'automatic signing' or choose correct team and profile.
 - connect device and push the app to install.

-----------------
 Possible errors:
-----------------
 ISSUE #01
 ---------
 UnhandledPromiseRejectionWarning: CordovaError: Current working directory is not a Cordova-based project.
 Fix: create a folder with name 'www' in the root folder.

 ISSUE #02
 ---------
 If any errors during npm install of ios, then it is possible to install the required node module manually.

 ISSUE #03
 ---------