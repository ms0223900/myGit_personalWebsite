<?php
ob_start();
session_start();
try{
  require_once("../connectMember.php");
  $sql = "UPDATE memberorder
          SET memOrder_status = 'done'
          WHERE memOrder_No = :memOrder_No";

  $member = $pdo->prepare( $sql);
  $member->bindValue(":memOrder_No", substr($_GET["memOrderNo"], 8, -2));
  $member->execute();
  
}catch(PDOException $e){
  echo $e->getMessage();
}
?>