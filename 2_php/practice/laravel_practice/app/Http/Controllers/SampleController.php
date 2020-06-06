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
        $player = Player::find(1);

        return view('select_player', [
            "player" => $player
        ]);
    }
}
