<?php

include 'db_fonctions.php';
session_start() ;
connection();
$action = $_GET["action"];
$id = $_GET["id"];
$index = (isset($_GET["index"])) ? $_GET["index"] : "";


switch($action) {

    case"ajouterReservation";

    
    if(isset($_POST['envoyer'])){
        $creneau =filter_input(INPUT_POST,"creneau",FILTER_SANITIZE_SPECIAL_CHARS);
        $nomPrenom =filter_input(INPUT_POST,"name",FILTER_SANITIZE_SPECIAL_CHARS);
        // $jour =filter_input(INPUT_POST,"jour",FILTER_SANITIZE_SPECIAL_CHARS);
        $jour = 1;
        $heure =filter_input(INPUT_POST,"heure",FILTER_SANITIZE_SPECIAL_CHARS);
        $nbPersonne =filter_input(INPUT_POST,"nbPersonne",FILTER_VALIDATE_INT);
        $message =filter_input(INPUT_POST,"message",FILTER_SANITIZE_SPECIAL_CHARS);
        $email=filter_input(INPUT_POST,"email", FILTER_VALIDATE_EMAIL);

    

        if($nomPrenom && $nbPersonne && $jour && $heure && $creneau && $email ){
            // $reservation =[
            //     "name" => $nomPrenom ,
            //     "nbPersonne"=>$nbPersonne ,
            //     "jour"=>$jour,
            //     "heure"=>$heure,
            //     "creneau"=>$creneau,
            //     "email"=>$email,
            //     "message"=>$message ];

        // $_SESSION['reservations'][]=$reservation;

        insertReservation($pdo,$nomPrenom,$nbPersonne,$jour,$heure,$creneau,$email,$message);
        header("Location:index.php#contact");
        }
        


        
    }
    break;

    case"modifierReservation";
    if(isset($_POST['modifier'])){
        
        $creneau =filter_input(INPUT_POST,"creneau",FILTER_SANITIZE_SPECIAL_CHARS);
        $jour =filter_input(INPUT_POST,"jour",FILTER_SANITIZE_SPECIAL_CHARS);
        $heure =filter_input(INPUT_POST,"heure",FILTER_SANITIZE_SPECIAL_CHARS);
        
        
        if($jour && $heure && $creneau){
            
            $reservation =[
                "name" => $_SESSION['reservations'][$id]['name'] ,
                "nbPersonne"=>$_SESSION['reservations'][$id]['nbPersonne'] ,
                "jour"=>$jour,
                "heure"=>$heure,
                "creneau"=>$creneau,
                "email"=>$_SESSION['reservations'][$id]['email'],
                "message"=>$_SESSION['reservations'][$id]['message']];

        $_SESSION['reservations'][$id]=$reservation;
        }
        header("Location:panier.php");
        

    }

    break;

    case "effacerReservations";
        unset($_SESSION['reservations']);
        header("Location:panier.php");
    break;

    case "supprimerUneReservation":
        unset($_SESSION["reservations"][$index]);
        header("Location:panier.php");
 
    break;

    case "upNbPersonne";
        $_SESSION['reservations'][$id]['nbPersonne']++  ;
        header("Location:panier.php");
        break;

    case "downNbPersonne";
        $_SESSION['reservations'][$id]['nbPersonne']--;
        if($_SESSION['reservations'][$id]['nbPersonne']==0){
            unset($_SESSION['reservations'][$id]);
        }
        header("Location:panier.php");
    break;

    case "creerMenu";
    if(isset($_POST['submit'])){
            
        $nom = filter_input(INPUT_POST, "nom", FILTER_SANITIZE_SPECIAL_CHARS);
        $description = filter_input(INPUT_POST, "description", FILTER_SANITIZE_SPECIAL_CHARS);
        $image = filter_input(INPUT_POST, "image", FILTER_SANITIZE_SPECIAL_CHARS);
    }
        
        insertMenu($pdo,$nom,$description,$image);
        header("Location:admin.php");
    break;
}
