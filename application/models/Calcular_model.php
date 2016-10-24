<?php

class Calcular_model extends CI_Model {

	public $delta=0;
	public $xv;
	public $yv;
	
	public function __construct(){
		parent:: __construct();
	}

/*public function calcula($a, $b, $c,$delta)
{
		
	$delta = (($b*$b) - (4*$a*$c));
	

	$x1 = (-$b + sqrt($delta))/2*$a;
	$x2 = (-$b - sqrt($delta))/2*$a;

	$aux = (-$b);
	$aux2=(2*$a);
	//$xv = ($aux/$aux2);
	$xv = ($aux == 0 ? 1 : $aux)/($aux2 == 0 ? 1 : $aux2);
	$yv = ((-$delta)/(4*($a == 0 ? 1 : $a)));


		return array('x1'=>$x1,'x2'=>$x2,'delta'=>$delta,'xv'=>$xv,'yv'=>$yv);
	
	
 	
}*/
	

}