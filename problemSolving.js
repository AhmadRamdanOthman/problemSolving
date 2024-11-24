function dontGiveMeFive(start, end){
    let count = 0;
    for(let i = start; i<= end; i++){
        if(!String(i).includes("5"))
        count++
    }
    return count
}
console.log(dontGiveMeFive(1,9))//, 8);
console.log(dontGiveMeFive(4,17))//, 12);
/* function oddOrEven(array) {
    if(array.length === 0)return 'even'
    sum = array.reduce((ac,cu)=> (ac + cu)) 
    return sum % 2 === 0? 'even': 'odd'
}
console.log(oddOrEven([0, 1, 5]))//, 'even')
console.log(oddOrEven([0, 1, 3]))//, 'even')
console.log(oddOrEven([1023, 1, 2]))//, 'even')
console.log(oddOrEven([0, 1, 2]))//, 'odd')
console.log(oddOrEven([0, 1, 4]))//, 'odd')
console.log(oddOrEven([1023, 1, 3]))//, 'odd')
console.log(oddOrEven([0, -1, 2]))//, 'odd')
console.log(oddOrEven([0, 1, -4]))//, 'odd')
console.log(oddOrEven([-1023, -1, 3]))//, 'odd') */

/* String.prototype.toJadenCase = function () {
    return this.split(" ").map((el)=> el[0].toUpperCase() + el.slice(1)).join(" ")
};
let str = "How can mirrors be real if our eyes aren't real"
console.log(str.toJadenCase())//, "How Can Mirrors Be Real If Our Eyes Aren't Real"); */
/* function findShort(s){
    return s.split(" ").map((el)=> el.length).reduce((ac,cu)=> ac < cu? ac : cu)
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))//, 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"))//, 3); 
console.log(findShort("Let's travel abroad shall we"))//, 2); */
/* function XO(str) {
    //return str.toLowerCase().match(/x/g)?.length === str.toLowerCase().match(/o/g)?.length
    return str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
}
console.log(XO('xo'))//,true);
console.log(XO("xxOo"))//,true);
console.log(XO("xxxm"))//,false);
console.log(XO("Oo"))//,false);
console.log(XO("ooom"))//,false); */
/* function isIsogram(str){
    return new Set(str.toLowerCase().split("")).size === str.length;
}
console.log( isIsogram("Dermatoglyphics"))//, true );
console.log( isIsogram("isogram"))//, true );
console.log( isIsogram("aba"))//, false, "same chars may not be adjacent" );
console.log( isIsogram("moOse"))//, false, "same chars may not be same case" );
console.log( isIsogram("isIsogram"))//, false );
console.log( isIsogram(""))//, true, "an empty string is a valid isogram" ); */
/* function filter_list(l) {
    return l.filter((el)=> typeof el !== "string")
}
console.log(filter_list([1,2,'a','b']))//,[1,2], 'For input [1,2,"a","b"]');
console.log(filter_list([1,'a','b',0,15]))//,[1,0,15], 'For input [1,"a","b",0,15]');
console.log(filter_list([1,2,'aasf','1','123',123]))//,[1,2,123], 'For input [1,2,"aasf","1","123",123]'); */
/* var isSquare = function(n){
    return  Number.isInteger(Math.sqrt(n)) 
}
console.log(isSquare(-1))//, false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare( 0))//, true, "0 is a square number (0 * 0)");
console.log(isSquare( 3))//, false, "3 is not a square number");
console.log(isSquare( 4))//, true, "4 is a square number (2 * 2)");
console.log(isSquare(25))//, true, "25 is a square number (5 * 5)");
console.log(isSquare(26))//, false, "26 is not a square number"); */
/*function accum(s) {
    return s.toLowerCase().split("").map((el,i)=> el.toUpperCase() + el.repeat(i)).join("-")
    let myArr = Array.from(Array(s.split("").length + 1).keys()).slice(1)
    let alphaArr = s.split("")
    //console.log(alphaArr)
    let newArr = []
    for(let i = 0; i < myArr.length; i++){
        newArr.push(alphaArr[i].repeat(i + 1))
    }
	return newArr.join("-") 
}
console.log(accum("ZpglnRxqenU"))//, "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB"))//, "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU"))//, "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM"))//, "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC"))//, "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");*/

/* function getMiddle(s){
    return s.length % 2 === 0? s[s.length / 2 - 1] + s[s.length / 2] : s[Math.ceil(s.length / 2) - 1]
}
console.log(getMiddle("test"))//,"es");
console.log(getMiddle("testing"))//,"t");
console.log(getMiddle("middle"))//,"dd");
console.log(getMiddle("A"))//,"A"); */
/* function descendingOrder(n){
    return Number(n.toString().split("").sort().reverse().join(""))
}
console.log(descendingOrder(0))//, 0)
console.log(descendingOrder(1))//, 1)
console.log(descendingOrder(111))//, 111)
console.log(descendingOrder(15))//, 51)
console.log(descendingOrder(1021))//, 2110)
console.log(descendingOrder(123456789))//, 987654321) */
/* function squareDigits(num){
    return Number(num.toString().split("").map((el)=> Math.pow(el,2)).join(""));
}

console.log(squareDigits(3212))//, 9414);
console.log(squareDigits(2112))//, 4114);
console.log(squareDigits(0))//, 0); */
/* function highAndLow(numbers){
    let myArr = numbers.split(" ").map((num)=>Number(num));
    let newArr = []
    newArr.push(Math.max(...myArr),Math.min(...myArr))
    return  newArr.join(" ")
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))//, "42 -9");
console.log(highAndLow("1 2 3"))//, "3 1"); */
/*function getCount(str) {
    let vouls = "aeiou";
    let count = 0;
    let myArr = str.split("")
    console.log(myArr)
    for(let i =0; i<myArr.length; i++){
        if(vouls.includes(myArr[i])){
            count++
        }
    } 
    return str.split("").filter((el)=> vouls.includes(el)).length
}
console.log(getCount("abracadabra"))//, 5)*/
/* function pipeFix(numbers){
    let myArr=[]
    for(let i = numbers[0]; i<=numbers[numbers.length- 1] ;i++){
        myArr.push(i)
    } 
    return myArr
}
console.log(pipeFix([1,2,3,5,6,8,9]))//,[1,2,3,4,5,6,7,8,9]);
console.log(pipeFix([1,2,3,12]))//,[1,2,3,4,5,6,7,8,9,10,11,12]);
console.log(pipeFix([6,9]))//,[6,7,8,9]);
console.log(pipeFix([-1,4]))//,[-1,0,1,2,3,4]);
console.log(pipeFix([1,2,3]))//,[1,2,3]); */
/* function array(string) {
    let myArr = string.split("").map((el)=> el === ","? " ": el).join("").split(" ")
    if(myArr.length <= 2){
        return null
    }else{
        return myArr.slice(1,myArr.length - 1).join(" ") 
    }
    
}
console.log(array('1'))//, null)
console.log(array('A1,B2'))//, null))
console.log(array('1,2,3'))//, '2'))
console.log(array('1,2,3,4'))//, '2 3'))
console.log(array('A1,B2,C3,D4,E5'))//, 'B2 C3 D4'))
console.log(array('A,1,23,456,78,9,Z'))//, '1 23 456 78 9')) */
/* function sayHello( name, city, state ) {
    let finName = ""
    for(let i =0; i<name.length; i++){
        finName += name[i] + " "
    }
    finName =  finName.slice(0, finName.length - 1);
    return `Hello, ${finName}! Welcome to ${city}, ${state}!`
}
console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))//, 'Hello, John Smith! Welcome to Phoenix, Arizona!')
console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'))//, 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'))//, 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!') */
/* Hello, John Smith ! Welcome to Phoenix, Arizona!
problemSolving.js:9 Hello, Franklin Delano Roosevelt ! Welcome to Chicago, Illinois!
problemSolving.js:10 Hello, Wallace Russel Osbourne ! Welcome to Albany, New York!
/* function billboard(name, price = 30){ */
/*let result = 0
for(let i = 0; i<name.length;i++){
    result += price
    } 
    return result
}
console.log(billboard("Jeong-Ho Aristotelis"))//, 600);
console.log(billboard("Abishai Charalampos"))//, 570);
console.log(billboard("Idwal Augustin"))//, 420);
console.log(billboard("Hadufuns John",20))//, 260);
console.log(billboard("Zoroaster Donnchadh"))//, 570) */
/* function sumMul(n,m){
    if(n == 0 || m <= 0) return "INVALID";
    let finalSum=0
    for(let i =n; i<=m; i+=n){
        finalSum += i 
    }
    return finalSum
}
console.log(sumMul(2, 9))//  ==> 2 + 4 + 6 + 8 = 20
console.log(sumMul(3, 13)) //==> 3 + 6 + 9 + 12 = 30
console.log(sumMul(4, 123))// ==> 4 + 8 + 12 + ... = 1860
console.log(sumMul(0,0))//,"INVALID");
console.log(sumMul(2,9))//,20);
console.log(sumMul(4,-7))//,"INVALID"); */
/* function distinct(a) {
    let set = new Set(a)
    return [...set]
}
console.log(distinct([1]))//, [1]);
console.log(distinct([1,2]))//, [1,2]);
console.log(distinct([1,1,2]))//, [1,2]); */
/* function findMultiples(integer, limit) {
    let numOfEl = parseInt(limit / integer)
    let myArr=[]
    for(let i = 0; i<numOfEl;i++){
        myArr.push(i + 1)
    }
return myArr.map((el)=> el * integer)
}
console.log(findMultiples(5, 25))//, [5, 10, 15, 20, 25])
console.log(findMultiples(1, 2))//, [1, 2])
console.log(findMultiples(5, 7))//, [5])
console.log(findMultiples(11, 54))//, [11, 22, 33, 44]) */
/* function stringy(size) {
    let theResult='' ;
    for(let i = 1; i<=size;i++){
        i % 2 === 0?theResult += "0":theResult += "1";
    }
    return theResult
}
console.log(stringy(6)) */
/* function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
console.log(goals(0,0,0))//, 0)
console.log(goals(43, 10, 5))//, 58) */
/* function index(array, n){
    return array.length - 1 < n?-1: Math.pow(array[n],n);
}
console.log(index([1, 2, 3, 4],2))//,9);
console.log(index([1, 3, 10, 100],3))//,1000000);
console.log(index([1, 2],3),)//-1);
console.log(index([1,1,1,1,1,1,1,1,1,1], 9))//,1);
console.log(index([1,1,1,1,1,1,1,1,1,2], 9))//,512);
console.log(index([29,82,45,10], 3))//,1000);
console.log(index([6,31], 3))//,-1);
console.log(index([75,68,35,61,9,36,89,0,30], 10))//,-1); */
/* function move (position, roll) {
    return position + (roll * 2)
}
console.log(move(0, 4))//, 8);
console.log(move(3, 6))//, 15);
console.log(move(2, 5))//, 12); */
/* function sayHello(name) {
    return `Hello, ${name}`
}
console.log(sayHello('Mr. Spock'))//, 'Hello, Mr. Spock')
console.log(sayHello('Captain Kirk'))//, 'Hello, Captain Kirk') */
/* function between(a, b) {
    let myArr = []
    for(let i = a; i<=b;i++){
        myArr.push(i)
    }
    return myArr
}
console.log(between(1, 4))//, [1, 2, 3, 4]));
console.log(between(-2, 2))//, [-2, -1, 0, 1, 2])) */;
/* function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let newarr = birds.filter((bird)=>!geese.includes(bird))
    return newarr
// return an array containing all of the strings in the input array except those that match strings in geese
};
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))//,["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]))//,["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]))//,[]); */
/* function testEven(n) {
    return Math.abs(n) % 2 === 0 ? true:false;
}
console.log(testEven(0))//, true, "testEven for 0");
console.log(testEven(0.5))//, false, "testEven for 0.5");
console.log(testEven(1))//, false, "testEven for 1");
console.log(testEven(2))//, true, "testEven for 2");
console.log(testEven(-4))//, true, "testEven for 2"); */
/* function expressionMatter(a, b, c) {
    return Math.max(
        a * b * c,
        a + b + c,
        a * (b + c),
        c * (b + a),
    );
}
console.log(expressionMatter(2, 1, 2))//, 6);
console.log(expressionMatter(2, 1, 1))//, 4);
console.log(expressionMatter(1, 1, 1))//, 3);
console.log(expressionMatter(1, 2, 3))//, 9);
console.log(expressionMatter(1, 3, 1))//, 5);
console.log(expressionMatter(2, 2, 2))//, 8); */
/* function twoSort(s) {
    return s.sort()[0].split("").join("***")
}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))//, 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))//, 'a***r***e');  */
/* function sumStr(a,b) {
    return (Number(a) + Number(b)).toString()
}
console.log(sumStr("4","5"))//, "9");
   console.log(sumStr("34","5"))//, "39"); */
/* function powersOfTwo(n){
    let myArr = Array.from(Array(n + 1).keys()).map((el)=> Math.pow(2,el))
    return myArr
}
console.log(powersOfTwo(0))//, [1])
console.log(powersOfTwo(1))//, [1, 2])
console.log(powersOfTwo(4))//, [1, 2, 4, 8, 16])  */
/* function divisibleBy(numbers, divisor){
    return numbers.filter((el)=> el % divisor === 0)
}
console.log(divisibleBy([1,2,3,4,5,6], 2))//, [2,4,6]);
console.log(divisibleBy([1,2,3,4,5,6], 3))//, [3,6]);
console.log(divisibleBy([0,1,2,3,4,5,6], 4))//, [0,4]);
console.log(divisibleBy([0], 4))//, [0]);
console.log(divisibleBy([1,3,5], 2))//, []); */
/* function bmi(weight, height) {
    let bmiResult = weight / Math.pow(height,2)
    return bmiResult <= 18.5? "Underweight":bmiResult <= 25? "Normal":bmiResult <= 30? "Overerweight":"Obese"

}
console.log(bmi(80, 1.80))//, "Normal"); */
/* function reverseWords(str){
    return str.split(" ").reverse().join(" ")
}
console.log(reverseWords("hello world!"                 ))//,  "world! hello") */

/*function betterThanAverage(classPoints, yourPoints) {
    let total =  classPoints.reduce((ac,cu)=> ac + cu) / classPoints.length;
    return total < yourPoints? true: false
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))//, true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))//, false);
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))//, false); */
/* function correct(string){
	return string.replace(/0/g,"O").replace(/1/g,"I").replace(/5/g,"S")
}
console.log(correct("L0ND0N"))//,"LONDON");
console.log(correct("DUBL1N"))//,"DUBLIN");
console.log(correct("51NGAP0RE"))//,"SINGAPORE");
console.log(correct("BUDAPE5T"))//,"BUDAPEST");
console.log(correct("PAR15"))//,"PARIS"); */
/* function hoopCount (n) {
    return n < 10? "Keep at it until you get it":"Great, now move on to tricks"
}
console.log(hoopCount(3))//,"Keep at it until you get it" ) 
console.log(hoopCount(11))//,"Great, now move on to tricks" ) */
/* function twiceAsOld(dadYearsOld, sonYearsOld) {
     let theDiff = dadYearsOld - (sonYearsOld * 2)
    return theDiff < 0? -(theDiff): theDiff 
    return Math.abs(dadYearsOld - (sonYearsOld * 2))
};
console.log(twiceAsOld(36,7))// , 22);
console.log(twiceAsOld(55,30))// , 5);
console.log(twiceAsOld(42,21))// , 0);
console.log(twiceAsOld(22,1))// , 20);
console.log(twiceAsOld(29,0))// , 29); */
/* function howManyLightsabersDoYouOwn(name) {
    return name === "Zach"? 18:0;
}
console.log( howManyLightsabersDoYouOwn())//, 0 )
console.log( howManyLightsabersDoYouOwn("Adam"))//, 0 )
console.log( howManyLightsabersDoYouOwn("Zach"))//, 18 ) */
/* function addLength(str) {
    return str.split(" ").map((el)=>`${el} ${el.length}`)

}
console.log(addLength("apple ban"))// --> ["apple 5", "ban 3"]
console.log(addLength("you will win"))// -->["you 3", "will 4", "win 3"] */
/* const quarterOf = (month) => {
    if( month <= 3){
        return 1
    }else if(month <= 6){
        return 2
    }else if(month <= 9){
        return 3
    }else{
        return 4
    }
}
console.log(quarterOf(3))//, 1)
console.log(quarterOf(8))//, 3)
console.log(quarterOf(11))//, 4) */
/* function setAlarm(employed, vacation){
    return employed && !vacation
}
console.log(setAlarm(true, true))//,  false,"Should be false.");
console.log(setAlarm(false,true))//,  false, "Should be false.");
console.log(setAlarm(true, false))//, true,"Should be true."); */
/* fuconsole.lognction updateLight(current) {
    if( current === "green"){
        return "yellow"
    }else if( current === "yellow"){
        return  "red"
    }else{
        return "green"
    }
}
console.log(updateLight("green"))//, "yellow");
console.log(updateLight("yellow"))//, "red");
console.log(updateLight("red"))//, "green"); */
/* function feast(beast, dish) {
    beast = beast.split("");
    dish = dish.split("");
    return (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1])?true:false 
}
console.log(feast("great blue heron", "garlic naan"))//, true)
console.log(feast("chickadee", "chocolate cake"))//, true)
console.log(feast("brown bear", "bear claw"))//, false) */
/* function sumMix(x){
    return x.map((el)=> parseInt(el)).reduce((ac,cu)=>ac + cu)
}
console.log(sumMix([9, 3, '7', '3']))//, 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))//, 42); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))//, 41); */
/* function arrayPlusArray(arr1 ,arr2) {
    let myArr = [];
    myArr.push(...arr1,...arr2);
    return myArr.reduce((ac,cu)=>ac + cu)
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))//, 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))//, -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]))//, 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]))//, 2100); */
/* function makeUpperCase(str) {
    return str.toUpperCase()
}
console.log(makeUpperCase(""))//),           "");
console.log(makeUpperCase("hello"))//), "HELLO");
console.log(makeUpperCase("Hello"))//, "HELLO");
console.log(makeUpperCase("HELLO"))//, "HELLO"); */

/* function sum (numbers) {
    return numbers.reduce((ac,cu)=>ac + cu,0)
};
console.log(sum([]))//, 0);
console.log(sum([1, 5.2, 4, 0, -1]))//, 9.2); */
/* function fakeBin(x){
    return x.split("").map((el)=>el < 5? 0 : 1).join("")

}
console.log(fakeBin('45385593107843568'))//, '01011110001100111');
console.log(fakeBin('509321967506747'))//, '101000111101101'); 
console.log(fakeBin('366058562030849490134388085'))//, '011011110000101010000011011'); */
/* function maps(x){
    return x.map((num)=> num * 2)
}
console.log(maps([1, 2, 3]))//, [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]))//, [8, 2, 2, 2, 8]); 
console.log(maps([2, 2, 2, 2, 2, 2]))//, [4, 4, 4, 4, 4, 4]);  */
/* function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0){
        return true
    }else{
        return false
    }
}
console.log(isDivisible(3,3,4))//,false);
console.log(isDivisible(12,3,4))//,true);
console.log(isDivisible(8,3,4))//,false);
console.log(isDivisible(48,3,4))//,true); */
/* function findSmallestInt(arr) {
    return Math.min(...arr)
}
console.log(findSmallestInt([78,56,232,12,8]))//,8, `findSmallestInt([78,56,232,12,8])`);
console.log(findSmallestInt([78,56,232,12,18]))//,12, `findSmallestInt([78,56,232,12,18])`);
console.log(findSmallestInt([78,56,232,412,228]))//,56, `findSmallestInt([78,56,232,412,228])`);
console.log(findSmallestInt([78,56,232,12,0]))//,0, `findSmallestInt([78,56,232,12,0])`);
console.log(findSmallestInt([1,56,232,12,8]))//,1, `findSmallestInt([1,56,232,12,8])`); */
/* function squareSum(numbers){
    return numbers.map((num)=> num * num).reduce((ac,cu)=>ac + cu,0)
}
console.log(squareSum([1,2]))//, 5);
console.log(squareSum([0, 3, 4, 5]))//, 50);
console.log(squareSum([]))//, 0); */
/* function removeChar(str){
    return str.slice(1,str.length - 1)
};
console.log(removeChar('eloquent'))//, 'loquen');
console.log(removeChar('country'))//, 'ountr');
console.log(removeChar('person'))//, 'erso');
console.log(removeChar('place'))//, 'lac');
console.log(removeChar('ooopsss'))//, 'oopss'); */
/* var sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
    7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
    5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
    6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
    6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
    5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
    7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
    7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
    7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
    5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
    5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
    5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
    9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
    9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
    9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
    7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
    6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
    9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
    5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
    5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
    5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
    7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];
    s = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
function stairsIn20(s){
    
     return s.reduce((arr,day)=> arr.concat(day)).reduce((acc,cu)=> acc + cu) * 20 
   /*  s= saturday.concat(sunday,monday,tuesday,wednesday,thursday,friday);
    return s.reduce((acc,cu)=> acc + cu) * 20 */
//}

//console.log(stairsIn20(stairs))//, 54636040); */
/* function printArray(array){
    return array.join(",")
}
console.log( printArray([2,4,5,2])) //"2,4,5,2", "int test failed" ) */
/* var summation = function (num) {
    let myArr = Array.from(Array(num + 1).keys()).slice(1)
    return myArr.reduce((acc,cu)=> acc + cu)
}
console.log(summation(1))//,  1);
console.log(summation(2))//,  3);
console.log(summation(8))//, 36); */
/* function isPalindrome(x) {
    return  x.toLowerCase().split("").join("") === x.toLowerCase().split("").reverse().join("")? true : false;
}
console.log(isPalindrome("a"))//, true));
console.log(isPalindrome("aba"))//, true));
console.log(isPalindrome("Abba"))//, true));
console.log(isPalindrome("hello"))//, false));
console.log(isPalindrome("Bob"))//, true));
console.log(isPalindrome("Madam"))//, true));
console.log(isPalindrome("AbBa"))//, true));
console.log(isPalindrome(""))//, true)); */
/* function grow(x){
    return x.reduce((acc,cu)=> acc * cu)
}
console.log(grow([1, 2, 3]))//, 6);
console.log(grow([4, 1, 1, 1, 4]))//, 16); 
console.log(grow([2, 2, 2, 2, 2, 2]))//, 64); */
/* function solution(str){
    return str.split("").reverse().join("")
}
console.log(solution('world'))//, 'dlrow');
console.log(solution('hello'))//, 'olleh');
console.log(solution(''))//, '');
console.log(solution('h'))//, 'h'); */
/* function removeExclamationMarks(s) {
    return s.replace(/!/g,"")
}
console.log(removeExclamationMarks("Hello World!"))//, "Hello World"); */
/* function shortcut (string) {
    let myArr = string.split("").map((el)=>{if(el !== "e" && el !== "o" && el !== "a" && el !== "i" && el !== "u") return el}).join("");
    return myArr;
}
console.log(shortcut('hello'))//, 'hll');
console.log(shortcut('how are you today?'))//, 'hw r y tdy?');
console.log(shortcut('complain'))//, 'cmpln');
console.log(shortcut('never'))//, 'nvr'); */
/* function getAverage(marks){
    return Math.floor( marks.reduce((cu,acc)=> cu + acc) / marks.length)
}
console.log(getAverage([2,2,2,2]))//,2);
console.log(getAverage([1,2,3,4,5,]))//,3);
console.log(getAverage([1,1,1,1,1,1,1,2]))//,1); */
/* function noBoringZeros(n) {
    let stringParam = String(n)
    while(stringParam.endsWith(0)){
        stringParam= stringParam.slice(0, stringParam.length - 1)
    }
    return Number(stringParam)
} 

console.log(noBoringZeros(1450))//, 145)
console.log(noBoringZeros(960000))//, 96)
console.log(noBoringZeros(1050))//, 105)
console.log(noBoringZeros(-1050))//, -105)
console.log(noBoringZeros(-105))//, -105)
console.log(noBoringZeros(0))//, 0) */
/* function lovefunc(flower1, flower2){
    if( flower1 % 2 !==  flower2 % 2 ){
        return true
    }else{
        return false
    }
}
console.log(lovefunc(1,4))//, true)
console.log(lovefunc(2,2))//, false)
console.log(lovefunc(0,1))//, true)
console.log(lovefunc(0,0))//, false) */
/* function position(letter){
    let alpha =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    for(let i=0; i< alpha.length; i++){
        if(letter === alpha[i])return `Position of alphabet: ${i + 1}`
    } 
}
console.log(position("a"))//,"Position of alphabet: 1");
console.log(position("z"))//,"Position of alphabet: 26");
console.log(position("e"))//,"Position of alphabet: 5"); */
/* function formatMoney(amount){
    return `$${amount.toFixed(2)}`
}
console.log(formatMoney(39.99))//, '$39.99', 'That\'s not formatted the way we expected.'); */
/* function twoDecimalPlaces(n) {
    return Number( n.toFixed(2))
}
console.log(twoDecimalPlaces(4.659725356))//, 4.66, "didn't work for 4.659725356");
console.log(twoDecimalPlaces(173735326.3783732637948948))//, 173735326.38, "didn't work for 173735326.3783732637948948");
console.log(twoDecimalPlaces(4.653725356))//, 4.65, "didn't work for 4.653725356"); */
/* class Kata {
    static getVolumeOfCuboid(length, width, height) {
        let vol= length * width * height;
        return vol
    }
}
console.log(Kata.getVolumeOfCuboid(1,2,2))//,  4);
console.log(Kata.getVolumeOfCuboid(6,2,5))//, 60); */
/* function firstNonConsecutive (arr) {
    for(let i=1; i< arr.length; i++){
        if(arr[i] - 1 !== arr[i - 1] ) return arr[i]
    } 
    return null
}
console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
console.log(firstNonConsecutive([1,2,3,4])) */
/* function xor(a, b) {
    return a === b? false : true
}
console.log(xor(false, false))//, false, "false xor false");
console.log(xor(true, false))//, true, "true xor false");
console.log(xor(false, true))//, true, "false xor true");
console.log(xor(true, true))//, false, "true xor true");
console.log(xor(true, true))//, true, "true xor true: 'xor' is NOT identical to 'or'"); */
/* function rentalCarCost(d) {
    let current;
    if(d >= 3 && d < 7){
        current =( d * 40) - 20
    }else if(d >= 7 ){
        current =( d * 40) - 50
    }else{
        current =( d * 40)
    }
    return current
}
console.log(rentalCarCost(1))//, 40);
console.log(rentalCarCost(2))//, 80)
console.log(rentalCarCost(3))//, 100);
console.log(rentalCarCost(4))//, 140);
console.log(rentalCarCost(5))//, 180);
console.log(rentalCarCost(6))//, 220);
console.log(rentalCarCost(7))//, 230); */
/* Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total. */
/* function createArray(number){
    var newArray = [];
    for(var counter = 1; counter <= number; counter++){
        newArray.push(counter);
    }
    return newArray;
} 
console.log(createArray(1))//,[1]);
console.log(createArray(2))//,[1,2]);
console.log(createArray(3))//,[1,2,3]);
console.log(createArray(4))//,[1,2,3,4]);
console.log(createArray(5))//,[1,2,3,4,5]); */
/* function removeEveryOther(arr){
    let newArr =[]
    for(let i=0; i< arr.length; i++){
        if(i % 2 === 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))//,['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))//,[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]))//, [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]))//,[['Goodbye']]);}  */
/* function areYouPlayingBanjo(name) {
    if(name.startsWith("R") || name.startsWith("r")){
        return `${name} plays banjo`
    }else{
        return `${name} does not plays banjo`
    }
}
console.log(areYouPlayingBanjo("Adam"))//, "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul"))//, "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo"))//, "Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo"))//, "bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf"))//, "rolf plays banjo"); */
/* function remove (string) {
    return string.replace(/!$/, "")
}
console.log(remove("Hi!"))
console.log(remove("Hi!!!"))
console.log(remove("!Hi"))
console.log(remove("Hi! Hi!")) */
/* function bonusTime(salary, bonus) {
    if(bonus === true){
        return salary = `\u00A3${salary * 10}`
    }else{
        return salary = ` \u00A3${salary}`
    }
    //console.log("\u00A3")
}
console.log(bonusTime(10000, true))//, '£100000');
console.log(bonusTime(25000, true))//, '£250000');
console.log(bonusTime(10000, false))//, '£10000');
console.log(bonusTime(60000, false))//, '£60000');
console.log(bonusTime(2, true))//, '£20');
console.log(bonusTime(78, false))//, '£78');
console.log(bonusTime(67890, true))//, '£678900'); */
/* function switchItUp(number){
    let myArr = ["One", "Two","Three","Four","Five","Six","Seven","Eight","Nine"]
    for(let i=0; i< myArr.length; i++){
        if(i === (number - 1)){
            return myArr[i]
        }
    } 
    switch(number){
        case 0:
        return "Zero";
        break;
        case 1:
        return "One";
        break;
        case 2:
        return "Two";
        break;
        case 3:
        return "Three";
        break;
        case 4:
        return "Four";
        break;
        case 5:
        return "Five";
        break;
        case 6:
        return "Six";
        break;
        case 7:
        return "Seven";
        break;
        case 8:
        return "Eight";
        break;
        case 9:
        return "Nine";
    }
}
console.log(switchItUp(1))//,"One");
console.log(switchItUp(3))//,"Three");
console.log(switchItUp(5))//,"Five"); */
/* function smash (words) {
    return words.join(" ")
};
console.log(smash(["hello", "world"]))//, "hello world");
console.log(smash(["hello", "amazing", "world"]))//, "hello amazing world");
console.log(smash(["this", "is", "a", "really", "long", "sentence"]))//, "this is a really long sentence");  */

/* const languages={  
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch:  "Welkom",
    estonian: "Tere tulemast",
    finnish : "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso"
}

function greet(language) {
	if(languages.hasOwnProperty(language)){
        return languages[language]
    }else{
        return languages.english
    }
} 
console.log(greet('english'))//, 'Welcome', "Your function should have returned 'Welcome'. Try again.");
console.log(greet('dutch'))//, 'Welkom', "Your function should have returned 'Welkom'. Try again.");
console.log(greet('IP_ADDRESS_INVALID'))//, 'Welcome', "Your function should have returned 'Welcome'. Try again."); */ 
/* function monkeyCount(n) {
    return Array.from(Array(n + 1).keys()).slice(1)
}
console.log((monkeyCount(5)))//, [1, 2, 3, 4, 5]);
console.log((monkeyCount(3)))//, [1, 2, 3]);
console.log((monkeyCount(9)))//, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log((monkeyCount(10)))//, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log((monkeyCount(20)))//, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]); */
/* const stringToNumber = function(str){
    return parseInt(str)
}
console.log(stringToNumber("1234"))//,1234)
console.log(stringToNumber("605"))//, 605)
console.log(stringToNumber("1405"))//,1405)
console.log(stringToNumber("-7"))//,  -7) */
/* function findAverage(array) {
    let count = 0;
    for(let i = 0; i < array.length; i++){
        count += array[i]
    }
        return count / array.length
}
console.log(findAverage([1,1,1]))//, 1);
console.log(findAverage([1,2,3]))//, 2);
console.log(findAverage([1,2,3,4]))//, 2.5); */
/* function numberToString(num) {
    return num.toString()
}
console.log(numberToString(67))//, '67'); */
/* function litres(time) {
    return Math.floor(time * 0.5)
}
console.log(litres(2))//, 1, 'should return 1 litre');
console.log(litres(1.4))//, 0, 'should return 0 litres');
console.log(litres(12.3))//, 6, 'should return 6 litres');
console.log(litres(0.82))//, 0, 'should return 0 litres');
console.log(litres(11.8))//, 5, 'should return 5 litres');
console.log(litres(1787))//, 893, 'should return 893 litres');
console.log(litres(0))//, 0, 'should return 0 litres'); */
/* function reverse(string){
    let myArr = string.split(" ").reverse().join(" ")
    return myArr
}
    console.log(reverse('I am an expert at this'))//, 'this at expert an am I');
    console.log(reverse('This is so easy'))//, 'easy so is This');
    console.log(reverse('no one cares'))//, 'cares one no');
    console.log(reverse(''))//, '');
    console.log(reverse('CodeWars'))//, 'CodeWars');
 */
/* function boolToWord( bool ){
    if(bool === true){
        return `yes`
    }else{
        return `no`
    }
}
console.log(boolToWord(true))//, 'Yes')
console.log(boolToWord(false))//, 'No') */
/* function invert(array) {
    return array.map((x)=> -x )
}
console.log(invert([1,2,3,4,5]))//, [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]))//, [-1,2,-3,4,-5]);
console.log(invert([]))//, []);
console.log(invert([0]))//, [0]); */
/* function noSpace(x){
    x=x.split("").map((el)=>{
        return el !== " "? el: ""
    }).join("")
    return x
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))//, '8j8mBliB8gimjB8B8jlB');
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))//, '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
console.log(noSpace('8aaaaa dddd r     '))//, '8aaaaaddddr');  */
/* function countBy(x, n) {
    let z = [];
    for(let i=1; i<= n;i++){
        let res = x * i;
        z.push(res)
    }
    return z 
    let newAQrr = Array.from(Array(n + 1).keys()).slice(1).map((el) => el * x)
    return newAQrr  
}
console.log(countBy(1,10))//, [1,2,3,4,5,6,7,8,9,10], "Array does not match")
console.log(countBy(2,5))//, [2,4,6,8,10], "Array does not match") */
/* function squareOrSquareRoot(array) {
    let   newarray =[];
    for(let i =0; i < array.length;i++){
        if(Number.isInteger(Math.sqrt(array[i]))){
            newarray.push(Math.sqrt(array[i]));
        } else{
            newarray.push( array[i] * array[i]);
        }  ;
    };
    return newarray;
}; */
//[2, 9, 3, 49, 4, 1]
//console.log(squareOrSquareRoot([4,3,9,7,2,1])) //-> [2,9,3,49,4,1]
/* function basicOp(operation, value1, value2){
    let finaltest;
    if(operation === "+"){
        finaltest = value1 + value2
    }else if(operation === "-"){
        finaltest = value1 - value2
    }else if(operation === "*"){
        finaltest = value1 * value2
    }else{
        finaltest = value1 / value2
    }
    return finaltest
}
console.log(basicOp("+", 4, 7))//, 11, "4 + 7 = 11");
console.log(basicOp("-", 15, 18))//, -3, "15 - 18 = -3");
console.log(basicOp("*", 5, 5))//, 25, "5 * 5 = 25");
console.log(basicOp("/", 49, 7))//, 7, "49 / 7 = 7"); */

/* function doubleChar(str) {
    return str.split("").map((el)=> el.repeat(2)).join("")
}
console.log(doubleChar("abcd"))//, "aabbccdd"));
console.log(doubleChar("Adidas"))//, "AAddiiddaass"));
console.log(doubleChar("1337"))//, "11333377"));
console.log(doubleChar("illuminati"))//, "iilllluummiinnaattii"));
console.log(doubleChar("123456"))//, "112233445566"));
console.log(doubleChar("%^&*("))//, "%%^^&&**((")); */
/* function countPositivesSumNegatives(input) {
    let counter=0;
    let sum=0 ;
    let arr= [];
    console.log(input)
    for(let i =0; i < input.length;i++){
        if(input[i] >0){
            counter++;
        }else{
            sum += input[i];
        }
    }
    return arr = [counter,sum] 
    let arrayOfPositives= input.filter((el)=>el > 0)
    let sumOfNegatives = input.filter((el)=>el < 0).reduce((ac,cu)=> ac + cu)
    let finalArr = [arrayOfPositives.length,sumOfNegatives]
    return finalArr 
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) */
/* function findNeedle(haystack) {
    for(let i = 0; i< haystack.length; i++){
        if(haystack[i] === "needle"){
            return `'found the needle at position ${haystack.indexOf(haystack[i])}'`
        };
    };
};
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

console.log(findNeedle(haystack_1))//, undefined, "Your function didn't return anything");
console.log(findNeedle(haystack_1))//, 'found the needle at position 3')
console.log(findNeedle(haystack_2))//, 'found the needle at position 5') 
console.log(findNeedle(haystack_3))//, 'found the needle at position 30') */
/* function greet(name){
    if(name === "Johnny"){
        return "Hello, my love!";
    }else{
        return `"Hello, ${name} !"`;
    }
}
console.log(greet("Jim"))//, "Hello, Jim!");
console.log(greet("Jane"))//, "Hello, Jane!");
console.log(greet("Simon"))//, "Hello, Simon!"); 
console.log(greet("Johnny"))//, "Hello, Simon!");  */
/* function makeNegative(num) {
    return num > 0? -num: num
}
console.log( makeNegative(1));    // return -1
console.log( makeNegative(-5));   // return -5
console.log( makeNegative(0));    // return 0
console.log( makeNegative(0.12)); // return -0.12 */
/* function opposite(num){
    return -num
}
console.log(opposite(2))
console.log(opposite(-8))
console.log(opposite(-4))
console.log(opposite(18)) */
/* function countOfSheep(arrayOfSheep){
    let counter = 0;
    for(let i = 0; i< arrayOfSheep.length; i++){
        if(arrayOfSheep[i] === true)counter++
    }
    return counter
}
console.log(countOfSheep([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true])) */
/* function digitReverse(num){ 
    let myArr = num.toString().split("").reverse()
    myArr = myArr.map((el)=>parseInt(el))
    return myArr
}
console.log(digitReverse(348597))
 */
/* function repeatStr(num, str){
    return str.repeat(num)
} */
/* function repeatStr(num, str){
    let newString = "";
    for(let i = 0; i< num; i++){
        newString += str
    }
    return newString
} 
console.log(repeatStr(6,"I"));
console.log(repeatStr(5,"Hello")); */
/* function sumArray(arr){
    if(arr === null)return 0
    return arr.filter((el)=> el !== Math.max(...arr) &&  el !== Math.min(...arr)).reduce((acc,curr) => acc + curr)
    /* let myMax = Math.max(...arr)
    let myMin = Math.min(...arr)
    //console.log(myMax)
    //console.log(myMin)
    let filterdArr = arr.filter((el)=>{
        return el !== myMax &&  el !== myMin
    });
    let newArr = filterdArr.reduce((acc,curr) => acc + curr)
    console.log(newArr) 
}*//*
console.log(sumArray([ 6, 2, 1, 8, 10 ]))       //, 16 );
console.log(sumArray([ 0, 1, 6, 10, 10 ]))     // , 17 );
console.log(sumArray([ -6, -20, -1, -10, -12 ]))//, -28 );
console.log(sumArray([ -6, 20, -1, 10, -12 ])) //3 */
/* function sumOfPositive(arr){
    return arr.filter((el) => el > 0 ).reduce((acc,curr) => acc + curr); */
    /*let initValue=0;
        for(let i = 0; i< arr.length; i++){
        if(arr[i] > 0){
            initValue += arr[i]
        }
    }
    return initValue */
//}
//console.log(sumOfPositive([1, -4, 7, 14]))
/* function evenOdd(value){
    if(value % 2 === 0){
        return `even Number`
    }else{
        return `odd Number`
    }
}
console.log(evenOdd(20)) */
/* function removeDuplicateWordsFrom(sentence) {
        let wordList = sentence.split(" ");
        let newSet = new Set(wordList)
        let newArr = Array.from(newSet)
        console.log(wordList)
        console.log(newSet)
        console.log(newArr)
    return newArr.join(" ")
} */
/* function removeDuplicateWordsFrom(sentence) {
    let wordList = sentence.split(" ");
    let newArr = [];
    for(let i=0; i< wordList.length; i++){
        if(newArr.indexOf(wordList[i]) === -1){
            newArr.push(wordList[i])
        };
    };
    return newArr.join(" ")
};
console.log(removeDuplicateWordsFrom("Hello Elzero Web Web Hello School")); */
  // Hello Elzero Web School
/* function removeCharFrom(word, c) {
    return word.split("").filter((el)=>{
        return el !== c && el !== c.toUpperCase();
    }).join("")
} */
/* function removeCharFrom(word, c) {
   let regular = new RegExp(`${c}`,"ig")
    return word.replace(regular,"")
}
    */ 
/* function removeCharFrom(word, c) {
    let regular = new RegExp(`${c}`, "gi");
    return word.replace(regular, "");
  } */
/* console.log(removeCharFrom("ElddzeroD WebDD ddSchool", "d"));
console.log(removeCharFrom("ElxzeroX Web Sxchool", "x"));
console.log(removeCharFrom("Elzero@ Web@@ @@School", "@")); */
/* function addCommasAndUnderscore(num) {
    let result= num.toLocaleString();
    result = [...result]
    //console.log(result)
    result[result.length - 4]= "_";
    return result.join("");

}

  console.log(addCommasAndUnderscore(120)); // 120
  console.log(addCommasAndUnderscore(1530)); // 1_530
  console.log(addCommasAndUnderscore(120510650)); // 120,510_650
  console.log(addCommasAndUnderscore(510650480910)); // 510,650,780_910
  console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032 */

/* function removeduplicatewordsfrom(sentence){
    sentence = sentence.split(" ");
    let newarr=[]
    for(let i=0; i < sentence.length; i++){
        if(newarr.indexOf(sentence[i]) === -1){
            newarr.push(sentence[i])
        }
    }
    
    return newarr.join(" ")
}



console.log(removeduplicatewordsfrom("Hello Elzero Web Web Hello School")) */
// Hello Elzero Web School
/* function convert(nums){
    let myArr = [...nums].reverse()
    myArr=myArr.map((el)=>{
        return parseInt(el);
    })
    return myArr
}
console.log(convert("564987654"))  // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convert("529132")) //[2, 3, 1, 9, 2, 5] */
/* function findmissingletterin(letters){
let alpha = "abcdefghijklmnopqrstuvwxyz";
let start = alpha.indexOf(letters[0]);
    for(let i = 0; i< letters.length; i++){
        if(letters[i] !== alpha[start + i]){
            return alpha[start + i]
        }
    };
    return `No Missing Letter In Sequence`
};
console.log(findmissingletterin("abcdeghi")) // f
console.log(findmissingletterin("defgi")) // h
console.log(findmissingletterin("xyz")) // No Missing Letter In Sequence */

/* function removeCharFrom(word, c){
    return word.split("").filter((el)=>{
        return el !== c && el !== c.toUpperCase() 
    }).join("")

}



console.log(removeCharFrom("ElddzeroD WebDD ddSchool", "d") )// Elzero Web School
console.log( removeCharFrom("ElxzeroX Web Sxchool", "x") )// Elzero Web School
console.log( removeCharFrom("Elzero@ Web@@ @@School", "@") )// Elzero Web School
 */














/* let sentence = "In Programming We Love Elzero Academy Tooooooooooo Much"
let solution = sentence.split(" ").reduce((acc,curr)=>{
    return acc.length > curr.length? acc : curr;
})
console.log(solution) 
function longestWordIn(sentence){
    let myArr = sentence.split(" ");
    let wordLen = 0;
    let longestWord;
    for(let i= 0; i < myArr.length; i++){
        if(myArr[i].length > wordLen){
            longestWord = myArr[i];
            wordLen = myArr[i].length;
        };
    };
    return console.log(longestWord);
};
longestWordIn("In Programming We Love Elzero Academy Tooooooooooo Much");
 */
/* function longestWordIn(sentence){
    let sentArray = sentence.split(" ");
    let longestLen =0;
    let longestWord;
    for(let i=0; i< sentArray.length; i++){
        if(sentArray[i].length > longestLen){
            longestWord = sentArray[i]
           // console.log(longestWord)
            longestLen = longestWord.length 
            console.log(longestLen)
        }
    }
    return console.log(longestWord) 
}
longestWordIn("In Programming We Love Elzero Academy Tooooooooooo Much") */
//print(longest_word_in("In Programming We Love Elzero Academy Tooooooooooo Much")) # Tooooooooooo
/* let allNames=  ["Ameer", "alsayed", "Mahmoud", "Ahmed", "ayman", "Israa", "Anas", "amal", "amr", "aml"]
let finalArrone;
let finalArrtwo;
let index;
let indexTwo;
function solve(){
    let newArryone =allNames.map((el)=>{
        return el.startsWith("A") ? el : ""
    }).filter((el)=>{
        return el != ""
    })
    finalArrone = newArryone.sort().reverse()
}
solve()
function othersolve(){
    let newArrytwo =allNames.map((el)=>{
        return el.startsWith("a") ? el : ""
    }).filter((el)=>{
        return el != ""
    })
    let finalArr =newArrytwo.sort().reverse();
    index =[finalArr[0]]
    indexTwo =[finalArr[4]]
    finalArrtwo = finalArr.slice(1,4)
}
othersolve()
    let solution = finalArrtwo.concat(index,indexTwo, finalArrone)



// ['ayman', 'amr', 'aml', 'amal', 'alsayed'];
// ['amr', 'aml', 'amal', 'ayman', 'alsayed', 'Anas', 'Ameer', 'Ahmed']
// ['amr', 'aml', 'amal', 'ayman', 'alsayed', 'Anas', 'Ameer', 'Ahmed']
 */
/* let allLetters = "abcdefghijklmnopqrstuvwxyz";
let givenLitters = "defgi"
let all= [...allLetters]
let allPart = all.slice(3,9);
let arrGiv = [...givenLitters]
console.log(allPart)
console.log(arrGiv)
for(let i=0; i< allPart.length; i++){
    //console.log(allPart.indexOf(arrGiv[i]))
    //console.log(arrGiv.indexOf(allPart[i]))
    if(allPart.indexOf(arrGiv[i]) === arrGiv.indexOf(allPart[i])){
        console.log(allPart[arrGiv.indexOf(allPart[i])])
    }else{
        console.log(allPart[arrGiv.indexOf(allPart[i])])
    }
}

for(let i=0; i< allPart.length; i++){
    if(allPart[i] === arrGiv[i]){
        console.log(allPart[i])
        //console.log(arrGiv[i])
    } else{
        console.log(allPart[i])
        //console.log(arrGiv[i]) 
    }
}  */
/*  let convert = "564987654";

 console.log(parseInt(convert)) */
/*let myArr = [...convert].reverse()//Array.from(convert).reverse();
console.log(myArr) */
//print(convert(564987654))  // [4, 5, 6, 7, 8, 9, 4, 6, 5]
//print(convert(529132)) //[2, 3, 1, 9, 2, 5] */
