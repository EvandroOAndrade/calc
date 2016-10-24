function get_bhaskara()
{
		var a = document.getElementById('a').value;
		var b = document.getElementById('b').value;
		var c = document.getElementById('c').value;
		var delta = document.getElementById('delta').value;
		var x1= document.getElementById('x1').value;
		var x2= document.getElementById('x2').value;
		var yv= document.getElementById('yv').value;
		var xv= document.getElementById('xv').value;

		Calcular(a,b,c,delta,x1,x2,yv,xv);
}

function Calcular(a,b,c,delta,x1,x2,yv,xv){
		xv = 0;
		var aux = 0;
		var aux2 = 0;

		if(a === '0')
		{
			//alert('Função Paralisada! A=0');
			helpers.message('Função Paralisada! A=0');
		}

		else if(c === '0')
		{
			helpers.message('Função Paralisada! C=0');
		}

		else{

			delta = (b*b) - (4*a*c);

			if(delta<0)
			{
				document.getElementById("delta").value = delta;
				helpers.message('Função Paralisada! Delta < 0');
			}
			else{

				x1 = (-b + Math.sqrt(delta))/2*a;
				x2 = (-b - Math.sqrt(delta))/2*a;

				aux = (-b);
				aux2=(2*a);

				xv = (aux === 0 ? 1 : aux)/(aux2 === 0 ? 1 : aux2);
				yv = ((-delta)/(4*a));

				mostrabhaskara(a,b,c,delta,x1,x2,yv,xv);

			}
		}
	}	
	
	function mostrabhaskara(a,b,c,delta,x1,x2,yv,xv)
	{
		document.getElementById("a").value = a;
		document.getElementById("b").value = b;
		document.getElementById("c").value = c;
		document.getElementById("delta").value = delta;
		document.getElementById("x1").value = x1;
		document.getElementById("x2").value = x2;
		document.getElementById("yv").value = yv;
		document.getElementById("xv").value = xv;
	}

	function limpa(){

		document.getElementById('a').value = "";
		document.getElementById('b').value = "";
		document.getElementById('c').value = "";
		document.getElementById('delta').value = "";
		document.getElementById("x1").value = "";
		document.getElementById("x2").value = "";
		document.getElementById("yv").value = "";
		document.getElementById("xv").value = "";

	}

	function limpaaritmetica(){

		document.getElementById('an').value = "";
		document.getElementById('a1').value = "";
		document.getElementById('n').value = "";
		document.getElementById('r').value = "";
		document.getElementById("st").value = "";
		document.getElementById("tipo").value = "";
		document.getElementById("teste").value = "";
	}

	function limpageometrica(){

		document.getElementById('an').value = "";
		document.getElementById('a1').value = "";
		document.getElementById('n').value = "";
		document.getElementById('q').value = "";
		document.getElementById("st").value = "";
		document.getElementById("tipo").value = "";
		document.getElementById("teste").value = "";
	}

	function get_aritmetica()
	{
		var an = document.getElementById('an').value;
		var a1 = document.getElementById('a1').value;
		var n = document.getElementById('n').value;
		var r = document.getElementById('r').value;
		var tipo = document.getElementById('tipo').value;

		if(parseInt(n)<=0)
		{
			helpers.message("Erro! Progressão com número de termo inválido!");
		}else{

			aritmetica(an,a1,n,r,tipo);

		}
	}
		function atribui_aritmetica(an,a1,n,r,st)
	{
		document.getElementById('an').value = an;
		document.getElementById('a1').value = a1;
		document.getElementById('n').value = Math.round(n);
		document.getElementById('r').value = r;
		document.getElementById("st").value = st;

	}

	function aritmetica(an,a1,n,r){
		

		if(an === '' && a1 !== '' && n !== '' && r !== '')
		{
			aritmeticaAn(a1,n,r);
		}
		else if(a1 === '' && an !== '' && n !== '' && r !== '')
		{
			aritmeticaA1(an,n,r);
		}
		else if(n === '' && an !== '' && a1 !== '' && r !== '')
		{

			if(parseInt(a1)>=parseInt(an) && parseInt(r)>0)
			{
				helpers.message("Erro! A1>=An com Razão Positiva!");
			}else{
				aritmeticaN(an,a1,r);
			}
			
		}
		else if(r === '' && an !== '' && a1 !== '' && n !== '')
		{
			aritmeticaR(an,a1,n);
		}
		else if(r !== '' && an !== '' && a1 !== '' && n !== '')
		{
			helpers.message('Erro! Todos valores estão preenchidos!');	
		}				
		else
		{
			helpers.message('Erro! Mais de um valor não foi preenchido!');	
		}

	}

	function aritmeticaAn(a1,n,r){
		
		// an = a1 + (n-1)*r
		an = parseFloat(a1) + (parseInt(n)-1)*parseFloat(r);

		st = ((parseFloat(a1)+parseFloat(an))*parseInt(n))/2;

		atribui_aritmetica(an,a1,n,r,st);
		
		mostraaritmetica(an,a1,n,r,st);
		
	}

	function aritmeticaA1(an,n,r){
		
		// a1 = an - (n-1)*r
		a1 = parseFloat(an) - (parseInt(n)-1)*parseFloat(r);

		st = ((parseFloat(a1)+parseFloat(an))*parseInt(n))/2;

		atribui_aritmetica(an,a1,n,r,st);
		mostraaritmetica(an,a1,n,r,st);
	}

	function aritmeticaN(an,a1,r){

		// n = an-a1 - r*(-1)/r
		n = (parseFloat(an) - parseFloat(a1) - parseFloat(r)*(-1))/parseFloat(r);
		st = ((parseFloat(a1)+parseFloat(an))*parseInt(n))/2;
		
		if(n<0)
		{
			st = 0;
			atribui_aritmetica(an,a1,n,r,st);
			helpers.message("Calculo paralisado! Número de Termos < 0!");

		}else{

			atribui_aritmetica(an,a1,n,r,st);
			mostraaritmetica(an,a1,n,r,st);
		}
	}

	function aritmeticaR(an,a1,n){	
		// r = an-a1/(n-1)
		if(parseInt(an)===parseInt(a1) && parseInt(n)===1)
		{
			r = 0;
			st = ((parseFloat(a1)+parseFloat(an))*parseInt(n))/2;
			atribui_aritmetica(an,a1,n,r,st);
			mostraaritmetica(an,a1,n,r,st);	
		}else{

			r = (parseFloat(an)-parseFloat(a1))/(parseInt(n)-1);
			st = ((parseFloat(a1)+parseFloat(an))*parseInt(n))/2;
			atribui_aritmetica(an,a1,n,r,st);
			mostraaritmetica(an,a1,n,r,st);	

		}
		
	}

	function mostraaritmetica(an,a1,n,r,st){

		var i = parseFloat(a1);
		var aux = [];
		var cont = 0;
		var value = "";
		var soma = 0;
		var x=0;
		
		if(parseFloat(r)>0)
		{
			while(i<=parseFloat(an))
			{	
				aux[i] = i;
				cont++;
				value+= aux[i];
				document.getElementById("teste").innerHTML += " | "+i;
				
				i += parseFloat(r);
				
			
			}
		}

		else if(parseFloat(r)<0)
		{
			while(i>=parseFloat(an))
			{	
				aux[i] = i;
				value-= aux[i];
				document.getElementById("teste").innerHTML += " | "+i;
				i += parseFloat(r);
				cont++;
			
			}
		}

		else{
			i = 0;
			while(i<parseInt(n))
			{
				document.getElementById("teste").innerHTML += " | "+a1;
				i++;
			}	
		}
			
		if(parseFloat(r)===0)
		{
			document.getElementById('tipo').value = 'Progressão Constante';
		}else if(parseFloat(r)>0)
		{
			document.getElementById('tipo').value = 'Progressão Crescente';
		}else
		{
			document.getElementById('tipo').value = 'Progressão Decrescente';
		}
	}

	function get_geometrica()
	{
		var an = document.getElementById('an').value;
		var a1 = document.getElementById('a1').value;
		var n = document.getElementById('n').value;
		var q = document.getElementById('q').value;
		var st = document.getElementById('st').value;
		var tipo = document.getElementById('tipo').value;

			if(parseInt(n)<=0)
		{
			helpers.message("Erro! Progressão com número de termo inválido!");
		}else{

			geometrica(an,a1,n,q,st,tipo);

		}
		
	}

	function geometrica(an,a1,n,q,st,tipo){
		

		if(an === '' && a1 !== '' && n !== '' && q !== '')
		{
			geometricaAn(a1,n,q);
		}
		else if(a1 === '' && an !== '' && n !== '' && q !== '')
		{
			geometricaA1(an,n,q);
		}
		else if(n === '' && an !== '' && a1 !== '' && q !== '')
		{
			geometricaN(an,a1,q);
		}
		else if(q === '' && an !== '' && a1 !== '' && n !== '')
		{
			geometricaQ(an,a1,n);
		}
		else if(q !== '' && an !== '' && a1 !== '' && n !== '')
		{
			helpers.message('Erro! Todos valores estão preenchidos!');	
		}				
		else
		{
			helpers.message('Erro! Mais de um valor não foi preenchido!');	
		}
	}

	function atribui_geometrica(an,a1,n,q,st)
	{
		document.getElementById('an').value = an;
		document.getElementById('a1').value = a1;
		document.getElementById('n').value = Math.round(n);
		document.getElementById('q').value = q;
		document.getElementById("st").value = st;
		if(parseFloat(q)===0)
		{
			document.getElementById('tipo').value = 'Progressão Constante';
		}else if(parseFloat(q)>0)
		{
			document.getElementById('tipo').value = 'Progressão Crescente';
		}else
		{
			document.getElementById('tipo').value = 'Progressão Decrescente';
		}
	}

	function geometricaAn(a1,n,q){
		
		// an = a1 * q na potencia(n-1)
		var aux = parseInt(n)-1;
		an = parseFloat(a1) * (Math.pow(parseFloat(q),parseFloat(aux)));

		st = a1 * ((Math.pow(q,n)-1) / (q-1));

		atribui_geometrica(an,a1,n,q,st);
		mostrageometrica(an,a1,n,q,st);
	}

	function geometricaA1(an,n,q){
		
		// a1 = an / pela potencia (q(n-1))
		var aux = parseInt(n)-1;
		a1 = parseFloat(an) / (Math.pow(parseFloat(q),parseFloat(aux)));
		st = a1 * ((Math.pow(q,n)-1) / (q-1));

		atribui_geometrica(an,a1,n,q,st);
		mostrageometrica(an,a1,n,q,st);
	}

	function geometricaQ(an,a1,n){

		// q = an/a1 na potencia 1/n-1 

		var aux2 = 1/(parseInt(n)-1);
		var aux3 = parseFloat(an)/parseFloat(a1);
		q = Math.pow(aux3,aux2);
		st = a1 * ((Math.pow(q,n)-1) / (q-1));

		atribui_geometrica(an,a1,n,q,st);
		mostrageometrica(an,a1,n,q,st);
	}

	function geometricaN(an,a1,q){

		// n = log((an/a1)/log(q)) + 1
		var aux_q = 0;
		var aux = parseFloat(an)/parseFloat(a1);
		//tratamento razão negativa
		if(q<0)
		{
			aux_q = q*(-1);
		}else{

			aux_q = q;
		}

		var aux2 = Math.log(parseFloat(aux_q));
		var x = 0;
		//tratamento divisão negativa
		if(aux<0)
		{
			aux*=(-1);
		}else{

			aux=aux;
		}
		//tratamento logaritmo negativo
		if(aux2<0)
		{
			aux2*=(-1);
		}else{

			aux2=aux2;
		}

		x = Math.log((aux)/aux2)+1;

		n = (x.toFixed(0));

		
		st = a1 * ((Math.pow(q,n)-1) / (q-1));

		atribui_geometrica(an,a1,n,q,st);
		mostrageometrica(an,a1,n,q,st);
	}
	
	function mostrageometrica(an,a1,n,q,st){

		var i = parseFloat(a1);
		var aux = [];
		var cont = 0;
		var value = "";
		var soma = 0;
		var x=0;
		
		if(parseFloat(q)>0)
		{
			while(x<parseInt(n))
			{	

				document.getElementById("teste").innerHTML += " | "+i;
				i *= parseFloat(q);
				x++;
		
			}
		}

		else if(parseFloat(q)<0)
		{
				
			while(x<parseInt(n))
			{	

				document.getElementById("teste").innerHTML += " | "+i;
				i *= parseFloat(q);
				x++;

			}
			
		}

		else{

			document.getElementById("teste").innerHTML += " Progressão fixa em 0";
		}
	}

	$(document).ready(function(){
		$('input').keypress(function(event){
			var code = event.keyCode || event.which;
			// 45 = sinal(-) 46 = ponto(.)
			return testNumberKeyPress(event, [46,45]);
		});
	});

	function testNumberKeyPress(event, arrayExceptions) {
       /* 8-BACKSPACE, 9-TAB, 13-ENTER, 37-left arrow, 39-right arrow, 44-ponto, 46-virgula,[48-57]-[0-9] */

       var key = event.keyCode || event.which;
       var validKeys   = [8,9,13,37,39];
       var paste       = key == 118 && event.ctrlKey; // Ctrl+V
       var copy        = key == 99 && event.ctrlKey; // Ctrl+C
       //console.log(key);
       if(arrayExceptions){	
           [].push.apply(validKeys, arrayExceptions);
       }

       return (key >= 48 && key <= 57) || validKeys.indexOf(key) >= 0 || paste || copy || event.key == "Delete";
   }