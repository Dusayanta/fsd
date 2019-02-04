const append = (number)=>{
		console.log(number);
		let textbox = document.getElementById('text1');
		textbox.value=textbox.value+number;
		localStorage.setItem('number2',textbox.value);
	}

const operate = (op)=>{
			let textbox = document.getElementById('text1');
			textbox.value='';
			localStorage.setItem('operator',op);
			let num1=localStorage.getItem('number2');
			localStorage.setItem('number1',num1);
		}
		const calc = ()=>{
			let first=parseInt(localStorage.getItem('number1'));
			let second= parseInt(document.getElementById('text1').value);
			let operator = localStorage.getItem('operator');
			if(operator=='+'){
				const calc = new Addition();
				const result = calc.calculate(first,second);
				//document.getElementById('text1').value=parseInt(first+second);
				document.getElementById('text1').value = result;
			
			}
			if(operator=='-')
			{
				const calc = new Diff();
				const result = calc.calculate(first,second);
				//document.getElementById('text1').value=parseInt(first+second);
				document.getElementById('text1').value = result;
			}
			if(operator=='/')
				{
					const calc = new Div();
				const result = calc.calculate(first,second);
				//document.getElementById('text1').value=parseInt(first+second);
				document.getElementById('text1').value = result;
				}
			if(operator=='*')
			{
				const calc = new Mul();
				const result = calc.calculate(first,second);
				//document.getElementById('text1').value=parseInt(first+second);
				document.getElementById('text1').value = result;
			}
		}
		const clearMem = ()=>{
			console.log('clear called');
			let tt=document.getElementById('text1');
			tt.value='';
			localStorage.removeItem('number1');
			localStorage.removeItem('number2');
			localStorage.removeItem('operator');
		}
		
class Calc{
	calculate(i,j){
		console.log('Calc ');
	}
}
class Addition extends Calc{
	calculate(i,j){
		return parseInt(i) + parseInt(j);
	}
}
class Diff extends Calc{
	calculate(i,j){
		return parseInt(i) - parseInt(j);
	}
}

class Mul extends Calc{
	calculate(i,j){
		return parseInt(i) * parseInt(j);
	}
}
class Div extends Calc{
	calculate(i,j){
		return parseInt(i) / parseInt(j);
	}
}
