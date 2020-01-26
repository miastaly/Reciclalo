<?php

require_once '../bootstrap.php';



use Illuminate\Database\Capsule\Manager as DB;
// dump($_SERVER, $_POST);
// $dd = DB::table('visitas')->select()->get();

// print_r($dd);

// if (!empty($_SERVER['HTTP_CLIENT_IP']))
// echo $_SERVER['HTTP_CLIENT_IP'];
// echo '<br>';

// if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
// echo $_SERVER['HTTP_X_FORWARDED_FOR'];
// echo '<br>';

// echo $_SERVER['REMOTE_ADDR'];
// echo '<br>';
$data = json_decode(file_get_contents('php://input'), true);
dd($data);
$res = DB::table('visitas')->insert([
    'ip' => $_SERVER['REMOTE_ADDR'],
    'browser' => $_SERVER['HTTP_USER_AGENT'],
    'fecha' => date("Y-m-d H:i:s")
]);
echo json_encode(['res' => $res]);
// HTTP_USER_AGENT

// HTTP_REFERER  solo si existe
