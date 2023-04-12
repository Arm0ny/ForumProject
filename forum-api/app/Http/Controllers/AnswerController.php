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
            ->with('user')
            ->orderBy('id', 'desc')
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
    public function update(Request $request, $answerId)
    {
        $answer =  Answer::find($answerId);
        if($request->user()->id != $answer->user_id){
            abort(401, "You are not the Owner of this Answer");
        }
        return response($answer->update($request->all()));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $answerId)
    {
        $answer = Answer::findOrFail($answerId);
        if ($request->user()->id != $answer->user_id) {
            abort(401, "You are not the Owner of this Answer");
        }

        return $answer->delete();
            }

    public function getByUserId($userId){
        return User::find($userId)->answers;
    }

    public function getByQuestionId($questionId){
        return Answer::query()
            ->with(['user'])
            ->where('question_id', '=', $questionId)
            ->orderBy('id', 'desc')
            ->get();

    }
}
