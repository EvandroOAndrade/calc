<?php
	if($_SERVER['HTTP_HOST'] != 'localhost'){
		header('Location: /calculadora');
	} else {
		header('Location: /calculadora/web/calculadora');
	}
?>