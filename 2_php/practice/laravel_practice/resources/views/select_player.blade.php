<h1>Hello, MySQL</h1>

<table border="1">
    <tr>
        <th>id</th>
        <th>username</th>
        <th>rating</th>
    </tr>
    @foreach($players as $player)
    <tr>
        <td>{{$player->id}}</td>
        <td>{{$player->username}}</td>
        <td>{{$player->rating}}</td>
    </tr>
    @endforeach
</table>