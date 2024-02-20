// phone number

let regexnumber= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/g; //internetdən götürülmüş regex kodu

let UserNumber:string = '+994556723374'
let PhoneNumber:any = UserNumber.match(regexnumber)
let last4num:string = UserNumber.slice(-4)
let SliceForX:string =  UserNumber.replace(last4num,'xxxx')


if (UserNumber == PhoneNumber){
    console.log(SliceForX)
}

//email

let regexemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; //RegExr saytından götürülmüş kod

let UserEmail:string = 'ayparakerimova004@gmail.com'
let email:any= UserEmail.match(regexemail)


if (UserEmail == email){
    console.log(email)
} else{
    console.log('not true')
}

//password

let regexpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g; //Minimum eight characters, at least one letter, one number and one special character

let UserPassword:string = 'helloworld123'
let password:any= UserPassword.match(regexpassword)


if (UserPassword == password){
    console.log(password)
} else{
    console.log('try again')
}

//age

let regexage = /^\S[0-9]{0,3}$/g;

let age:string = '19'
let UserAge:any = age.match(regexage)

if (age==UserAge){
    console.log(UserAge)
}

//name 

let regexname = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/g;

let username:string = 'Aypara'
let CheckUserName:any = username.match(username)

if (username==CheckUserName){
    console.log(username)
}




