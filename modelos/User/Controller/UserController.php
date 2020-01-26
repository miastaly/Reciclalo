<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
function getRealIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP']))
        return $_SERVER['HTTP_CLIENT_IP'];
       
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
   
    return $_SERVER['REMOTE_ADDR'];
}
$Usr_Navegador='';
$Usr_Procedencia='';
$Usr_Fecha='';
if (isset($_POST['Usr_Navegador'])) {
    $Usr_Navegador=$_POST['Usr_Navegador'];
    if (!empty($_POST['Usr_Procedencia'])) {
        $Usr_Procedencia = $_POST['Usr_Procedencia'];
    }
    $Usr_Fecha=$_POST['Usr_Fecha'];
}else {
    $navegador='no se encontro su navegador';
}
DB::table('users')->insert(
    ['Usr_Navegador' => $navegador, 'Usr_Fecha' => $Usr_Fecha,'Usr_Procedencia' => $Usr_Procedencia,'Usr_Ip' => getRealIP()]
);
   /*public function gestion_users(Request $request){
       $Usr_Model=new User();
       $Usr_Model->Usr_Ip=getRealIP();
       $Usr_Model->Usr_Navegador=$request->Usr_Navegador;
       $Usr_Model->Usr_Fecha=$request->Usr_Fecha;
       $Usr_Model->Usr_Procedencia=$request->Usr_Procedencia;
       $Usr_Model->save();
       var_dump($Usr_Model);
       echo json_encode("hola");
   }
   public function getRealIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP']))
        return $_SERVER['HTTP_CLIENT_IP'];
       
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
   
    return $_SERVER['REMOTE_ADDR'];
}*/
?>