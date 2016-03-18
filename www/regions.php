<?php
// content type JSON :
header('Content-type: application/json; charset=utf-8');
//sleep(2);

echo '{"regions": [
		{ "id":"fc", "nom":"Franche Comte" },
		{ "id":"idf", "nom":"Ile de France" },
		{ "id":"paca", "nom":"Provence Alpes Côte d\'azur" },
		{ "id":"bretagne", "nom":"Bretagne" },
		{ "id":"bourgogne", "nom":"Bourgogne" }
	]}';

?>