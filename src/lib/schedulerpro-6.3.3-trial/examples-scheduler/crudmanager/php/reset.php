<?php

use Bryntum\Util\ScriptEditor;

$dir = dirname($_SERVER['SCRIPT_FILENAME']);

// initialize application
require_once './init.php';

$sql = file_get_contents(dirname($dir) . '/sql/setup.sql');

// get "data" region
$sql = ScriptEditor::getTextRegion($sql, 'data') or die('Cannot find data region');

// get "options" region
$optionsSql = ScriptEditor::getTextRegion($sql, 'options') or die('Cannot find options region');

// remove all insertions
$sql = ScriptEditor::replaceTextRegion($sql, 'insertions');

// execute database reset script plus options insertion
$app->db->exec("$sql\n$optionsSql");
