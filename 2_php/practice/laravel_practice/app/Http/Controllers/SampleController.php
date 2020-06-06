<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Player;

class SampleController extends Controller
{
    public function index() {
        $fruit_list = [
            ["name" => "apple",  "price" => 100],
            ["name" => "banana", "price" => 300],
            ["name" => "peach",  "price" => 500],
        ];
        
        $total = 0;
        foreach($fruit_list as $fruit) {
            $total += $fruit["price"];
        }

        return view('sample', [
            "fruit_list" => $fruit_list,
            "total" => $total
        ]);
    }

    public function select_player() {
        $players = Player::select()
                          ->join('auth_user', 'othello_player.user_id', '=', 'auth_user.id')
                          ->select('othello_player.id', 'othello_player.rating', 'auth_user.username')
                          ->get();

        return view('select_player', [
            "players" => $players
        ]);
    }
}
