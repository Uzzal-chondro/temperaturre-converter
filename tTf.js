const temCal =()=>{


const temInput = document.getElementById('tem').value;
const selectOption=document.getElementById('tfSelector');
const selectedVal = tfSelector.options[selectOption.selectedIndex].value;
const showResult= document.getElementById('showResult');
let result;

const calFahrenheit =(data)=>{// (0°C × 9/5) + 32 = 32°F formulla;
result = Math.floor((data*9/5) + 32);
showResult.innerHTML =` = ${result}° Fahrenheit . `;
};

const calCelsius =(data)=>{
	// Formula(0°F − 32) × 5/9 = -17.78°C
	
	result = Math.floor((data-32) * 5/9 );
	showResult.innerHTML =` = ${result}° Celsius .`;

}


if(selectedVal=='°Celsius'){
	calFahrenheit(temInput);
}else{
calCelsius(temInput);
}


}