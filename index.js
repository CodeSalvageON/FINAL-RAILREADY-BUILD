// Server
// Downloads and settings start here

const fs = require('fs');
const express = require('express');

const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const io = require('socket.io')(http);
const sanitizer = require('sanitizer');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let cf_score = 0;
let fb_score = "||0";

// Google Firestore

const {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
} = process.env;

const serviceAccount = {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
};

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Routes

app.get('', function (req, res) {
  const index = __dirname + '/public/static/INDEX.html';

  res.sendFile(index);
});

app.get('/challenges', function (req, res) {
  const index = __dirname + '/public/static/CHALLENGES.html';

  res.sendFile(index);
});

app.get('/rscore', async function (req, res) {
  const railready_hiscoreRef = db.collection("rscore").doc("chatlog");
  const rscore = await railready_hiscoreRef.get();

  res.send(rscore.data().log);
});

app.get('/sholder', async function (req, res) {
  const railready_sholderRef = db.collection("sholder").doc("chatlog"); 
  const sholder = await railready_sholderRef.get();

  res.send(sholder.data().log);
});

app.get('/cf', function (req, res) {
  res.send(String(cf_score));
});

app.get('/fb', function (req, res) {
  res.send(fb_score);
});

app.post('/fish', function (req, res) {
  const score = req.body.score;
  const clean_score = parseInt(sanitizer.sanitize(score));

  if (clean_score === NaN) {
    res.send("");
  }

  else {
    if (clean_score > cf_score) {
      cf_score = clean_score;
      res.send("win");
    }

    else {
      res.send("");
    }
  }
});

app.post('/frog', function (req, res) {
  const score = req.body.score;
  const clean_score = parseInt(sanitizer.sanitize(score));

  const name = req.body.name;
  const clean_name = sanitizer.sanitize(name);

  if (clean_score === NaN) {
    res.send("");
  }

  else {
    const good_name = clean_name.replace("||");
    const data_thing = fb_score.split("||");

    if (data_thing[0] === name) {
      res.send("urself");
    }

    else {
      if (clean_score > data_thing[1]) {
        fb_score = String(good_name + "||" + String(clean_score));
        res.send("win");
      }

      else {
        res.send("");
      }
    }
  }
});

app.post('/cf', async function (req, res) {
  const railready_cfRef = db.collection("couch-fishing").doc("chatlog");
  const cf = await railready_cfRef.get();

  let name = req.body.username;
  const score = req.body.score;

  if (name === null || name === "" || name === undefined) {
    name = "Anonymous User";
  }

  const clean_name = sanitizer.sanitize(name);
  const clean_score = sanitizer.sanitize(score);

  if (clean_score.includes(process.env.verify)) {
    await railready_cfRef.set({
      log : clean_score
    });
    
    res.send("");
  }

  else {
    res.send("Fuck you");
  }
});

app.post('/rscore', async function (req, res) {
  const railready_hiscoreRef = db.collection("rscore").doc("chatlog");
  const rscore = await railready_hiscoreRef.get();

  const railready_sholderRef = db.collection("sholder").doc("chatlog"); 
  const sholder = await railready_sholderRef.get();

  let name = req.body.username;
  const score = req.body.score;

  if (name === null || name === "" || name === undefined) {
    name = "Anonymous User";
  }

  const clean_name = sanitizer.sanitize(name);
  const clean_score = sanitizer.sanitize(score);

  await railready_sholderRef.set({
    log : clean_name
  });

  if (clean_score.includes(process.env.verify)) {
    await railready_hiscoreRef.set({
      log : clean_score
    });

    res.send("");
  }

  else {
    res.send("Fuck you");
  }
});

http.listen(port, function(){
  console.log('listening on *:' + port);

  async function fixData () {
    const railready_hiscoreRef = db.collection("rscore").doc("chatlog");
    const fix_data = {
      log : ""
    }

    const rscore = await railready_hiscoreRef.get();

    if (!rscore.exists) {
      await railready_hiscoreRef.set(fix_data);
      console.log("FIXED");
    }

    else {
      console.log("No fix needed.");
    }

    const railready_sholderRef = db.collection("sholder").doc("chatlog");
    
    const sholder = await railready_sholderRef.get();

    if (!sholder.exists) {
      await railready_sholderRef.set(fix_data);
      console.log("FIXED");
    }

    else {
      console.log("No fix needed.");
    }

    const railready_cfRef = db.collection("couch-fishing").doc("chatlog");
    
    const cf = await railready_cfRef.get();

    if (!cf.exists) {
      await railready_cfRef.set(fix_data);
      console.log("FIXED");
    }

    else {
      console.log("No fix needed.");
    }
  }

  fixData();
});