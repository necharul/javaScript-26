



// let student = ["A","B","C","D"]

// function greeting(studentName){
//     console.log(`Wellcome ${studentName}`);
// }


// for(let i=0; i<student.length; i++){

//     greeting(student[i])
// }





// ==============================================




// let student = ["A", "B", "C", "D"]

// function greeting(studentName) {
//     let utterance = new SpeechSynthesisUtterance(`Wellcome ${studentName}`);
//     speechSynthesis.speak(utterance);
// }


// for (let i = 0; i < student.length; i++) {

//     greeting(student[i])

// }





// ================================================




// let question = "what is your name?"

// function greeting(studentName) {
//     if (question == "what is your name?") {
//         let utterance = new SpeechSynthesisUtterance(`My name is MERN`);
//         speechSynthesis.speak(utterance);
//     }else if(question == "what is your age?"){
//         let utterance = new SpeechSynthesisUtterance(`I am 13 years old`);
//         speechSynthesis.speak(utterance);
//     }else if(question == "who is Pathan?"){
//         let utterance = new SpeechSynthesisUtterance(`SRK`);
//         speechSynthesis.speak(utterance);
//     }
// }

// greeting(question)






// =====================================================





// function greeting(nam1, nam2) {
//     console.log(nam1 + nam2);
// }

// greeting(2, 5 )





// =====================================================




// let text = document.querySelector("h1")
// let button = document.querySelector("button")


// button.addEventListener("click", function(){
//     text.style.background = "red"
// })











// ====================================================
//      Premitive value and Reference value
// ======================================================


// let info = {
//     name:"shawon"
// }

// let another = {
//     name:"shawon"
// }

// console.log(info == another);
// console.log(info.name == another.name);








// ====================================================
//      function and method
// ======================================================

// let info = {
//     nam:"jani na",
//     type:"Male",
//     ami: function(){
//         console.log("Shawon");
//     }
// }

// info.ami()







// ====================================================
//      arrow function
// ====================================================

// let arr = [1,546,254,5,5,5,564,54,56]

// arr.map((nam)=>{
//  console.log(nam);    
// })





// ====================================================
//      rest operator
// ====================================================

// function jog (...a){
//     let sum = 0
//     a.map((item)=>{
//         sum += item
//     })
//     console.log(sum);
// }

// jog(1,2,5,56,48,465,46,46,456,564)

// =====
// function jog (p,d,f,...a){
//     let sum = 0
//     a.map((item)=>{
//         sum += item
//     })
//     console.log(sum);
//     console.log(p,d,f);
// }

// jog("MD","Necharul", "Islam",1,2,5,56,48,465,46,46,456,564)





// ====================================================
//      call back function
// ====================================================

// let output = (msg)=>{
//     console.log(msg);
// }
// function jog(total,...a){
//     let sum = 0
//     a.map((item)=>{
//         sum += item
//     })
//     total(sum)
// }
// jog(output,1,21,5,4,1)





// ====================================================
//      arry find and findIndex
// ====================================================

// let info = [
//     {
//         name:"shawon",
//         roll:"1"
//     },
//     {
//         name:"sajal",
//         roll:"2"
//     },
//     {
//         name:"rifat",
//         roll:"3"
//     },
//     {
//         name:"manik",
//         roll:"4"
//     },
//     {
//         name:"nuhas",
//         roll:"5"
//     }
// ]

// let search = info.find((item)=>{
//     return item.name == "rifat"
// })
// console.log(search);



// let searchA = info.findIndex((item)=>{
//     return item.name == "rifat"
// })
// console.log(searchA);

// ==========

// let info = [
//     {
//         name:"shawon",
//         roll:"1"
//     },
//     {
//         name:"sajal",
//         roll:"2"
//     },
//     {
//         name:"rifat",
//         roll:"3"
//     },
//     {
//         name:"manik",
//         roll:"4"
//     },
//     {
//         name:"nuhas",
//         roll:"5"
//     }
// ]

// function ami(){
//  let search =   info.find((item)=>{
//         return item.name=="rifat"
//     })
//     console.log(search);
// }
// ami()









// ====================================================
//      sort and reverse
// ====================================================


// let num = [5,1,3,8,4,2]

// console.log(num.sort().reverse());





// ====================================================
//      filter
// ====================================================

// let age = [18,54,8,4,25,61,26,48,19]
// let ageCollection = age.filter((item)=>{
//     return item < 18
// })
// console.log(ageCollection);







// ====================================================
//      add, modify, delete
// ====================================================
// let info = {
//     name:"sagor",
//     mail:"abc@gmail.com"
// }

// delete info.name

// info.phone = "01234567891"
// delete info.phone


// console.log(info);









// ====================================================
//      destructuring
// ====================================================
// let info = {
//     "amr nam holo": "shawon",
//     email:"abc@gmail.com"
// }
// console.log(info['amr nam holo']);
// console.log(info.email);

// ===============

// let info = {
//     name: "shawon",
//     email:"abc@gmail.com"
// }

// let anotherInfo = {
//     ...info,
//     phone:"123456789"
// }

// console.log(info);
// console.log(anotherInfo);






// ====================================================
//      main destructuring
// ====================================================

// let info = {
//     name: "shawon",
//     email:"abc@gmail.com"
// }

// let anotherInfo = {
//     ...info,
//     phone:"123456789"
// }

// let {name, email, phone: mobile} = anotherInfo

// console.log(mobile);








// ====================================================
//      class and super()
// ===============================================


// class User {
//     constructor (name, age, mail){
//         this.name = name,
//         this.age = age,
//         this.mail = mail
//     }
//     greeting(){
//         console.log("hello");
//     }
// }

// class Vip extends User{
//     constructor(name, age, mail, voterId){
//         super(name, age, mail)
//         this.voterId = voterId
//     }
// }

// let ami = new Vip("Sagor", 25, "abc@gmail.com", "srt54twer3")
// console.log(ami);