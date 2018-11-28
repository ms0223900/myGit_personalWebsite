<?php

    $db = 'mysql:host=localhost;port=3306;dbname=cd103g3;charset=utf8';
    $user = 'root';
    $ps = 'ddec8887';
    $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($db, $user,$ps, $options);

    // echo 'connect successful';
?>