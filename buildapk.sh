#!/bin/bash
#mkdir android/app/src/main/assets
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
cd android/
#echo "sdk.dir = /home/manua/Android/Sdk" >local.properties
./gradlew assembleDebug
cd ..
