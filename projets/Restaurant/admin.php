<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/style_admin.css"/>
    <title>admin</title>
</head>
<body>
    <section id="top">
        <div class="retour"><a class='bouton1' href="index.php">RETOUR</a></div>            
        <div class="logo"><img src="./images/logo_2.png" alt="" /></div>
    </section>
<section id="main">
    <?php 
        include 'db_fonctions.php';
        connection();

?>
        <form class="adminForm" action="traitement.php?action=creerMenu" method="post">
            <div class="row">Ajouter un menu à la carte</div>
        <div class="row">
            <label>
                Nom du plat :
                <input type="text" name="nom">
            </label>
        </div>
        <div class="row">
             <label>
                Description du plat :
                <textarea type="text" name="description"></textarea>
             </label>
        </div>
        <div class="row">
            <label for="file">
                Choisir une image
                <input type="file" name="image">    
            </label>
        </div>
        <div class="row">
            <input class='bouton3' type="submit" name="submit" value="Ajouter le plat" >
        </div>
    </form>

    
<!-- <?php
findMenuById($pdo,$id=1);
?>
 <p class="menu"> 
    <?php echo $menu['nom'].'<br>' ?>
    <?php echo $menu['description'].'<br>' ?>
    <?php echo $menu['image'].'<br>' ?>
                <img class = "imageMenu"src="./images/<?php echo $menu['image'] ?>" alt="" />
   </p> -->
</section>
    
</body>
</html>