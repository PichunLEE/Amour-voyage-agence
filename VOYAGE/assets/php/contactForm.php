<?php
if(isset($_post[`Envoyer`])){
    $name = $_post[`nom`];
    $prenom = $_post[`prenom`];
    $email = $_post[`email`];
    $message = $_post[`message`];

    $nameTo = "HebeeLEE329@hotmail.com";
    $headers = "From: ". $mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($name, $prenom, $email, $message);
    header("Location: index.php?mailsend");
}