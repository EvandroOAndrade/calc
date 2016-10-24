<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Calculadora extends CI_Controller {


	public function index()
	{
		$this->load->view('top');
		$this->load->view('menu');
		$this->load->view('form');
		$this->load->view('footer');
		$this->load->view('bot');
	}

	public function aritmetica()
	{
		$this->load->view('top');
		$this->load->view('menu');
		$this->load->view('form_aritmetica');
		$this->load->view('footer');
		$this->load->view('bot');
	}

	public function geometrica()
	{
		$this->load->view('top');
		$this->load->view('menu');
		$this->load->view('form_geometrica');
		$this->load->view('footer');
		$this->load->view('bot');
	}

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
