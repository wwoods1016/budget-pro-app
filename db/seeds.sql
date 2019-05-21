USE budgetPro_db;

-- income-expense seeds
INSERT INTO incm_exp (descript, IEtype,IEdate,amount,category,source) VALUE ("Puppy Purchase", "Expense","2019-03-14",250.00,"Wellness","bank account");
INSERT INTO incm_exp (descript, IEtype,IEdate,amount,category,source) VALUE ("Weekly Groceries", "Expense","2019-04-14",300.00,"Food","bank account");
INSERT INTO incm_exp (descript, IEtype,IEdate,amount,category,source) VALUE ("Paycheck", "Income","2019-05-01",7000.00,"Wellness","my good job");
INSERT INTO incm_exp (descript, IEtype,IEdate,amount,category,source) VALUE ("Side Hustle", "Income","2019-04-15",2500.00,"Wellness","my awesome app");
INSERT INTO incm_exp (descript, IEtype,IEdate,amount,category,source) VALUE ("Mortgage", "Expense","2019-04-07",5000.00,"Bills","bank account");
INSERT INTO incm_exp (descript, IEtype,IEdate,amount,category,source) VALUE ("Car Note", "Expense","2019-04-15",350.00,"Bills","bank account");
INSERT INTO incm_exp (descript, IEtype,IEdate,amount,category,source) VALUE ("Insurance", "Expense","2019-04-15",150.00,"Bills","bank account");
INSERT INTO incm_exp (descript, IEtype,IEdate,amount,category,source) VALUE ("Stool App", "Expense","2019-05-15",11.99,"Wellness","bank account");


-- Household seeds
INSERT INTO household (hhName, relIeId) VALUE ("Thomas");
INSERT INTO household (hhName, relIeId) VALUE ("Woods");
INSERT INTO household (hhName, relIeId) VALUE ("Aujla");
INSERT INTO household (hhName, relIeId) VALUE ("Reese");
INSERT INTO household (hhName, relIeId) VALUE ("Deshpande");

-- Household member seeds
INSERT INTO hhMember (hhMemFirstName, hhMemLastName,relHHId) VALUE ("Francis", "Thomas");
INSERT INTO hhMember (hhMemFirstName, hhMemLastName,relHHId) VALUE ("Zech", "Thomas");
INSERT INTO hhMember (hhMemFirstName, hhMemLastName,relHHId) VALUE ("John", "Aujla");
INSERT INTO hhMember (hhMemFirstName, hhMemLastName,relHHId) VALUE ("Ringo", "Reese");
INSERT INTO hhMember (hhMemFirstName, hhMemLastName,relHHId) VALUE ("Michael", "Deshpande");
INSERT INTO hhMember (hhMemFirstName, hhMemLastName,relHHId) VALUE ("Christoper", "Deshpande");


-- goals seeds
INSERT INTO goals (gName, gDesc,gAmount,gDate) VALUE ("Trip to Bali", "Move the whole fam and the inlaws to BALI BABY!", 7000.00,"2020-06-01");
INSERT INTO goals (gName, gDesc,gAmount,gDate) VALUE ("Retirement", "One Million Dollars and a house on the beach", 1000000.00,"2045-01-01");
INSERT INTO goals (gName, gDesc,gAmount,gDate) VALUE ("College Fund", "Furman U!", 170000.00,"2023-08-15");
INSERT INTO goals (gName, gDesc,gAmount,gDate) VALUE ("Christmas 2019", "Everyone gets a toy Coal Mine", 50000.00,"2019-11-15");
INSERT INTO goals (gName, gDesc,gAmount,gDate) VALUE ("Commercial 3d Printer", "Maveric 3d Printer to print my own Tesla Parts", 85000.00,"2022-04-15");
INSERT INTO goals (gName, gDesc,gAmount,gDate) VALUE ("Monster Truck Show", "Vroom Vrooom, Crush", 500.00,"2019-09-11");