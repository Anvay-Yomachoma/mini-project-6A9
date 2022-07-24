//const { dblClick } = require('@testing-library/user-event/dist/click');
var express = require('express');
var router = express.Router();
const fs = require('fs');
const db = require('../database');
const fileupload = require("express-fileupload");
const { type } = require('os');
const e = require('express');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/form', (req, res) => 
{
  let floc;
  const report = req.files.report;
  floc = __dirname + "/uploads/" +report.name;
  report.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
  const { noMembers, membersDetails, semester, subject, subCode, title, assignedFaculty, projLink,teamId} = req.body;
  
  const members = JSON.parse(membersDetails)
  
  members.forEach(member => {
    
  
  if(member.usn&&member.name&&subject&&title&&teamId&&assignedFaculty&&projLink)
  {
    try
    {
      db.promise().query(`INSERT INTO student VALUES('${member.usn}', '${member.name}', '${subject}', '${title}', '${teamId}', '${assignedFaculty}',0 , '${projLink}', '${floc}')`)
      res.status(201).send({msg : 'Team registgered'});
    }
    catch(err)
    {
      console.log(err);
      res.status(506).send({msg : err});
    }
  }
  else
  {
    res.status(501).send({msg : "Not truthy value"});
  }
});
});

router.post('/USN', async (req, res) =>
{
  const {USN} = req.body;
  if(USN)
  {
    try
    {
      const results = await db.promise().query(`SELECT * FROM student WHERE USN = '${USN}'`); 
      res.status(200).send(results[0]); 
    }
    catch(err)
    {
      console.log(err);
    }
  }
});
router.post('/all', async (req, res) =>
{
  
    try
    {
      const results = await db.promise().query(`SELECT * FROM student`); 
      res.status(200).send(results[0]); 
    }
    catch(err)
    {
      console.log(err);
    }
});
router.post('/Subject', async (req, res) =>
{
  const {Subject} = req.body;
  if(Subject)
  {
    try
    {
      const results = await db.promise().query(`SELECT * FROM student WHERE Subject = '${Subject}'`); 
      res.status(200).send(results[0]); 
    }
    catch(err)
    {
      console.log(err);
    }
  }
});
router.post('/Marks', async (req, res) =>
{
  const {USN, Teamid, marks} = req.body;
  if(Subject)
  {
    try
    {
      const results = await db.promise().query(`UPDATE student SET Marks = ${marks} WHERE Teamid = '${Teamid}' AND USN = '${USN}'`); 
      res.status(200).send(results[0]); 
    }
    catch(err)
    {
      console.log(err);
    }
  }
});
router.post('/Teamid', async (req, res) =>
{
  const {USN, Subject} = await req.body;
  if(USN&&Subject)
  {
    const tid = teamid(USN, Subject);
    res.status(200).send(tid);
  }
});
const idstr = idn =>
{
    let l = Math.log(idn) * Math.LOG10E + 1 | 0;
    let n = "";
    for(i = 0; i<(4-l); i++)
    {
        n = "0"+n;
    }
    n = n+idn.toString();
    return n;
}
const teamid = (USN, Subject) =>
{
  let yr = USN.slice(3, 5);
  let tid, data;
  try
  {
    data = fs.readFileSync("./team.json").toString('utf8');
  }
  catch(err)
  {
    console.log("Kya karu bhagwaan!!")
  }
  // console.log("File data:", data);
  let teamdata, idn;
  try
  {
    teamdata = JSON.parse(data);
    if(typeof(teamdata[yr][Subject]) != 'number')
    {
      teamdata[yr][Subject] = 0;
    }
    teamdata[yr][Subject]++;
    idn = teamdata[yr][Subject];
    
  }
  catch(err)
  {
    console.log("Yahan aaya");
    teamdata[yr] = {};
    teamdata[yr][Subject] = 1;
    idn = teamdata[yr][Subject];
  }
  id = idstr(idn);
  tid = (yr+Subject+id);
  data = JSON.stringify(teamdata);
  console.log(tid);
  fs.writeFileSync('./team.json', data);
  return tid;
}

module.exports = router;
