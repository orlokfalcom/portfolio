<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recebe os dados enviados via POST
    $data = json_decode(file_get_contents('php://input'), true);
    $logData = $data['logData'];

    // Escreve os dados em um arquivo log.txt
    $file = 'log.txt';
    file_put_contents($file, $logData, FILE_APPEND | LOCK_EX);

    echo 'Log registrado com sucesso!';
} else {
    echo 'Método inválido.';
}
?>
