<?php

require "vendor/autoload.php";
//Importamos el archivo autoload.php presente en nuestro directorio vendor require 'vendor/autoload.php';
//Después importamos la clase Capsule escribiendo su ruta completa incluyendo el namespace
use Illuminate\Database\Capsule\Manager as Capsule;
//Creamos un nuevo objeto de tipo Capsule
$capsule = new Capsule;
//Indicamos en el siguiente array los datos de configuración de la BD
$capsule->addConnection([
 'driver' =>'mysql',
 'host' => 'localhost',
 'database' => 'reciclalo',
 'username' => 'root',
 'password' => '',
 'charset' => 'utf8',
 'collation' => 'utf8_general_ci',
 'prefix' => '',
]);
$capsule->setAsGlobal();
//Y finalmente, iniciamos Eloquent
$capsule->bootEloquent();
?>