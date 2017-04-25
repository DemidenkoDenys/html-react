<?php
	include('db_function.php');
	$tags = get_data('SELECT tag.*, spec.name AS sname FROM tag, spec WHERE tag.spec = spec.id ORDER BY tag.id');
	echo $json = json_encode($tags);
?>