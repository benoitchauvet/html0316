<?php

sleep(4);

header('Content-type: application/json; charset=utf-8');

$region = $_GET["region"];

switch ($region) {
    case "idf":
        echo '{"departements": [
		{ "id":"94", "nom":"Val de Marne" },
		{ "id":"92", "nom":"Hauts de Seine" },
		{ "id":"93", "nom":"Seine saint denis" },
		{ "id":"75", "nom":"Paris" },
		{ "id":"91", "nom":"Essonne" },
		{ "id":"95", "nom":"Val d\'Oise" }
		]}';
        break;
    case "fc":
		echo '{"departements": [
		{ "id":"39", "nom":"Jura" },
		{ "id":"25", "nom":"Doubs" },
		{ "id":"70", "nom":"Haute Saône" },
		{ "id":"90", "nom":"Territoire de Belfort" }
		]}';        
		break;
    case "paca":
		echo '{"departements": [
		{ "id":"13", "nom":"Bouches du Rhône" },
		{ "id":"04", "nom":"Alpes de Haute Provence" },
		{ "id":"05", "nom":"Hautes Alpes" },
		{ "id":"06", "nom":"Alpes Maritimes" },
		{ "id":"83", "nom":"Var" },
		{ "id":"84", "nom":"Vaucluse" }
		]}';
        break;
	case "bretagne":
		echo '{"departements": [
		{ "id":"29", "nom":"Finistère" },
		{ "id":"22", "nom":"Côtes d\'Armor" },
		{ "id":"35", "nom":"Ille et Vilaine" },
		{ "id":"56", "nom":"Morbihan" }
		]}';
		break;
	default:
		echo '{"departements": [
		{ "id":"0", "nom":"pas de departement" }
		]}';
		break;
}
?>