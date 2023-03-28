// eine Funktion, welche eine Reihe von Zahlen annimmt und anschließend die zweitgrößte Zahl zurückgibt.
const largest = [10, 40, 30, 20, 50]
const secondLargest = () => {
    const sortedArr = largest.sort()
    //console.log(sortedArr[3])
    return sortedArr[3]
}
secondLargest()


const numbr = [5, 143, 89, 13, 1052]
const großzweitZahl = () => {
 numbr.sort((a, b) => b - a);
 //console.log(numbr[1]);
 return numbr[1]
}
großzweitZahl()



//eine Funktion, welche bei der Eingabe einer Zahl 
//zwischen 1 und 26 den Buchstaben an der entsprechenden 
//Stelle des Alphabets zurückgibt. Wenn die Zahl nicht in diesem Bereich liegt oder keine gültige Zahl ist, dann gebe „invalid“ zurück. 

const letzterPosition = (number) => {
var letters = /[A-Za-z]/gi
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var alphabet = str.match(letters);
let onum = "invalid"
if(number >= 1 && number <= 26){
    //console.log(alphabet[30])
   return alphabet[30]
}else{
   // console.log(onum)
    return onum
}
}
//letzterPosition(1)
//letzterPosition(31)
console.log(letzterPosition(1))
console.log(letzterPosition(31))



