<?php

$nombre = $_POST['name'];
$email = $_POST['email'];


$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n" ;
$mensaje = "Su email es " . $email . ",\r\n" ;


$para = 'samuelgamondi01@gmail.com';
$asunto = 'Este email fue enviado desde la web';

#Usa la libreria PHPMailer para enviar el mail, para esto se necesita un servior con APACHE y esta libreria instalada. Ademas se necesita un servidor de email que por defecto lo busca en LocalHost:25 .  
$cabeceras = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();

if(mail($para, $asunto, $mensaje, $cabeceras)){
    echo "El correo fue enviado correctamente";
}else{
    echo "Hubo un problema al enviar el correo";
}
?>