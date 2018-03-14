<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/ping', function () {
    $str = 'agdhga';
    $arr = str_split($str);

    $is = true;

    foreach ($arr as $key => $symbol){

        $index = $key+1;

        if($key == $index){
            break;
        }

        if($symbol != $arr[count($arr)-$index]){
            $is = false;
            break;
        }
    }

    var_dump($is);
});
