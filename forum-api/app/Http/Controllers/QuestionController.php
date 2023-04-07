<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return
     */
    public function index()
    {
        $data = Question::query()
            ->with(['user', 'category'])->cursorPaginate(10);

        $count = Question::query()
            ->count();

        $collection = collect(['count' => $count]);
        return response($collection->merge($data));
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
     */
    public function show($id)
    {
        return Question::query()
            ->with('user')
            ->find($id);

    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $questionId)
    {
        $question =  Question::find($questionId);
        if($request->user()->id != $question->user_id){
            abort(401, "You are not the Owner of this Question");
        }
        return response($question->update($request->all()));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

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

        $data = Question::query()
            ->with(['user', 'category'])
            ->where("category_id", "=", $categoryId)
            ->cursorPaginate(10);

        $count = Question::query()
            ->where("category_id", "=", $categoryId)
            ->count();

        $collection = collect(['count' => $count]);
        return response($collection->merge($data));

    }

    public function getByTitle($partial){

        $data =  Question::query()
            ->with(['user', 'category'])
            ->where('questions.title','like', '%'.$partial.'%')
            ->cursorPaginate(10);

        $count = Question::query()
            ->where('questions.title','like', '%'.$partial.'%')
            ->count();

        $collection = collect(['count' => $count]);
        return response($collection->merge($data));
    }

    public function destroy(Request $request, $questionId){
        $question = Question::findOrFail($questionId);
        if($request->user()->id != $question->user_id){
            abort(401, "You are not the Owner of this Question");
        }

        return $question->delete();
    }
}
