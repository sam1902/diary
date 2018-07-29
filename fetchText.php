<?php
try{
	$pdo = new \PDO("sqlite:saves/journal.db");
	$stmt = $pdo->prepare("SELECT * FROM entries");
	$stmt->execute();
	$result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
	echo json_encode($result);
} catch (\PDOException $e) {
	echo $e;
	return;
}
