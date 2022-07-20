<?php

function fiscalYear($date) {
   // วันที่ที่ต้องการตรวจสอบ
   list($year, $month, $day) = explode("-", $date);
   // วันที่ที่ส่งมา (mktime)
   $cday = mktime(0, 0, 0, $month, $day, $year);
   // ปีงบประมาณตามค่าที่ส่งมา (mktime)
   $d1 = mktime(0, 0, 0, 10, 1, $year);
   // ปีใหม่
   $d2 = mktime(0, 0, 0, 1, 1, $year + 1);
   if ($cday >= $d1 && $cday < $d2) {
     // 1 ตค. - 31 ธค.
     $year++;
   }
   return $year;
}

function datediff($date1,$date2){//2019-10-29
    $d1 = strtotime($date1);
    $d2 = strtotime($date2);
    $diff = abs($d2 - $d1);
    $years = floor($diff / (365*60*60*24));
    $months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));
    $days = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24)/ (60*60*24));
    return [$years,$months,$days];
}
function DateThai1($strDate){
        $strYear = date("Y",strtotime($strDate))+543;
        $strMonth= date("n",strtotime($strDate));
        $strDay= date("j",strtotime($strDate));
        /*
        $strHour= date("H",strtotime($strDate));
        $strMinute= date("i",strtotime($strDate));
        $strSeconds= date("s",strtotime($strDate));
        */
        $strMonthCut = Array("","ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.");
        $strMonthThai=$strMonthCut[$strMonth];
        return "$strDay $strMonthThai $strYear";//, $strHour:$strMinute";
}