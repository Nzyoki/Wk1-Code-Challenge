function netSalary(basicSalary, benefits) {// declare a function netsalary that takes basicSalary and benefits
    // calculate PAYE tax based on the KRA rates

    const grossSalary = basicSalary + benefits; // grossSalary is basic Salary adding the benefits
    const NSSF = 0.06 * grossSalary; // nssf is obtained by 0.06 of the gross salary
    const relief = 2400; // assign a PAYE relief of 2400

    // define a variable paye that is obtained through looping at different rates
    let paye;
    if (basicSalary <= 24000) {
        paye = 0.01 * basicSalary;// if basic salary is less or equal to 2400, paye is 0.01 of the basic salary 
    }
    else if (basicSalary >= 24001 && basicSalary <= 32333) {
        paye = 0.25 * basicSalary// if basic salary is btw 24001 and 32333, paye is 0.25 of the basic salary 
    }
    else if (basicSalary >= 32334 && basicSalary <= 500000) {
        paye = 0.3 * basicSalary//if basic salary is btw 32334 and 500000, paye is 0.3 of the basic salary
    }
    else if (basicSalary >= 500001 && basicSalary <= 800000) {
        paye = 0.325 * basicSalary//if basic salary is btw 500001 and 800000, paye is 0.325 of the basic salary
    }
    else if (basicSalary >= 800000) {
        paye = 0.35 * basicSalary//if basic salary is above 800000, paye is 0.35 of the basic salary
    }

    // define a variable NHIF that deducts a certain amount depending on the gross salary bracket 
    let NHIF;
    if (grossSalary <= 5999) {
        NHIF = 150;// if grosssalary is less or eqiual to 5999 deduct nhif of 150
    }
    else if (grossSalary >= 6000 && grossSalary <= 7999) {
        NHIF = 300;// if gross is btw 6000 to 79999 deduct nhif of 300
    }
    else if (grossSalary >= 8000 && grossSalary <= 11999) {
        NHIF = 400;// if gross is btw 8000 to 11999 deduct nhif of 400
    }
    else if (grossSalary >= 12000 && grossSalary <= 14999) {
        NHIF = 500;// if gross is btw 12000 to 14999 deduct nhif of 500
    }
    else if (grossSalary >= 15000 && grossSalary <= 19999) {
        NHIF = 600;// if gross is btw 15000 to 19999 deduct nhif of 600
    }

    else if (grossSalary >= 20000 && grossSalary <= 24999) {
        NHIF = 750;// if gross is btw 20000 to 24999 deduct nhif of 750

    }
    else if (grossSalary >= 25000 && grossSalary <= 29999) {
        NHIF = 850;// if gross is btw 25000 to 29999 deduct nhif of 850

    }
    else if (grossSalary >= 30000 && grossSalary <= 34999) {
        NHIF = 900;// if gross is btw 30000 to 34999 deduct nhif of 900

    }
    else if (grossSalary >= 35000 && grossSalary <= 39999) {
        NHIF = 950;// if gross is btw 35000 to 39999 deduct nhif of 950

    }
    else if (grossSalary >= 40000 && grossSalary <= 44999) {
        NHIF = 1000;// if gross is btw 40000 to 44999 deduct nhif of 1000

    }
    else if (grossSalary >= 45000 && grossSalary <= 49999) {
        NHIF = 1100;// if gross is btw 45000 to 49999 deduct nhif of 1100

    }
    else if (grossSalary >= 50000 && grossSalary <= 59999) {
        NHIF = 1200;// if gross is btw 50000 to 59999 deduct nhif of 1200

    }
    else if (grossSalary >= 60000 && grossSalary <= 69999) {
        NHIF = 1300;// if gross is btw 60000 to 69999 deduct nhif of 1300

    }
    else if (grossSalary >= 70000 && grossSalary <= 79999) {
        NHIF = 1400;// if gross is btw 70000 to 79999 deduct nhif of 1400

    }
    else if (grossSalary >= 80000 && grossSalary <= 89999) {
        NHIF = 1500;// if gross is btw 80000 to 89999 deduct nhif of 1500

    }
    else if (grossSalary >= 90000 && grossSalary <= 99999) {
        NHIF = 1600;// if gross is btw 90000 to 99999 deduct nhif of 1600

    }
    else if (grossSalary >= 100000) {
        NHIF = 1700;/// if gross is above 100000 deduct nhif of 1700

    }

    //assuming no benefits

    const netSalary = grossSalary - (paye + NHIF + NSSF - relief);// net  salary is obtained by taking gross minus paye, nhif ,nssf and adding the paye relief

    // to outut gross salary, paye,nhif,nssf and net salary
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Paye: ${paye}`);
    console.log(`NHIF Deductions: ${NHIF}`);
    console.log(`NSSF Deductions: ${NHIF}`);
    console.log(`Net Salary:${netSalary}`);
}

return netSalary;