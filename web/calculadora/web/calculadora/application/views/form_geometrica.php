	<div class="container">
		<form id="form-calculadora" method="POST" accept-charset="utf-8" name="form-calculadora" class="form-login">
		<h2 class="form-login-heading" style="text-align:center">Progressão Geométrica</h2>
		<h3 class="form-login-heading" style="text-align:center">an = a1 x q<sup>n-1</sup></h3>
		<h5 class="form-signin-heading">An = Valor do maior termo!</h5>
		<h5 class="form-signin-heading">a1 = Valor do primeiro(menor) termo!</h5>
		<h5 class="form-signin-heading">n = Número de termos da Progressão!</h5>
		<h5 class="form-signin-heading">q = Razão da Progressão!</h5>
		<h5 class="form-signin-heading">Deixe em branco o valor que quer descobrir!</h5><br>
		<h4 class="form-signin-heading">Valor de An:</h4>
		<input type="text" id="an" name="an" class="form-control" placeholder="Valor de An(maior termo)" autofocus>
		<h4 class="form-signin-heading">Valor de a1:</h4>
		<input type="text" id="a1" name="a1" class="form-control" placeholder="Valor de a1(primeiro/menor termo)">
		<h4 class="form-signin-heading">Valor de N:</h4>
		<input type="text" id="n" name="n" class="form-control" placeholder="Valor de N(número de termos)">
		<h4 class="form-signin-heading">Razão(q):</h4>
		<input type="text" id="q" name="q" class="form-control" placeholder="Valor de R(razão da progressão)">

		<h4 class="form-signin-heading">Soma dos Termos:</h4>
		<input type="text" id="st" name="st" class="form-control" placeholder="Soma de todos termos da progressão" disabled>
        
        <h4 class="form-signin-heading">Tipo de Progressão:</h4>
		<input type="text" id="tipo" name="tipo" class="form-control" placeholder="Tipo de Progressão" disabled>

		<div class="form-group">
  			<h4 class="form-signin-heading" for="comment">Valores da Progressão:</h4>
  			<textarea class="form-control" rows="5" id="teste" placeholder="Progressão completa por extenso!" disabled></textarea>
		</div>

		<div class="panel-footer text-right">
               <button type="submit" class="btn btn-default" onclick="return limpageometrica();">Limpar</button>
               <button type="button" Onclick="get_geometrica();" name="calcular" class="btn btn-primary" >Calcular</button>
        </div>

		</form>
	</div>

	<style type="text/css">
		h2,h4,h3,h5{

			color:#4682B4;
		}
		
	</style>



	

	