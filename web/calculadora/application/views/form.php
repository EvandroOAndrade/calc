	<div class="container">
		<form id="form-calculadora" method="POST" accept-charset="utf-8" name="form-calculadora" class="form-login">
		<h2 class="form-login-heading" style="text-align:center">Calculadora Bhaskara</h2>
		<h3 class="form-login-heading" style="text-align:center">Ax²+Bx+C=0</h3>
		<h4 class="form-signin-heading">Valor de A:</h4>
		<input type="text" id="a" name="a" class="form-control" placeholder="Valor de A" required autofocus>
		<h4 class="form-signin-heading">Valor de B:</h4>
		<input type="text" id="b" name="b" class="form-control" placeholder="Valor de B" required>
		<h4 class="form-signin-heading">Valor de C:</h4>
		<input type="text" id="c" name="c" class="form-control" placeholder="Valor de C" required>

		<!--<button type="submit" name="calcular" class="btn btn-lg btn-primary btn-block">Calcular</button>-->	
		

		<!--<label for="delta" class="sr-only">Delta:</label>-->
		<h4 class="form-signin-heading">Delta:</h4>
		<input type="text" id="delta" name="delta" class="form-control" placeholder="delta" disabled>
        <h4 class="form-signin-heading">X1:</h4>
		<input type="text" id="x1" name="x1" class="form-control" placeholder="X1" disabled>
		<h4 class="form-signin-heading">X2:</h4>
		<input type="text" id="x2" name="x2" class="form-control" placeholder="X2" disabled>
		<h4 class="form-signin-heading">X do vértice:</h4>
		<input type="text" id="xv" name="xv" class="form-control" placeholder="X do Vértice" disabled>
		<h4 class="form-signin-heading">Y do vértice:</h4>
		<input type="text" id="yv" name="yv" class="form-control" placeholder="Y do Vértice" disabled>

		<div class="panel-footer text-right">
               <button type="submit" class="btn btn-default" onclick="return limpa();">Limpar</button>
               <button type="button" Onclick="get_bhaskara();" name="calcular" class="btn btn-primary" >Calcular</button>
        </div>

		</form>
	</div>

	<style type="text/css">
		h4{

			color:#4682B4;
		}
		h2{

			color:#4682B4;
		}
		h3{

			color:#4682B4;
		}
		
	</style>



	

	