<?php
$newEntry = htmlentities($_POST["textArea"]);
// SQLite version
try{
	$pdo = new \PDO("sqlite:saves/journal.db");
	$sql = 'INSERT INTO entries(text) VALUES(:text)';
	$stmt = $pdo->prepare($sql);
	$stmt->bindValue(':text', $newEntry);
	$stmt->execute();
} catch (Exception $e) {
	echo $e;
	return;
}
