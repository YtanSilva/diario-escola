<?php

	/*
		1- Utilizando a variável $arrayDeClientes de um echo no nome do segundo cliente.
		2- Utilize a estrutura de dados $arrayDeNascimento para adicionar na estrutura $arrayDeClientes a data de nascimento de cada cliente.
		3- Faça a ordenação e impressão da estrutura $arrayDeClientes resultante do exercício 2 pela data de nascimento (pode ser ascendente ou descendente).
	*/

	$nomes = ['Francisco Souza', 'Guilherme Rosa', 'Arthur Golveia'];
	
	$cliente1 = new stdClass();
	$cliente1->nome = $nomes[0];
	
	$cliente2 = new stdClass();
	$cliente2->nome = $nomes[1];
	
	$cliente3 = new stdClass();
	$cliente3->nome = $nomes[2];
	
	$arrayDeClientes = [$cliente1, $cliente2, $cliente3];
	
	// Solução da primeira questão
	echo $cliente2->nome . PHP_EOL;
	
	$arrayDeNascimento = [
		'Francisco Souza' => '10-12-1996',
		'Arthur Golveia' => '14-01-2000',
		'Guilherme Rosa' => '26-05-1985',
		'Marcelo Planalto' => '26-05-1985'
	];
	
	// Solução da segunda questão
	foreach($arrayDeClientes as $clientes){
		$clientes->nascimento = $arrayDeNascimento[$clientes->nome];
		var_dump($clientes);
	}
	
	// Solução da terceira questão
	usort($arrayDeClientes, function($a,$b){
		$data1 = new DateTime($a->nascimento);
		$data2 = new DateTime($b->nascimento);
		return $data1<=>$data2;
	});
	
	foreach($arrayDeClientes as $clientes){
		echo $clientes->nome . " nascido em " . $clientes->nascimento . PHP_EOL;
		
	}
