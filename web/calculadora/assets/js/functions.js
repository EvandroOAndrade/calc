function Calcular(){

		var a = document.getElementById('a').value;
		var b = document.getElementById('b').value;
		var c = document.getElementById('c').value;
		var delta = document.getElementById('delta').value;
		var x1= document.getElementById('x1').value;
		var x2= document.getElementById('x2').value;
		var yv= document.getElementById('yv').value;
		var xv= document.getElementById('xv').value;
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

				document.getElementById("a").value = a;
				document.getElementById("b").value = b;
				document.getElementById("c").value = c;
				document.getElementById("delta").value = delta;
				document.getElementById("x1").value = x1;
				document.getElementById("x2").value = x2;
				document.getElementById("yv").value = yv;
				document.getElementById("xv").value = xv;

			}
		}
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

	function aritmetica(){
		var an = document.getElementById('an').value;
		var a1 = document.getElementById('a1').value;
		var n = document.getElementById('n').value;
		var r = document.getElementById('r').value;

		if(an === '' && a1 !== '' && n !== '' && r !== '')
		{
			aritmeticaAn();
		}
		else if(a1 === '' && an !== '' && n !== '' && r !== '')
		{
			aritmeticaA1();
		}
		else if(n === '' && an !== '' && a1 !== '' && r !== '')
		{
			aritmeticaN();
		}
		else if(r === '' && an !== '' && a1 !== '' && n !== '')
		{
			aritmeticaR();
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

	function aritmeticaAn(){

		var an = document.getElementById('an').value;
		var a1 = document.getElementById('a1').value;
		var n = document.getElementById('n').value;
		var r = document.getElementById('r').value;
		var st = document.getElementById('st').value;
		var tipo = document.getElementById('tipo').value;
		
		// an = a1 + (n-1)*r
		an = parseInt(a1) + (parseInt(n)-1)*parseInt(r);

		st = ((parseInt(a1)+parseInt(an))*parseInt(n))/2;

		document.getElementById('an').value = an;
		document.getElementById('a1').value = a1;
		document.getElementById('n').value = n;
		document.getElementById('r').value = r;
		document.getElementById("st").value = st;

		if(parseInt(r)===0)
		{
			document.getElementById('tipo').value = 'Progressão Constante';
		}else if(parseInt(r)>0)
		{
			document.getElementById('tipo').value = 'Progressão Crescente';
		}else
		{
			document.getElementById('tipo').value = 'Progressão Decrescente';
		}

		mostraaritmetica(an,a1,n,r,st);
		
	}
	function mostrageometrica(an,a1,n,q,st){

		var i = parseInt(a1);
		var aux = [];
		var cont = 0;
		var value = "";
		var soma = 0;
		var x=0;
	
		//console.log(par);
		
		if(parseInt(q)>0)
		{
			while(x<parseInt(n))
			{	

				aux[i] = i;
				value+= aux[x];
				document.getElementById("teste").innerHTML += " | "+i;
				i *= parseInt(q);
				cont++;
				x++;
		
			}
		}

		else if(parseInt(q)<0)
		{
				
			while(x<parseInt(n))
			{	

				document.getElementById("teste").innerHTML += " | "+i;
				i *= parseInt(q);
				cont++;
				x++;

			}
			
		}

		else{

			document.getElementById("teste").innerHTML += " Progressão fixa em 0";
		}
	}

	function mostraaritmetica(an,a1,n,r,st){

		var i = parseInt(a1);
		var aux = [];
		var cont = 0;
		var value = "";
		var soma = 0;
		var x=0;
		
		if(parseInt(r)>0)
		{
			while(i<=parseInt(an))
			{	
				aux[i] = i;
				//console.log(aux[i]);
				//document.write(aux[i]);
				cont++;
				value+= aux[i];
				document.getElementById("teste").innerHTML += " | "+i;
				
				i += parseInt(r);
				
			
			}
		}

		else if(parseInt(r)<0)
		{
			while(i>=parseInt(an))
			{	
				aux[i] = i;
				//console.log(aux[i]);
				//document.write(aux[i]);
				value-= aux[i];
				document.getElementById("teste").innerHTML += " | "+i;
				i += parseInt(r);
				cont++;
			
			}
		}

		else{

			document.getElementById("teste").innerHTML += " Progressão fixa em 0";
		}
			
		
	}

	function aritmeticaA1(){

		var an = document.getElementById('an').value;
		var a1 = document.getElementById('a1').value;
		var n = document.getElementById('n').value;
		var r = document.getElementById('r').value;
		var st = document.getElementById('st').value;
		var tipo = document.getElementById('tipo').value;
		
		// a1 = an - (n-1)*r
		a1 = parseInt(an) - (parseInt(n)-1)*parseInt(r);

		st = ((parseInt(a1)+parseInt(an))*parseInt(n))/2;

		document.getElementById('an').value = an;
		document.getElementById('a1').value = a1;
		document.getElementById('n').value = n;
		document.getElementById('r').value = r;
		document.getElementById("st").value = st;
		if(parseInt(r)===0)
		{
			document.getElementById('tipo').value = 'Progressão Constante';
		}else if(parseInt(r)>0)
		{
			document.getElementById('tipo').value = 'Progressão Crescente';
		}else
		{
			document.getElementById('tipo').value = 'Progressão Decrescente';
		}
		mostraaritmetica(an,a1,n,r,st);
	}

	function aritmeticaN(){

		var an = document.getElementById('an').value;
		var a1 = document.getElementById('a1').value;
		var n = document.getElementById('n').value;
		var r = document.getElementById('r').value;
		var st = document.getElementById('st').value;
		var tipo = document.getElementById('tipo').value;
		var aux_n=0;
		

		if(n<0)
		{
			document.getElementById('an').value = an;
			document.getElementById('a1').value = a1;
			document.getElementById('n').value = n;
			document.getElementById('r').value = r;
			helpers.message("Calculo paralisado! Número de Termos < 0!");

		}else{

			// n = an-a1 - r*(-1)/r
			n = (parseInt(an) - parseInt(a1) - parseInt(r)*(-1))/parseInt(r);
			st = ((parseInt(a1)+parseInt(an))*parseInt(n))/2;

			document.getElementById('an').value = an;
			document.getElementById('a1').value = a1;
			document.getElementById('n').value = n;
			document.getElementById('r').value = r;
			document.getElementById("st").value = st;
			if(parseInt(r)===0)
			{
				document.getElementById('tipo').value = 'Progressão Constante';
			}else if(parseInt(r)>0)
			{
				document.getElementById('tipo').value = 'Progressão Crescente';
			}else
			{
				document.getElementById('tipo').value = 'Progressão Decrescente';
			}
			mostraaritmetica(an,a1,n,r,st);

		}
	}

	function aritmeticaR(){

		var an = document.getElementById('an').value;
		var a1 = document.getElementById('a1').value;
		var n = document.getElementById('n').value;
		var r = document.getElementById('r').value;
		var st = document.getElementById('st').value;
		var tipo = document.getElementById('tipo').value;
		
		// r = an-a1/(n-1)
		r = (parseInt(an)-parseInt(a1))/(parseInt(n)-1);

		st = ((parseInt(a1)+parseInt(an))*parseInt(n))/2;

		document.getElementById('an').value = an;
		document.getElementById('a1').value = a1;
		document.getElementById('n').value = n;
		document.getElementById('r').value = r;
		document.getElementById("st").value = st;
		if(parseInt(r)===0)
		{
			document.getElementById('tipo').value = 'Progressão Constante';
		}else if(parseInt(r)>0)
		{
			document.getElementById('tipo').value = 'Progressão Crescente';
		}else
		{
			document.getElementById('tipo').value = 'Progressão Decrescente';
		}
		mostraaritmetica(an,a1,n,r,st);
	}

	function geometrica(){
		var an = document.getElementById('an').value;
		var a1 = document.getElementById('a1').value;
		var n = document.getElementById('n').value;
		var q = document.getElementById('q').value;

		if(an === '' && a1 !== '' && n !== '' && q !== '')
		{
			geometricaAn();
		}
		else if(a1 === '' && an !== '' && n !== '' && q !== '')
		{
			geometricaA1();
		}
		else if(n === '' && an !== '' && a1 !== '' && q !== '')
		{
			geometricaN();
		}
		else if(q === '' && an !== '' && a1 !== '' && n !== '')
		{
			geometricaQ();
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

	function geometricaAn(){

		var an = document.getElementById('an').value;
		var a1 = document.getElementById('a1').value;
		var n = document.getElementById('n').value;
		var q = document.getElementById('q').value;
		var st = document.getElementById('st').value;
		var tipo = document.getElementById('tipo').value;
		
		// an = a1 * q na potencia(n-1)
		var aux = parseInt(n)-1;
		an = parseInt(a1) * (Math.pow(parseInt(q),parseInt(aux)));

		st = a1 * ((Math.pow(q,n)-1) / (q-1));

		document.getElementById('an').value = an;
		document.getElementById('a1').value = a1;
		document.getElementById('n').value = n;
		document.getElementById('q').value = q;
		document.getElementById("st").value = st;
		if(parseInt(q)===0)
		{
			document.getElementById('tipo').value = 'Progressão Constante';
		}else if(parseInt(q)>0)
		{
			document.getElementById('tipo').value = 'Progressão Crescente';
		}else
		{
			document.getElementById('tipo').value = 'Progressão Decrescente';
		}
		mostrageometrica(an,a1,n,q,st);
	}

	function geometricaA1(){

		var an = document.getElementById('an').value;
		var a1 = document.getElementById('a1').value;
		var n = document.getElementById('n').value;
		var q = document.getElementById('q').value;
		var st = document.getElementById('st').value;
		var tipo = document.getElementById('tipo').value;
		
		// a1 = an / pela potencia (q(n-1))
		var aux = parseInt(n)-1;
		a1 = parseInt(an) / (Math.pow(parseInt(q),parseInt(aux)));

		st = a1 * ((Math.pow(q,n)-1) / (q-1));

		document.getElementById('an').value = an;
		document.getElementById('a1').value = a1;
		document.getElementById('n').value = n;
		document.getElementById('q').value = q;
		document.getElementById("st").value = st;
		if(parseInt(q)===0)
		{
			document.getElementById('tipo').value = 'Progressão Constante';
		}else if(parseInt(q)>0)
		{
			document.getElementById('tipo').value = 'Progressão Crescente';
		}else
		{
			document.getElementById('tipo').value = 'Progressão Decrescente';
		}
		mostrageometrica(an,a1,n,q,st);
	}

	function geometricaQ(){

		var an = document.getElementById('an').value;
		var a1 = document.getElementById('a1').value;
		var n = document.getElementById('n').value;
		var q = document.getElementById('q').value;
		var st = document.getElementById('st').value;
		var tipo = document.getElementById('tipo').value;

		// q = an/a1 na potencia 1/n-1 

		var aux2 = 1/(parseInt(n)-1);
		var aux3 = parseInt(an)/parseInt(a1);
		q = Math.pow(aux3,aux2);

		st = a1 * ((Math.pow(q,n)-1) / (q-1));

		document.getElementById('an').value = an;
		document.getElementById('a1').value = a1;
		document.getElementById('n').value = n;
		document.getElementById('q').value = q;
		document.getElementById("st").value = st;
		if(parseInt(q)===0)
		{
			document.getElementById('tipo').value = 'Progressão Constante';
		}else if(parseInt(q)>0)
		{
			document.getElementById('tipo').value = 'Progressão Crescente';
		}else
		{
			document.getElementById('tipo').value = 'Progressão Decrescente';
		}
		mostrageometrica(an,a1,n,q,st);
	}

	function geometricaN(){

		var an = document.getElementById('an').value;
		var a1 = document.getElementById('a1').value;
		var n = document.getElementById('n').value;
		var q = document.getElementById('q').value;
		var st = document.getElementById('st').value;
		var tipo = document.getElementById('tipo').value;
		var aux_q = 0;
		var aux = parseInt(an)/parseInt(a1);
		if(q<0)
		{
			aux_q = q*(-1);
		}else{

			aux_q = q;
		}

		var aux2 = Math.log(parseInt(aux_q));
		var x = 0;
		
		if(aux<0)
		{
			aux*=(-1);
		}else{

			aux=aux;
		}

		if(aux2<0)
		{
			aux2*=(-1);
		}else{

			aux2=aux2;
		}

		x = Math.log((aux)/aux2)+1;

		n = (x.toFixed(0));

		console.log("Aux="+aux);
		console.log("Aux2="+aux);
		console.log("X="+x);

		// n = log((an/a1)/log(q)) + 1
		st = a1 * ((Math.pow(q,n)-1) / (q-1));

		document.getElementById('an').value = an;
		document.getElementById('a1').value = a1;
		document.getElementById('n').value = n;
		document.getElementById('q').value = q;
		document.getElementById("st").value = st;
		if(parseInt(q)===0)
		{
			document.getElementById('tipo').value = 'Progressão Constante';
		}else if(parseInt(q)>0)
		{
			document.getElementById('tipo').value = 'Progressão Crescente';
		}else
		{
			document.getElementById('tipo').value = 'Progressão Decrescente';
		}
		mostrageometrica(an,a1,n,q,st);
	}

	$(document).ready(function(){
		$('input').keypress(function(event){
			var code = event.keyCode || event.which;
			
			return testNumberKeyPress(event, [46]);
		});
	});

	function testNumberKeyPress(event, arrayExceptions) {
       /* 8-BACKSPACE, 9-TAB, 13-ENTER, 37-left arrow, 39-right arrow, 44-ponto, 46-virgula,[48-57]-[0-9] */

       var key = event.keyCode || event.which;
       var validKeys   = [8,9,13,37,39];
       var paste       = key == 118 && event.ctrlKey; // Ctrl+V
       var copy        = key == 99 && event.ctrlKey; // Ctrl+C

       if(arrayExceptions){
           [].push.apply(validKeys, arrayExceptions);
       }

       return (key >= 48 && key <= 57) || validKeys.indexOf(key) >= 0 || paste || copy || event.key == "Delete";
   }