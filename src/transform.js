const browserslist = require('browserslist');

const formatNum = num => bit => { num = num.toFixed(bit); return parseFloat(num) }

const ouputBrowsersList = (str) => { let arr = str.split('in'); let rate = arr[0]; let area = arr[1]; console.log(`git list used by ${rate} user in  area ${area}:`) }
let browsersDesc
let list
let coverage
let area

//get some browsers list
//git list used by 1% user in  area US
/*
browsersDesc = '> 1% in US'
list = browserslist(browsersDesc)
ouputBrowsersList(browsersDesc)
console.log(list)
*/
//git list used by 1% user in  area china
/*
browsersDesc = '> 1% in CN'
list = browserslist(browsersDesc)
ouputBrowsersList(browsersDesc)
console.log(list)
*/
//git list used by 1% user in  area aisa
/*
browsersDesc = '> 1% in alt-AS'
list = browserslist(browsersDesc)
ouputBrowsersList(browsersDesc)
console.log(list)
*/
//git list used by 1% user in area global 
/*
browsersDesc = '> 1%'
list = browserslist(browsersDesc)
ouputBrowsersList(browsersDesc)
console.log(list)
*/


//get his coverage in some area 
//git list used by 1% user in  area US
/*
let area = 'US'
browsersDesc = `> 1% in ${area}`
list = browserslist(browsersDesc)
coverage = browserslist.coverage(list, area)
coverage = formatNum(coverage)(2)
console.log(`These browsers account for ${coverage}% of all users in the area ${area}`)
*/


//git list used by 1% user in  area china
area = 'CN'
browsersDesc = `> 1% in ${area}`
list = browserslist(browsersDesc)
ouputBrowsersList(browsersDesc)
console.log(list)
//git list coverage used by 1% user in  area china
coverage = browserslist.coverage(list, area)
coverage = formatNum(coverage)(2)
//ouput coverage
console.log(`These browsers account for ${coverage}% of all users in the area ${area}`)
//equals:
//browserslist --coverage=CN "> 1% in CN"

area = 'CN'
browsersDesc = `defaults`
//git list with default browserlist config
list = browserslist(browsersDesc)
ouputBrowsersList(browsersDesc)
console.log(list)
//git list coverage in  area china
coverage = browserslist.coverage(list, area)
coverage = formatNum(coverage)(2)
console.log(`These browsers account for ${coverage}% of all users in the area ${area}`)


