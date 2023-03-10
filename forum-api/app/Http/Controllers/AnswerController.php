<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use App\Models\User;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return Answer::query()
            ->select('answers.*, user.name, user.profile_image')
            ->join('users' , 'users.id' , 'answers.user_id')
            ->orderBy('questions.id', 'desc')
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Answer::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Answer::findOrFail($id);
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
        $answer = Answer::find($id);
        return response(answer::update($request->all()));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return response(Answer::destroy($id));
    }

    public function getByUserId($userId){
        return User::find($userId)->answers;
    }

    public function getByQuestionId($questionId){
        return Answer::query()
            ->select('answers.*' , 'users.profile_image', 'users.name')
            ->join('users' , 'users.id' , 'answers.user_id')
            ->where('question_id','=', $questionId)
            ->orderBy('answers.id', 'desc')
            ->get();

    }
}
