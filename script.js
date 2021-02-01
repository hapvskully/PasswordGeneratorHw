// character sets
var charsLower = "abcdefghijklmnopqrstuvwxyz"
var charsUpper = charsLower.toUpperCase()
var charsNumbers = "012345679"
var charsSpecial = "!@#$%^&*()_+"
// TODO from user prompt
var userLength = ""
// TODO userLower/userUpper/userNums/userSpecial from confirm boxes.
// var userLower = userUpper = userNums = userSpecial = true
// build the random picker string based on user prompts

function startGenerating(){
var userLength = prompt("How many characters would you like? ( ! must be at least 8 characters but no more than 28 ! )")
var userLower = confirm("Do You Want Lower Case?")
var userUpper = confirm("Do You Want Upper Case?")
var userNums = confirm("Do You Want Numbers ?")
var userSpecial = confirm("Do You Want Special Chars?")

// alert messages for password length being grrater than 20 0r lower than 8 

if(userLength>8){
    alert("password must be between 8-28 characters!")
    
}
if(userLength<20){
    alert("password must be between 8-28 characters!")
}

var charSet =( userLower ? charsLower : '' )
            +( userUpper ? charsUpper : '' )
            +( userNums  ? charsNumbers : '' )
            +( userSpecial ? charsSpecial : '' )


// generate the string

var password = ""
for( var i=0; i<userLength; i++ ){
    var charPick = Math.floor(Math.random()*charSet.length)
    password += charSet[charPick]
}
// now plug this into the DOM
document.querySelector(".answer").value = password
}
