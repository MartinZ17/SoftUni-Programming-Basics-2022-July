function calculatorDeposit(input){
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let deposit = Number(input[0]);
    let lenght = Number(input[1]);
    let interest = Number(input[2]);

    let vProcentLihva = interest / 100
    let accruedInterest = deposit * vProcentLihva
    let oneMonthInterest = accruedInterest / 12
    
    let everything = deposit + lenght * oneMonthInterest;
    console.log(everything);
    
    
}

calculatorDeposit(["2350", "6", "7"])
calculatorDeposit(["200", "3", "5.7"])