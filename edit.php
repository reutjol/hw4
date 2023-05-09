<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
	<title>PHP Page</title>
	<link rel="stylesheet" href="styles.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form 2</title>
</head>
<body>

<?php
if ($_GET["Planet"] == "1" && $_GET["size"] == "1") {
  echo "Not available Moon in size 20";
  return;
}

if ($_GET["Planet"] == "3" && $_GET["size"] == "2") {
  echo "Not available Mars in size 30";
  return;
}

if ($_GET["Planet"] == "5" && $_GET["size"] == "1") {
  echo "Not available Jupiter in size 30";
  return;
}

echo "Planet:";
echo $_GET['Planet'];
echo '<br>';
echo "size:";
echo $_GET['size'];
echo '<br>';
echo "gift";
echo $_GET['gift'];
?>

<h2><?php echo "Congratulations!"; ?></h2>
</body>
</html>