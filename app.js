//Q1.1 We use the assignment operator = after or while declaring it 
//Q1.2 We use the assignment operator again
//Q1.3 Again, using the asssignment operator
//Q1.4 Declare is when you create a name for some block of memory to store a value, assigning gives
//	this memory value, defining does both at the same time
//Q1.5 Pseudocode is half code half english that helps you plan for your code
//Q1.6 75% planning 25% coding
//
//
//Q2.1

	let firstVariable = "Hello World";
	firstVariable = 6;
	let secondVariable = firstVariable;
	secondVariable = "Doggy";
//The value of firstVariable is now 6

//Q2.2

	let yourName = "Jack Bogart";
	console.log(`Hello, my name is ${yourName}`);
//Q3.

	const a = 4;
	const b = 53;
	const c = 57;
	const d = 16;
	const e = 'Kevin';

	console.log(a < b);
	console.log(c > d);
	console.log('Name' === 'Name');
	console.log(true !== false);
	console.log(!(false && false && false && false && false && false) && true);
	console.log(!(false && false))
	console.log(e === 'Kevin');
	console.log(a < b < c);
	console.log((a*a) ===  d);
	console.log(48 == '48');

//Q4. The Farm

	const animal = "cow";
	if (animal == "cow"){
		console.log('mooooo');
	}
	else {
		console.log("You ain't a cow");
	}

//Q5. Driver's Ed

	const age = 16;
	if (age >=16){
		console.log("Here are the keys");
	}
	else {
		console.log("sorry you're too young");
	}

//Q6.1 The Basics 0-10 inclusive

	for (let i = 0; i <=10; i++){
		console.log(i);
	}
	
//Q6.2 The Basics 10 to 400
	
	for (let i = 10; i<=400; i++){
		console.log(i);
	}

//Q6.3 The Basics every third 12-400

	for (let i =12; i<=4000; i =i+3){
		console.log(i);
	}
	
//Q7.1 Even numbers between 1 and 100

	for (let i = 2; i<=100; i = i+2){
		console.log(i);
	}
//Q7.2 All numbers but say its even

	for (let i =1; i <=100; i ++){
		if (i%2==0){
			console.log(`${i} <-- this is even`);
		}
		else{
			console.log(i);
		}
	}

//Q8.1 Give me Five

	for (let i = 5; i <=100; i += 5){
		console.log(`I found a ${i}. High Five`);
	}

//Q8.2 Three is a crowd

	for (let i =1; i <=100; i++){
		if (i%3==0){
			console.log(`I found a ${i}. Three is a crowd!`);
		}
		if (i%5 == 0){
			console.log(`I foudn a ${i}. High Five!`);
		}
	}

//Q9.1 Savings account

	let bank_account = 0;

	for (let i = 1; i<=10; i++){
		bank_account +=i;
	}
	console.log(bank_account);
	
//Q9.2 Doubled

	bank_account = 0;
	for (let i =1; i<=100; i++){
		bank_account +=i*2;
	}
	console.log(bank_account);

//Q10.1 Multiples of 3 and 5, I did this already but I like practice
	
	let sumMultiples = 0;
	for (let i =1; i < 1000; i++){
		if (i%3 == 0){
			sumMultiples += i;
		}
		if ((i%5 === 0) && !(i%3===0)){
			sumMultiples += i;
		}
	}	
	console.log(sumMultiples);
