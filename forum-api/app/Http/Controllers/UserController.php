<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show($id){
        return User::findOrFail($id);
    }

    public function update(Request $request, $id){
        return $user = User::findOrFail($id)->update($request->all());

    }
}
