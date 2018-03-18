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
    return view('pages.homepage');
});

Route::get('/contact', function () {
    return view('pages.contact');
});

Route::post('/send-email', function ( \Illuminate\Http\Request $request ) {

    $content =json_decode( $request->getContent());

    return response()->json([
        'errorcode' => 0,
        'message' => $content->body->name,
    ]);
});

