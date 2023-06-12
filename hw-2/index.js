const QUESTION_DO_YOU_WANT_BANICA   = "Колега, искате ли баничка?";
const QUESTION_IS_VOTER_HIDE_TAXES  = "Укривате ли данъци?";
const GREETING                      = "Здравейте и четсит празник!";

//task 1 
GREETING
var clientCardNumber    = prompt("Please enter your card number here");
var cardNumberLength    = clientCardNumber.length;
var clientType          = "";

// Ако номерът съдържа повече от 2 цифри - гражданинът е от тип POOR
// Ако клиентският номер съдържа повече от 6 цифри, то гласуващият е RICH
// Ако съдържа 6 цифри, то значи е NORMAL

if(cardNumberLength === 6){
    clientType = "NORMAL";
    console.log("Ypu are normal");
}

else if(cardNumberLength > 6){
    clientType = "RICH";
    console.log("You are rich");
}

else if(cardNumberLength > 2){
    clientType = "POOR";
    console.log("You are poor");
}

//task2
var isVoterNormal   = (cardNumberLength === 6);
var isViterRich     = (cardNumberLength > 6);
var isVoterPoor     = (cardNumberLength > 2);

if(isVoterNormal){
    console.log("Радваме се, че нормални хора вече гласуват");
}

else if(isViterRich){
    console.log("Има за нас, има и за вас");
}

else if(isVoterPoor){
    console.log("Хайде по-бързо и да те няма");
}

//task3
var voterStatus = "";
var isVoterVIP = (clientCardNumber % 2 == 0);

if(isVoterVIP){
    console.log("Вие сте VIP клиент!")
    voterStatus = "VIP";
}

else{
    console.log("Вие няма специални правомощия.");
}

//task4
alert(QUESTION_IS_VOTER_HIDE_TAXES);

var takeNextToLastDigit = parseInt((clientCardNumber % 100) / 10);
//console.log(`${takePenultimateDigit}`); //test to see if the result is as we expected

var banicaQuestionAnswer = prompt("Отоговорете с yes или no");

if(takeNextToLastDigit > 3){
    QUESTION_IS_VOTER_HIDE_TAXES;
    
    if(banicaQuestionAnswer == "yes"){
        console.log("Браво моето момче");
    }

    else if(banicaQuestionAnswer == "no"){
        console.log("Будала");
    }
}

//task5
if(takeNextToLastDigit != 3){
    if(voterStatus == "VIP"){
        voterStatus = "SUPER VIP";

        alert(QUESTION_DO_YOU_WANT_BANICA);
        banicaQuestionAnswer = prompt("Отоговорете с yes или no");

        if(banicaQuestionAnswer == "yes"){
            console.log("Не може");
        }
    
        else if(banicaQuestionAnswer == "no"){
            console.log("Ами, то и без това няма");
        }
    }
}

//task6
const progressiveCannibalismParty_number    = 1; 
const zamundVegetarianParty_number          = 2;
const voodooTractorUnion_number             = 3; 
const labourHoeAndAnvil_number              = 4;

const progressiveCannibalismParty_name    = "Партия за прогресивен канибализъм";
const zamundVegetarianParty_name          = "Замундска вегетарианска партия";
const voodooTractorUnion_name             = "Синдикат на вуду-трактористите";
const labourHoeAndAnvil_name              = "Партия на труда, мотиката и наковалнята";

console.log("1. Партия за прогресивен канибализъм");
console.log("2. Замундска вегетарианска партия");
console.log("3. Синдикат на вуду-трактористите");
console.log("4. Партия на труда, мотиката и наковалнята");

var voterChoice = prompt("Кой номер партия избирате?");

if(voterChoice == "1"){
    alert(`Вие си поръчахте да ви управлява ${progressiveCannibalismParty_name}`);
}

else if(voterChoice == "2"){
    alert(`Вие си поръчахте да ви управлява ${zamundVegetarianParty_name}`);
}

else if(voterChoice == "3"){
    alert(`Вие си поръчахте да ви управлява ${voodooTractorUnion_name}`);
}

else if(voterChoice == "4"){
    alert(`Вие си поръчахте да ви управлява ${labourHoeAndAnvil_name}`);
}

alert(QUESTION_DO_YOU_WANT_BANICA);
banicaQuestionAnswer = prompt("Отоговорете с yes или no");

if(banicaQuestionAnswer == "yes"){
    console.log("Ами, то и без това няма");
}

else if(banicaQuestionAnswer == "no" && clientType == "NORMAL" && voterChoice == 27){
    console.log("И все пак всеки има право на лош вкус, моля депозирайте такса от един банан на изхода мерси.");
}

// мога да го напиша още по оптимизирано, но ще го оставя така, да се вижда отделните задачи как са изпълнени
// сложил съм номер над всяка задача task ....