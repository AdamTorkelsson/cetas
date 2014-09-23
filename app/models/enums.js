/**
 * New node file
 */
"use strict";

var Enum = require('enum');

var yesOrNo = new Enum({
	'yes' : 'Yes',
	'no' : 'No'
});

var pain = new Enum({
	'1' : 'Ingen sm�rta',
	'2' : 'Neutral',
	'3' : 'V�rsta t�nkbara'
});

var nausea = new Enum({
	'1' : 'Inget',
	'2' : 'Netrul',
	'3' : 'Flertal kr�kningar'
});

var narcosis = new Enum({
	'1' : 'Inte alls p� verkad',
	'2' : 'Neutral',
	'3' : 'Kraftigt p�verkad'
});