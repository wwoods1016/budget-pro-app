USE budgetPro_db;

-- income-expense seeds
INSERT INTO incm_exp_db (descript, IEtype,IEdate,amount,catagory,source) VALUE ("Puppy Purchase", "Expense","03/14/2019",250.00,"Wellness","bank account");
INSERT INTO incm_exp_db (descript, IEtype,IEdate,amount,catagory,source) VALUE ("Weekly Groceries", "Expense","04/14/2019",300.00,"Food","bank account");
INSERT INTO incm_exp_db (descript, IEtype,IEdate,amount,catagory,source) VALUE ("Paycheck", "Income","05/01/2019",7000.00,"Wellness","my good job");
INSERT INTO incm_exp_db (descript, IEtype,IEdate,amount,catagory,source) VALUE ("Side Hustle", "Income","05/14/2019",2500.00,"Wellness","my awesome app");
INSERT INTO incm_exp_db (descript, IEtype,IEdate,amount,catagory,source) VALUE ("Mortgage", "Expense","04/07/2019",5000.00,"Bills","bank account");
INSERT INTO incm_exp_db (descript, IEtype,IEdate,amount,catagory,source) VALUE ("Car Note", "Expense","05/15/2019",350.00,"Bills","bank account");
INSERT INTO incm_exp_db (descript, IEtype,IEdate,amount,catagory,source) VALUE ("Insurance", "Expense","05/14/2019",150.00,"Bills","bank account");
INSERT INTO incm_exp_db (descript, IEtype,IEdate,amount,catagory,source) VALUE ("Stool App", "Expense","05/15/2019",11.99,"Wellness","bank account");


-- Household seeds
INSERT INTO household (hhName, relIeId) VALUE ("Thomas", "Expense","05/15/2019",11.99,"Wellness","bank account");
INSERT INTO household (hhName, relIeId) VALUE ("Woods", "Expense","05/15/2019",11.99,"Wellness","bank account");
INSERT INTO household (hhName, relIeId) VALUE ("Aujla", "Expense","05/15/2019",11.99,"Wellness","bank account");
INSERT INTO household (hhName, relIeId) VALUE ("Reese", "Expense","05/15/2019",11.99,"Wellness","bank account");
INSERT INTO household (hhName, relIeId) VALUE ("Deshpande");

-- Household member seeds
INSERT INTO hhMember (hhMemFirstName, hhMemLastName,relHHId) VALUE ("Francis", "Thomas");
INSERT INTO hhMember (hhMemFirstName, hhMemLastName,relHHId) VALUE ("Zech", "Thomas");
INSERT INTO hhMember (hhMemFirstName, hhMemLastName,relHHId) VALUE ("John", "Aujla");
INSERT INTO hhMember (hhMemFirstName, hhMemLastName,relHHId) VALUE ("Ringo", "Reese");
INSERT INTO hhMember (hhMemFirstName, hhMemLastName,relHHId) VALUE ("Michael", "Deshpande");
INSERT INTO hhMember (hhMemFirstName, hhMemLastName,relHHId) VALUE ("Christoper", "Deshpande");


-- goals seeds
INSERT INTO goals (gName, gDesc,gAmount,gDate) VALUE ("Trip to Bali", "Move the whole fam and the inlaws to BALI BABY!", 7000.00,"07/15/2019");
INSERT INTO goals (gName, gDesc,gAmount,gDate) VALUE ("Trip to Bali", "Move the whole fam and the inlaws to BALI BABY!", 7000.00,"07/15/2019");
INSERT INTO goals (gName, gDesc,gAmount,gDate) VALUE ("Trip to Bali", "Move the whole fam and the inlaws to BALI BABY!", 7000.00,"07/15/2019");
INSERT INTO goals (gName, gDesc,gAmount,gDate) VALUE ("Trip to Bali", "Move the whole fam and the inlaws to BALI BABY!", 7000.00,"07/15/2019");
INSERT INTO goals (gName, gDesc,gAmount,gDate) VALUE ("Trip to Bali", "Move the whole fam and the inlaws to BALI BABY!", 7000.00,"07/15/2019");
INSERT INTO goals (gName, gDesc,gAmount,gDate) VALUE ("Trip to Bali", "Move the whole fam and the inlaws to BALI BABY!", 7000.00,"07/15/2019");


