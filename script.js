// ex:one
let cars = ["audi","bmw", "lexus", "volkswagen", " porsche"];
for (let i=1; i<cars.length;i++) {
console.log (cars[i]);}

// ex:two
let names=["masho","tiko", "gio", "gabrieli", " beka"];

for (let i=0; i<names.length;i++) {
    if (names [i].length> 3){
        console.log(names[i]);

    }
}

ex:three (1)
let numbers= [7, 20, 115, 84,30 ];
for (let i=0; i<numbers.length; i++) {
    if (numbers [i] % 2==0) {
    console.log(numbers[i]);
    }
}
// ex:three (2)

for (let i=0; i<numbers.length; i++) {
    if (numbers [i] %2==1) {
    console.log(numbers[i]);}
}  
// four

let user = ['name', 25, 50, 'age', 'surname' , [50,500] ];
console.log (user[5][1]);


// ex:five

var person= {
   firstname: "john",
   lastname: "doe",
   age:50,
   eyecolor:"blue"
};
console.log (person.eyecolor);



// ex:six
let array= [9,10,19,24,33,2021];
for (let i=0; i<array.length; i++) {
    console.log (array[i]);
}


// ex:seven

let newnumber= [5,25,89,120,36];
newnumber.push ('javascript','python');
newnumber.unshift('html', 'css');
console.log (newnumber);
console.log (newnumber.length);
newnumber.shift();
newnumber.pop();
console.log (newnumber);

// ex:eight

let fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
console.Log (fruits.length);
fruits.push ('ვაშლი','ანანასი');
fruits.unshift ('საზამთრო');
console.splice(2,0,'მანგო');
console.shift();
fruits.pop ();
console.log (fruits.length);
// ex:nine (1)

let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche", "bentley"];
for (let i=2); i<6; i++) {
    console.log(cars[i]);
}

// ex :nine (2)
let newcars=cars.slice(1,4)
console.log(newcars);

// ex:ten


let names=["masho","tiko", "gio", "gabrieli", " nika"];
if (names.length===5 && names [names.length -1]==="nika"){
    console.log("მასივის რაოდენობა :7,ბოლო ელემენტია ნიკა");
}else{
    console.log ('error');
}

let names =['sandro','nini', 'kita','levani' 'tinatini'];
if (names.length ===7 || names[0]==="sandro"){
    console.log("მასივის რაოდენობა:7 ,პირველი ელემენტია სანდრო");
