class Sample{
	showMessage(){
		console.log('Sample showMessage() called');
	}
}
const displayMessage = ()=>{
	//console.log('Hello World');
	console.log('Hello World');
	//instantiate the class
	const sampleObj = new Sample();
	//calling the method
	sampleObj.showMessage();
}
