<?php
    // $reportQty = $_REQUEST["report_Qty"];
    $reportNo = $_REQUEST["orderNo"];
    $status = $_REQUEST["memOrderstatus"];
    try{
        require_once("../connectMember.php");

        // $sql = "update messagereport set report_Qty = :report_Qty where message_No=$messageNo";
        $sql = "UPDATE `memberorder` set `memOrder_status` = '$status' WHERE `memOrder_No` = $reportNo"; //更新該檢舉的留言資料
        $sentmsgreport = $pdo->prepare($sql);
        $sentmsgreport->execute();
    }
    catch(PDOException $e){
        echo"錯誤原因",$e->getMessage(),"<br>";
        echo"錯誤行列",$e->getLine(),"<br>";
    };
?>