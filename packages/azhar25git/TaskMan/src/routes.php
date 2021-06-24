<?php

use Azhar25git\TaskMan\Controllers\TaskController;
use Illuminate\Support\Facades\Route;


Route::prefix('tm-api')->group(function () {

    Route::group(['middleware' => ['api']], function () {
        Route::resource('task', TaskController::class);
        Route::get('search', [TaskController::class, 'searchAssignable'])->name('search');
    });

});
