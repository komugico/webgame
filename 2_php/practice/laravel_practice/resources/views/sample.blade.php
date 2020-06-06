<!DOCTYPE html>
<html lang="ja">
<head>
</head>
<body>
<h1>Hello, Laravel!!</h1>

<table border="1">
    <tr>
        <th>フルーツ名</th>
        <th>価格</th>
    </tr>
    @foreach($fruit_list as $fruit)
    <tr>
        <td>{{$fruit["name"]}}</td>
        <td>{{$fruit["price"]}}</td>
    </tr>
    @endforeach
</table>

<p>合計: {{$total}}

<script src="{{ asset('/js/sample.js') }}"></script>

</body>
</html>