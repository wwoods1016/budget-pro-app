DROP DATABASE budgetPro_db;

CREATE DATABASE budgetPro_db;
USE budgetPro_db;

CREATE TABLE incm_exp(
    ieID int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (ieID),
    descript VARCHAR(100) NOT NULL,
    IEtype ENUM("Income", "Expense") NOT NULL,
    IEdate DATE,
    amount FLOAT(8,2),
    -- add default of 'Other' to the catagory column
    category ENUM("Bills","Utilities", "Savings", "CC Payment", "Other", "Wellness", "Food", "Personal Care","Travel") , 
    source VARCHAR(80)
);

CREATE TABLE household(
    hhID INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (hhID),
    hhName VARCHAR(100) NOT NULL,
    relIeId INT
);

CREATE TABLE hhMember(
    hhMemID INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (hhMemID),
    hhMemFirstName VARCHAR(100) NOT NULL,
    hhMemLastName VARCHAR(100) NOT NULL,
    relHHId INT
);

CREATE TABLE goals(
    goalId INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (goalId),
    gName VARCHAR(100) NOT NULL,
    gDesc TEXT(500),
    gAmount FLOAT (8.2),
    gDate DATE
);