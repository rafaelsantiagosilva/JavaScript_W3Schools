<?php
// Array com os nomes
$a[] = "Ana";
$a[] = "Beatriz";
$a[] = "Cássia";
$a[] = "Daniela";
$a[] = "Eliana";
$a[] = "Fernanda";
$a[] = "Gabriela";
$a[] = "Heloísa";
$a[] = "Ingrid";
$a[] = "Joana";
$a[] = "Kamila";
$a[] = "Ludmila";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Pietra";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cintía";
$a[] = "Dora";
$a[] = "Eveline";
$a[] = "Elisangela";
$a[] = "Sabrina";
$a[] = "Taimara";
$a[] = "Ursula";
$a[] = "Violeta";
$a[] = "Laura";
$a[] = "Elizabeth";
$a[] = "Elen";
$a[] = "Helen";
$a[] = "Viviane";

// Pegando o parâmetro da URL
$q = $_REQUEST["q"];

$hint = "";

// Olhando para todas as sugestões do array se $q for diferente de ""
if ($q !== "") {
     $q = strtolower($q);
     $qLength = strlen($q);

     foreach ($a as $key => $name) {
          if (stristr($q, substr($name, 0, $qLength))) {
               if ($hint === "") {
                    $hint = $name;
               } else {
                    $hint .= ", $name";
               }
          }
     }
} 

// Imprimindo "sem sugestão" se não for encontrada uma sugestão correspondente
echo $hint === "" ? "sem sugestões" : $hint;
?>