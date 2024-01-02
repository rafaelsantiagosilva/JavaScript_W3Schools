<!DOCTYPE html>
<html lang="pt-br">

<head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>JSON Server</title>
</head>

<body>
     <h1>JSON Server</h1>
     <h2>Página PHP</h2>
     <?php
     echo "<p id='objectPHP'>".$_REQUEST['x']."</p>";
     ?>
     <button onclick="window.history.back()">Voltar para a página HTML</button>
</body>

<script src="./04_JsonServer.js"></script>

</html>