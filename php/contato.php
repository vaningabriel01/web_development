<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $mensage = $_POST["mensage"];
        
        // Aqui você pode processar os dados, como enviar um email ou salvar em um banco de dados
        echo "Obrigado por entrar em contato, $name! Sua mensagem foi recebida.";
    }