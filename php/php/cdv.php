<?php
/*
À chaque fois qu'un utilisateur affiche la page, il faudra éditer ou créer s'il n'existe pas un fichier 
où il faudra enregistrer le nombre de visites, que vous aurez, au préalablement, incrémenté, sur la page.
*/
?> 
<?php

$filepath = implode( DIRECTORY_SEPARATOR, [__DIR__, "compteur.json"]);
$compteur =0;

if(is_file($filepath)) {
    $compteur = file_get_contents($filepath);
}
$compteur++;
file_put_contents($filepath, $compteur);
?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<p>Il y a eu <?= $compteur; ?> visite(s) sur cette page  </p>

</body>
</html>

?> 

