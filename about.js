console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
alert("form has been submitted successfully.");
}

function duckmsg (){
	alert("hi i am duckiee")
}


let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);


let duck = document.getElementById('duck');
console.log(duck);
duck.addEventListener('mouseover',duckmsg)
