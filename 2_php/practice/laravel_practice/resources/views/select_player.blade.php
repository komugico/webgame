<h1>Hello, MySQL</h1>

<table border="1">
    <tr>
        <th>id</th>
        <th>rating</th>
        <th>user_id</th>
    </tr>
    <tr>
        <td>{{$player->id}}</td>
        <td>{{$player->rating}}</td>
        <td>{{$player->user_id}}</td>
    </tr>
</table>