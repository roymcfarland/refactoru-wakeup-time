$(document).on('ready', function() {



/////////////////////////////////////
//////////// VARIABLES //////////////
/////////////////////////////////////

	// Extracting the current time
	
var currentTime = function() {	
	var date = new Date();
	var hour = date.getHours();
	// var convertedHour = function(h) {
	// 	if(h > 12) {
	// 		return h - 12;
	// 	};
	// };
	// var realHour = convertedHour(hour);
	var minutes = date.getMinutes();
	// var realTime = realHour + ':' + minutes;
	// var time = '<p class="time"></p>'
	currentTime.text(hour + ':' + minutes);
	};



/////////////////////////////////////
////////// DOM CREATION /////////////
/////////////////////////////////////

	var outerShell = '<div class="outerShell"></div>';
	var innerShell = '<div class="innerShell"></div>';
	var labels = '<div class="labels">PM<br><br><br><br><br>AUTO</div>';
	var clockFace = '<div class="clockFace"></div>';
	var currentTime = '<p class="time"></p>';
	var amRadio = '<ul class="amRadio"><li>AM</li><li>53</li><li>60</li><li>70</li><li>90</li><li>110</li><li>140</li><li>170</li><span>x10</span><li>KHz</li></ul>';
	var fmRadio = '<ul class="fmRadio"><li>FM</li><li>89</li><li>92</li><li>95</li><li>102</li><li>106</li><li>108</li><li>MHz</ul>';

	$('.container').append(outerShell);
	$('.outerShell').append(innerShell);
	$('.innerShell').append(labels);
	$('.innerShell').append(clockFace);
	$('.clockFace').append(currentTime);
	$('.innerShell').append(amRadio);
	$('.innerShell').append(fmRadio);

setInterval(currentTime, 1000);

});