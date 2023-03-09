<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $data = $request->all();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        if(!$user){
            return response()->json(['message' => 'An error has occurred'], 400);
        }
        return response()->json(['message' => 'Successfully created user!'], 201);
    }

    public function login(Request $request)
    {
        //validate the request
        $validation = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        //attempt to login
        if (!auth()->attempt($validation)) {
            return response()->json(['message' => 'Invalid Credentials'], 401);
        }

        //return the response
        return $request->user();
    }

}
