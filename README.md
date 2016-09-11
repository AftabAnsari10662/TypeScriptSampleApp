### Getting started

```
# clone our repo
$ git clone https://github.com/aftab10662/TypeScriptSampleApp.git

# change directory to working directory
$ cd TypeScriptSampleApp

# install the dependencies with npm
$ npm install

# install the client side dependencies with bower
$ bower install

# start the server
$ Gulp run
```
go to [http://localhost:5000](http://localhost:5000) in your browser.


### How to install the TypeScript Definition file for third party library like 
### Angular, knockout  and jQuery.

# cd TypeScriptSampleApp/src

# install TypeScript Defition file(tsd) using tsd Manager
$tsd install angular --resolve --save

# include the reference file into you ts files.
 /// <reference path="../typings/angularjs/angular.d.ts" />