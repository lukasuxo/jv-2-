// 1) if/else გამოყენებით დაწერეთ კოდი , რომელიც ითვლის რიცხვის კვადრატს და
//  ამოწმებს, თუ რიცხვის კვადრატი მეტია 100,
// კონსოლში გამოიტანოს მეტია ასზე და თუ ნაკლებია გამიტანოს ნაკლებია ასზე.

let x = 7;

let square = x * x;

console.log(square);

if (square > 49) {
  console.log("მეტია 49 - ზე");
} else if (square == 49) {
  console.log("ტოლია 49 - ის");
} else {
  console.log("ნაკლებია 49 - ზე");
}

// 2) შექმენით number ცვლადი და მიანიჭეთ ნებისმიერი რიცხვის მნიშვნელობა , 
// შემდეგ if/else გამოყენებით შეამოწმეთ ეს რიცხვი არის თუ არა 50-ზე მეტი 
// და 100-ზე ნაკლები. კონსოლში გამოიტანეთ შესაბამისი პასუხი.


let y = 57

if(y > 50 && y < 100){
    console.log("შუალედშია")
}
else{
    console.log("არარის")
}

let  = 37

if(x > 50 && y < 100){
    console.log("შუალედშია")
}
else{
    console.log("არარის")
}


// 3)შექმენით number ცვლადი და მიანიჭეთ ნებისმიერი რიცხვის მნიშვნელობა, შემდეგ დაწერეთ კოდი, რომელიც
//  ამოწმებს,არის თუ არა რიცხვი ნულის ტოლი ან უარყოფითი და დააბრუნეთ შესაბამისი პასუხი.

let a = -7

if(a <= 0){
    console.log("უარყოფითი - 0")
}
else{
    console.log("დადებითია")
}

let b = 50

if(b <= 0){
    console.log("უარყოფითი - 0")
}
else{
    console.log("დადებითია")
}


// 4) შექმენით სიგრძის და სიგანის ცვლადები , მიანიჭეთ ნებისმიერი რიცხვითი
//  მნიშვნელობა , შემდეგ გამოთვალეთ მართკუთხედის პერიმეტრი და დააკონსოლეთ
//   არის თუ არა პერიმეტრი 50_ზე მეტი.


let s = 17
let g = 37

let per = (s + g)*2 


if(per > 50){
    console.log("მეტია 50 - ზე")
}else{
    console.log("ნაკლებია ან ტოლია")
}