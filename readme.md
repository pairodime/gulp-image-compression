# Image Compression Kit

This is a great tool for optimizing images ready for produciton.

## Features
- Tiny PNG API = https://tinypng.com/developers/subscription
- Imagmin for generic PNG, JPEG, GIF processing

## Prequisites
There are a few Software Packages you need to install before you can get started

* node.js = https://nodejs.org/en/
* Gulp -global = http://gulpjs.com/
```
$ npm install --global gulp-cli
```
   
## Getting Started
* Download this repo to your local machine -> Place your RAW images in '/images/raw/'

Then run these commands:

```
$ npm install
```

This will add all the contributed modules for task runners.

From there - Let's compress images!

# Post Installation
You have the choice of using Tiny PNG API (which is FREE for the first 500/mo) or generic image file reduction using Imagemin

## TinyPNG 
```
$ gulp tinypng
```

or

## Imagemin
```
$ gulp images
```
