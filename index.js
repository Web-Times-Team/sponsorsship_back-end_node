// for Faizou machine, 
// use nodedev to start app in dev environnement
// use nodedevc to inspect code in chrome
// use noderaspprod to start app in raspberry server



// executing bash script 

const bash = require('child_process');
const mysql = require('mysql');
const config = require('./config');

bash.exec('chmod u+x creMySQLdb');

const creMySQLdb = bash.exec('./DB/creMySQLdb');

creMySQLdb.stdout.on('data', (data) => {
  console.log(data);
});

creMySQLdb.stderr.on('data', (data) => {
  console.log(data);
});

// connect to database
const con = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password
});

// create dataBase
con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS one_to_many", (err, result) => {
    if (err) throw err;
    console.log("Database created");
    // create tables
    // il n'y as pas assez de verrous sur la table transaction, actuellement une transaction peut ne avoir studentID, sponsorsID, donorID


    con.query("use one_to_many", (err, result) => {
      if (err) throw err;
      console.log("one_to_many is used");
      const createStudents = `create table if not exists students(
      id int auto_increment,
      lastName varchar(255) not null,
      firstName varchar(255) not null,
      middleName varchar(255),
      country varchar(255) not null,
      photo text not null,
      school varchar(255) not null,
      age int not null,
      constraint pk_students_id primary key (id)
  )`;
      const createSponsors = `create table if not exists sponsors(
    id int auto_increment,
    lastName varchar(255) not null,
    firstName varchar(255) not null,
    middleName varchar(255),
    country varchar(255) not null,
    photo text not null,
    age int not null,
    constraint pk_sponsors_id primary key (id)
)`;

      const createSponsorships = `create table if not exists sponsorships(
  studentId int not null,
  sponsorId int not null,
  date Date not null,
  constraint pk_sponsorships_studentId primary key(studentId, sponsorId),
  constraint fk_sponsorships_studentId foreign key(studentId) references students(id),
constraint fk_sponsorships_sponsorId foreign key(sponsorId) references sponsors(id)
)`;



      const createDonors = `create table if not exists donors(
  id int auto_increment,
  lastName varchar(255) not null,
  firstName varchar(255) not null,
  middleName varchar(255),
  country varchar(255) not null,
  photo text not null,
  age int not null,
  constraint pk_donors_id primary key(id)
)`;

      const createOngs = `create table if not exists ongs(
  name varchar(255),
  adresse varchar(255),
  constraint pk_name primary key(name)
)`;


      const createDonations = `create table if not exists donations(
  ongName varchar(255),
  donorId int,
  constraint pk_donor_id_ong_name primary key(donorId, ongName),
  constraint fk_donation_ongName foreign key(ongName) references ongs(name),
  constraint fk_donation_donor_id foreign key(donorId) references donors(id)
)`
      const createTransactions = `create table if not exists transactions(
  id int auto_increment,
  date Date not null,
  studentId int,
  sponsorId int,
  donorId int,
  ongName varchar(255),
  amount int not null,
  constraint pk_transactions_id primary key(id),
constraint fk_transactions_studentId foreign key(studentId) references sponsorships(studentId),
constraint fk_transactions_sponsorId foreign key(sponsorId) references sponsorships(sponsorId),
constraint fk_transactions_donorId foreign key(donorId) references donors(id),
constraint fk_transactions_ongName foreign key(ongName) references ong(name)
)`;
      const createTalents = `create table if not exists talents(
  id int auto_increment,
  lastName varchar(255) not null,
  firstName varchar(255) not null,
  middleName varchar(255),
  country varchar(255) not null,
  photo text not null,
  age int not null,
  skill varchar(255) not null,
  constraint pk_talents_id primary key(id)
)`;


      const createArticles = `create table if not exists articles(
  articleNu int auto_increment,
  title varchar(255) not null,
  content text not null,
  constraint pk_articles_id primary key(articleNu)
)`;
      con.query(createStudents, (err, result) => {
        if (err) throw err;
        console.log("students table is created");
      });

      con.query(createSponsors, (err, result) => {
        if (err) throw err;
        console.log("sponsors table is created");
      });
      con.query(createSponsorships, (err, result) => {
        if (err) throw err;
        console.log("sponsorships table is created");
      });
      con.query(createDonors, (err, result) => {
        if (err) throw err;
        console.log("donors table is created");
      });
      con.query(createOngs, (err, result) => {
        if (err) throw err;
        console.log("ongs table is created");
      });

      con.query(createDonations, (err, result) => {
        if (err) throw err;
        console.log("donations table is created");
      });

      con.query(createTransactions, (err, result) => {
        if (err) throw err;
        console.log("transactions table is created");
      });

      con.query(createTalents, (err, result) => {
        if (err) throw err;
        console.log("Talents tables is created");
      });
      con.query(createArticles, (err, result) => {
        if (err) throw err;
        console.log("articles table is created");
      });
    });
  });
});


