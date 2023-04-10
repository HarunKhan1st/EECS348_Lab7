<!DOCTYPE html>
<html>
<head>
	<title>Constructed Multiplication Table</title>
	<style>
		table, th, td {
			border: 3px solid black;
			padding: 10px;
		}
	</style>
</head>
<body>
	<form method="post">
		<label for="num">Enter a number:</label>
		<input type="number" name="num" id="num">
		<input type="submit" value="Create Table">
	</form>
    <?php
        include("main.php");
    ?>
</body>
</html>
