<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/user/{id}', [UserController::class, 'show']);
Route::middleware('auth:sanctum')->put('/user/{id}', [UserController::class, 'update']);


Route::middleware('auth:sanctum')->resource('questions', QuestionController::class);

Route::prefix('questions')->group(function () {
    Route::get('/user/{userId}', [QuestionController::class, 'getByUserId']);
    Route::get('/category/{categoryId}', [QuestionController::class, 'getByCategoryId']);
});

Route::resource('categories', CategoryController::class);

Route::resource('answer', AnswerController::class);
Route::prefix('answer')->group(function () {
    Route::get('/user/{userId}', [AnswerController::class, 'getByUserId']);
    Route::get('/question/{questionId}', [AnswerController::class, 'getByQuestionId']);
});


