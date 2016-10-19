<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Calculadora extends CI_Controller {


	public function index()
	{
		$this->load->view('top');
		$this->load->view('menu');
		$this->load->view('form');
		$this->load->view('bot');
	}

	public function aritmetica()
	{
		$this->load->view('top');
		$this->load->view('menu');
		$this->load->view('form_aritmetica');
		$this->load->view('bot');
	}

	public function geometrica()
	{
		$this->load->view('top');
		$this->load->view('menu');
		$this->load->view('form_geometrica');
		$this->load->view('bot');
	}

	/*public function calcular()
	{
		$this->load->model('Calcular_model');

		$a = @$_POST['a'];
		$b = @$_POST['b'];
		$c = @$_POST['c'];
		$delta = @$_POST['delta'];
		$xv = @$_POST['xv'];
		$yv = @$_POST['yv'];


		$retorno = $this->Calcular_model->calcula($a, $b, $c,$delta);

		$retorno['a'] = $a;
		$retorno['b'] = $b;
		$retorno['c'] = $c;

		$this->load->view('top');
		$this->load->view('form', $retorno);
		$this->load->view('bot');
	
	}*/

	function response($success, $message = ''){
		header('Content-type: application/json');

		if(!$success){
			http_response_code(400);
		}

		exit(json_encode([
			'success' => $success,
			'message' => $message
		]));
	}

}
