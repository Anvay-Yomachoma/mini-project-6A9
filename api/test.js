const e = require("express");
const fs = require("fs");
let data = fs.readFileSync("./ok.json").toString('utf8');
let teamdata;

console.log("File data:", data);
try
{
    teamdata = JSON.parse(data);
    dope = "ok";
    console.log(teamdata[dope]);
}
catch(err)
{
    console.log("this is it no error hahaha");
    teamdata = {};
    dope = "19";
    teamdata[dope] = {}
    asd = "CN"
    teamdata[dope][asds] = 9;
    data = JSON.stringify(teamdata)
    fs.writeFileSync('./ok.json', data)

    // console.error(err, "te nani?");
}
console.log(teamdata)


// console.log("Customer address is:", teamdata.ok);

// let ok = ++teamdata.ok;
// // console.log("Team data wala",teamdata.ok);
// // console.log("ok wala",ok);
// // teamdata.nope = "why?";
// // console.log("Team data",teamdata);




// let number = 19
// let n = "";


// for(i = 0; i<(4-length); i++)
// {
//     n = "0"+n;
// }
// n = n+number.toString();
// console.log(n);

// try
//   {
    
    
//   }
//   catch(err)
//   {
    
//     idn = teamdata[yr][Subject];
//   }

console.log(typeof(9));