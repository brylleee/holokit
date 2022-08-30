# holokit
Android App that shows verview of streams of your favorite Hololivers. Built in vanilla JavaScript, and jQuery with Cordova

### Overview
I made this thing around September of 2021. The code is messy, but hey! _It works._
This is a hobby project and I don't earn any money from this. The assets used belong to their respective creators (_...been a long time so I forgot who they are ehem_)


### Getting Started
<p float="left">
    <img src="https://github.com/Z34O/holokit/blob/main/builds/DashboardHolokit.jpg" width="300" />
    <img src="https://github.com/Z34O/holokit/blob/main/builds/SettingsHolokit.jpg" width="300" />
</p>

[Download the apk](https://github.com/Z34O/holokit/raw/main/builds/HoloKitv1.0.0.apk "Holokitv1.0.0") or modify it and build it yourself

---

### Building
You need to install [Cordova](https://cordova.apache.org/docs/en/10.x/guide/cli/ "Cordova Installation") on your PC first. Along with the following required tools:
* Android Build Tools
* Gradle
* Java JDK
* Android SDK

---

After you successfully install all the tools above, clone this repository
```
$ git clone https://github.com/Z34O/holokit
$ cd holokit
```

...then you proceed to build the app
```
$ cordova platform add android
$ cordova build
```

__The Cordova output will show you where your build will be located.__
