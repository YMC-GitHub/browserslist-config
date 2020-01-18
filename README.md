# browserslist-config

## desc

browserslist share config for yemiancheng

## quick to use with production?
```sh
# install him
npm install browserslist-config-yemiancheng

# use him
#add as below in your package.json
:<<note
  "browserslist": [
    "extends browserslist-config-yemiancheng/index.js"
  ]
note
```

### use moblie share config
```sh
#add as below in your package.json
:<<note
  "browserslist": [
    "extends browserslist-config-yemiancheng/mobile.js"
  ]
note
```

### use desktop share config
```sh
#add as below in your package.json
:<<note
  "browserslist": [
    "extends browserslist-config-yemiancheng/desktop.js",
  ]
note
```

## quick to use with developer
```sh
# install him
git clone https://github.com/YMC-GitHub/browserslist-config.git

# install his deps
npm install

#run some cmd 
#...
#to get the browsers list for your project?
npx browserslist

#you want to use some feat?
#can i use css feat flex?
caniuse flex
#can i use js feat websockets?
caniuse websockets
#...

#can i use my css file app.css with the browsers list xx ?
#doiuse --browsers "ie >= 9, > 1% in CN, last 2 versions" ./dist/app.css

```

## some tool

- browserslist
- browserslist-ga
- caniuse-cmd
- doiuse 
- [browsers-support-badges](https://godban.github.io/browsers-support-badges/)
- [CanIUse Embed](https://caniuse.bitsofco.de/)
- [iwanttouse](http://www.iwanttouse.com/)

## some data 

in the year (201807-201907), in China , each platform usage rate  [data](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/china#monthly-201807-201907)。

in the year (201807-201907), in China , each os  usage rate [data](https://gs.statcounter.com/os-market-share/all/china#monthly-201807-201907)。

in the year (201807-201907), in China , each browser usage rate [data](https://gs.statcounter.com/browser-market-share/all/china#monthly-201807-201907)。


in the year (201807-201907), in China , each search-engine usage rate [data](https://gs.statcounter.com/search-engine-market-share/all/china#monthly-201807-201907)。

in the year (201807-201907), in China , each social-media usage rate [data](https://gs.statcounter.com/social-media-stats/all/china#monthly-201807-201907)。

in the year (201807-201907), in China , each screen-resolution usage rate [data](https://gs.statcounter.com/screen-resolution-stats/all/china#monthly-201807-201907)。