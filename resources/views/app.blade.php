<!DOCTYPE html>
<html lang="{{str_replace ('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=divice-width, initail-scale=1">
    <meta name="csrf-token" value="{{csrf_token()}}">
    <title>Laravel + Vue Reto Final</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    <link href="{{mix('css/app.css') }}" type="stylesheet"/>

</head>
<body>
    <div id="app">

    </div>
    <script src="{{mix('js/app.js') }}" type="text /javascript"></script>

</body>
</html>