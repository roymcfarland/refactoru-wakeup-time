$(document).on('ready', function() {



/////////////////////////////////////
/////////// FLUX CAPACITOR //////////
/////////////////////////////////////
	
var updateTime = function() {	
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	
	// Convert hours from military time
	// to "normal" time
	var convertedHour = function(h) {
		if(h >= 13) {
			return h - 12;
		} else {
			return h;
		};
	};
	var realHour = convertedHour(hour);

	// Combine converted hours and realtime minutes
	// to the face of the clock
	currentTime.text(realHour + ':' + minutes);
	};



/////////////////////////////////////
////////// DOM CREATION /////////////
/////////////////////////////////////

	var outerShell = '<div class="outerShell"></div>';
	var innerShell = '<div class="innerShell"></div>';
	var labels = '<div class="labels">PM<br><br><br><br><br>AUTO</div>';
	var clockFace = '<div class="clockFace"></div>';
	var currentTime = $('<div class="currentTime"></div>');
	var amRadio = '<ul class="amRadio"><li>AM</li><li>53</li><li>60</li><li>70</li><li>90</li><li>110</li><li>140</li><li>170</li><span>x10</span><li>KHz</li></ul>';
	var fmRadio = '<ul class="fmRadio"><li>FM</li><li>89</li><li>92</li><li>95</li><li>102</li><li>106</li><li>108</li><li>MHz</li></ul>';

	$('.container').append(outerShell);
	$('.outerShell').append(innerShell);
	$('.innerShell').append(labels);
	$('.innerShell').append(clockFace);
	$('.clockFace').append(currentTime);
	$('.innerShell').append(amRadio);
	$('.innerShell').append(fmRadio);

// Make the clock actually run in realtime
setInterval(updateTime, 1000);
});