var Clock = {
	updateClock: function() {
		var now = new Date();
		document.getElementById('dec_hours').innerText = ((now.getHours()<10)?'0':'') + now.getHours();
		document.getElementById('dec_minutes').innerText = ((now.getMinutes()<10)?'0':'') + now.getMinutes();
		document.getElementById('dec_seconds').innerText = ((now.getSeconds()<10)?'0':'')  + now.getSeconds();
		
		var hex_hours = parseInt((now.getHours()*255)/24);
		var hex_minutes = parseInt((now.getMinutes()*255)/60);
		var hex_seconds = parseInt((now.getSeconds()*255)/60);
		
		document.getElementById('hex_hours').innerText = ((hex_hours.toString(16).length == 1)?'0':'') + hex_hours.toString(16);
		document.getElementById('hex_minutes').innerText = ((hex_minutes.toString(16).length == 1)?'0':'') + hex_minutes.toString(16);
		document.getElementById('hex_seconds').innerText = ((hex_seconds.toString(16).length == 1)?'0':'') + hex_seconds.toString(16);
		
		document.getElementById('body').style.backgroundColor = 'rgb(' + hex_hours + ',' + hex_minutes + ',' + hex_seconds + ')';
	},
	switchToDec: function (){
		document.getElementById('hex').className = 'clock hidden';
		document.getElementById('dec').className = 'clock';
		document.getElementById('to_dec').className = 'selected';
		document.getElementById('to_hex').className = '';
	},
	switchToHex: function (){
		document.getElementById('dec').className = 'clock hidden';
		document.getElementById('hex').className = 'clock';
		document.getElementById('to_hex').className = 'selected';
		document.getElementById('to_dec').className = '';
	},
	init: function() {
		setInterval(Clock.updateClock,1000);
		
		if (document.addEventListener){
			document.addEventListener('DOMContentLoaded', function() {
			  document.getElementById('to_dec').addEventListener('click', Clock.switchToDec, false); 
			  document.getElementById('to_hex').addEventListener('click', Clock.switchToHex, false); 
			},false);
		} else if (document.attachEvent){
		  document.getElementById('to_dec').attachEvent('onclick', Clock.switchToDec);
		  document.getElementById('to_hex').attachEvent('onclick', Clock.switchToHex);
		}
	}	
}

Clock.init();

