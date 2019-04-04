var Calculadora = (function(){
	
	var botones = document.getElementsByClassName('tecla');
	var display = document.getElementById('display');
	var primerDisplay = '', segundoDisplay = '', operacionActual = '', resultado = '';
	
	function Inicializacion(){
		//alert('sape')
	}
	Inicializacion();
	
	for (var i = 0; i < botones.length; i++) {
		botones[i].addEventListener('mouseup', escribirNumeros, false);
		botones[i].addEventListener('mousedown', clickDown, false);
		
	}
	
	function clickDown(event){
		event.target.style.transform = "scale(0.9, 0.9)";
	}
	
	function limpiaValores(){
		primerDisplay = '', segundoDisplay = '', operacionActual = '', resultado = '';
	}
	
	function multiplicar(numeroActual){
		limpiaValores();
		primerDisplay = numeroActual;
		operacionActual = '*';
		
	}
	
	function dividir(numeroActual){
		limpiaValores();
		primerDisplay = numeroActual;
		operacionActual = '/';
	}
	
	function sumar(numeroActual){
		limpiaValores();
		primerDisplay = numeroActual;
		operacionActual = '+';
	}
	
	function restar(numeroActual){
		limpiaValores();
		primerDisplay = numeroActual;
		operacionActual = '-';
	}
	
	function igual(){
		
		switch(operacionActual)
		{
			case '*':
				if(resultado !== '')
				{
					resultado = parseFloat(resultado) * parseFloat(segundoDisplay);	
				}
				else{
					resultado = parseFloat(primerDisplay) * parseFloat(display.innerHTML);
				}								
			break;
			
			case '-':
				if(resultado !== '')
				{
					resultado = parseFloat(resultado) - parseFloat(segundoDisplay);	
				}
				else{
					resultado = parseFloat(primerDisplay) - parseFloat(display.innerHTML);
				}
			break;
			
			case '+':
				if(resultado !== '')
				{
					resultado = parseFloat(resultado) + parseFloat(segundoDisplay);	
				}
				else{
					resultado = parseFloat(primerDisplay) + parseFloat(display.innerHTML);
				}
			break;
			
			case '/':
				if(resultado !== '')
				{
					resultado = parseFloat(resultado) / parseFloat(segundoDisplay);	
				}
				else{
					resultado = parseFloat(primerDisplay) / parseFloat(display.innerHTML);
				}
			break;
		}
		segundoDisplay = display.innerHTML;
		
		if(resultado.toString().length < 7)
		{
			if(resultado.toString().indexOf(".")==-1)
			{
				display.innerHTML = resultado.toString();
			}
			else{			
				display.innerHTML = resultado.toString(8);
			}
		}
		else{
			var resultadoCortado = '';
			for(var i=0;i<resultado.toString().length;i++){
				resultadoCortado += resultado.toString()[i];
				if(resultadoCortado.length > 7)
				{
					display.innerHTML = resultadoCortado;
					break;
				}
			}
		}
		
		
	}
	
	function escribirNumeros(event){
		
		event.target.style.transform = "scale(1, 1)";
		
		switch(event.target.alt)
		{
			case 'On': 
				display.innerHTML = '0';
				primerDisplay = '', segundoDisplay = '', operacionActual = '', resultado = '';
			break;
			
			case "0":
				if(display.innerHTML !== '0'){				
					if(display.innerHTML.length > 7)
						return;
					if(display.innerHTML.length > 0 && display.innerHTML.length < 8)
						display.innerHTML += event.target.alt;
				}
			break;

			case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":
			
				if(display.innerHTML.length > 7)
					return;
		
				if(display.innerHTML === '0'){
					display.innerHTML = event.target.alt;	
				}
				else{
					display.innerHTML += event.target.alt;
				}
				
			break;
				
			case "punto":
				for(var i=0; i<display.innerHTML.length; i++){
					if(display.innerHTML[i] === '.')
						return;
				}
				
				if(display.innerHTML.length > 7)
					return;
					
				display.innerHTML += '.';
			
			break;
			
			case "signo":
			
				if(display.innerHTML !== '0'){	
					if(display.innerHTML[0] === '-'){
						var numeroSeparado = display.innerHTML.split('-');										
						display.innerHTML = numeroSeparado[1];
					}
					else
						display.innerHTML = '-' + display.innerHTML;
				}
			
			break;
			
			//Operaciones
			case "por":
				multiplicar(display.innerHTML);
				display.innerHTML = '';
			break;
			
			case "menos":
				restar(display.innerHTML);
				display.innerHTML = '';
			break;
			
			case "mas":
				sumar(display.innerHTML);
				display.innerHTML = '';			
			break;
			
			case "dividido":
				dividir(display.innerHTML);
				display.innerHTML = '';			
			break;
			
			case "igual":
				igual();
			break
			
			default: break;
		}
	}
	
})();