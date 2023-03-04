<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index(){

        return User::query()
            ->select('users.name', 'users.profile_image')
            ->limit(20)
            ->get();
    }
    public function show($id){
        return User::findOrFail($id);
    }

    public function update(Request $request, $id){
        return $user = User::findOrFail($id)->update($request->all());

    }
}
