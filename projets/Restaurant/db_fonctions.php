<?php


// ----------------CONNECTION DB---------------------
function connection(){
    global $pdo;
    $pdo = new PDO(
        'mysql:host=127.0.0.1;dbname=db_restaurant;charset=utf8',
        'root',
        '',
        [\PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
        \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
        \PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8']
    );
}
connection();

// ----------------AFFICHER TOUT ---------------------
function findAllMenus($pdo){
    $sqlQuery = $pdo->prepare("SELECT * FROM menu");                
    $sqlQuery->execute();
    global $menus;
    $menus = $sqlQuery->fetchAll();    
}
// findAllMenus($pdo);

function findAllReservations($pdo){
    $sqlQuery = $pdo->prepare("SELECT * FROM reservation");                
    $sqlQuery->execute();
    global $reservations;
    $reservations = $sqlQuery->fetchAll();    
}
// findAllReservations($pdo);


// ----------------AFFICHER ELEMENT POSSEDANT ID SPECIFIQUE ---------------------
function findMenuById($pdo,$id){
    $sqlQuery = $pdo->prepare("SELECT * FROM menu WHERE id_menu = :id");
    $sqlQuery->bindValue(":id", $id);
    $sqlQuery->execute();
    global $menu;
    $menu = $sqlQuery->fetch();      
}
// findMenuById($pdo,$id=2);

function findReservationById($pdo,$id){
    $sqlQuery = $pdo->prepare("SELECT * FROM reservation WHERE id_reservation = :id");
    $sqlQuery->bindValue(":id", $id);
    $sqlQuery->execute();
    global $reservation;
    $reservation = $sqlQuery->fetch();      
}
// findReservationById($pdo,$id=2);

function findJourById($pdo,$id){
    $sqlQuery = $pdo->prepare("SELECT * FROM jour WHERE id_jour = :id");
    $sqlQuery->bindValue(":id", $id);
    $sqlQuery->execute();
    global $jour;
    $jour = $sqlQuery->fetch();      
}
// findJourById($pdo,$id=2);



// ----------------INSERER ELEMENT DANS DB ---------------------
    function insertMenu($pdo,$nom,$description,$image){
        $sqlQuery = $pdo->prepare("INSERT INTO menu (nom, description,image)
                                    VALUES ('$nom', '$description','$image')");
        $sqlQuery->execute();
    }
    // insertMenu($pdo,$nom="abricot",$description="un lot de 4 abricots");
    function insertReservation($pdo,$nomPrenom,$nbPersonne,$jour,$heure,$creneau,$email,$message){
        $sqlQuery = $pdo->prepare("INSERT INTO reservation (nom_prenom,nbpersonnes,id_jour,heure,creneau,email,message)
                                    VALUES ('$nomPrenom', '$nbPersonne','$jour','$heure','$creneau','$email','$message')");
        $sqlQuery->execute();
    }
    // insertReservation($pdo,$nom="abricot",$description="un lot de 4 abricots");
?>