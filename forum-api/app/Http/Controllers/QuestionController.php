<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\User;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\CursorPaginator
     */
    public function index()
    {
        return Question::query()
            ->select('questions.*' , 'users.profile_image', 'users.name')
            ->join('users' , 'users.id' , 'questions.user_id')
            ->orderBy('questions.id', 'desc')
            ->cursorPaginate(10);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return(Question::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response(Question::findOrFail($id));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $question =  Question::find($id);
        return response(Question::update($request->all()));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return response(Question::destroy($id));
    }

    /**
     * Get Questions by the user_id foreign key
     *
     *@param int $userId
     */

    public function getByUserId($userId){
        $questions = User::find($userId)->questions;
        return response($questions);
    }

    /**
     * Get Questions by their category_id foreign key
     *
     * @param $categoryId
     * @return mixed
     */

    public function getByCategoryId($categoryId) {

        return Question::query()
            ->select('questions.*' , 'users.profile_image', 'users.name')
            ->join('users' , 'users.id' , 'questions.user_id')
            ->where('category_id','=', $categoryId)
            ->orderBy('questions.id', 'desc')
            ->cursorPaginate(10);
    }
}
