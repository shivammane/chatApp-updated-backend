-- ** create status table query

CREATE TABLE status(
statusid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
status VARCHAR(10)
);

-- **inserting some status in table status

INSERT INTO status (status) VALUES  ("online"),("offline"),("sent"),("received"),("seen");

-- **create users table query**

CREATE TABLE users(
userid int AUTO_INCREMENT PRIMARY KEY,
firstname varchar(20) NOT NULL,
lastname varchar(20) NOT NULL,
email varchar(30) NOT NULL UNIQUE,
password varchar(20) NOT NULL,
statusid INT,
connection_id varchar(20),
FOREIGN KEY (statusid) REFERENCES status(statusid)
);


-- **deleting users table query**

-- DROP TABLE USERS;

-- **clear users table query**

-- TRUNCATE TABLE users;


-- **create messeges table query**

CREATE TABLE messeges(
messegeid INT AUTO_INCREMENT PRIMARY KEY,
sender INT ,
messege TEXT,
receiver INT,
time DATETIME,
statusid INT,
FOREIGN KEY (sender) REFERENCES users(userid),
FOREIGN KEY (receiver) REFERENCES users(userid),
FOREIGN KEY (statusid) REFERENCES status(statusid)
);

-- **deleting messeges table query**

-- DROP TABLE messeges;

-- **important query for selecting messeges**

-- SELECT u.firstname AS sender ,m.messege,k.firstname AS receiver FROM messeges m
-- JOIN users u ON u.userid = m.sender
-- JOIN users k ON k.userid = m.receiver;
