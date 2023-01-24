<?php

$nombre = $_POST['name'];
$email = $_POST['email'];


$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n" ;
$mensaje = "Su email es " . $email . ",\r\n" ;


$para = 'samuelgamondi01@gmail.com';
$asunto = 'Este email fue enviado desde la web';

?>