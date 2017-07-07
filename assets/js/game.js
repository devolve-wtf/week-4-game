function playerNames(array) {

	var i = 0;
	$('.player h2').each(function(){
		$(this).attr('data-name', array[i]);
		$(this).text($(this).attr('data-name'));
		i++;
	});

}

function healthPoints() {
	
	$('.hp').each(function(){
		var randomHP = (Math.floor(Math.random() * 100) + 100);
		$(this).text(randomHP + ' hp');
		$(this).attr('data-hp', randomHP);
	});

}

function attackPoints() {

	$('.player').each(function(){
		$(this).attr('data-attack', Math.floor(Math.random() * 25) + 25);
	});

}

function handlePlayerClick() {

	if($('#hero').html() == false) {
		$('#hero').html($(this).clone().addClass('active-hero'));
		$(this).remove();
	} else if ($('#enemy').html() == false) {
		$('#enemy').html($(this).clone().addClass('active-enemy'));
		$(this).remove();
	}

}

function attackClick() {

	var enemyHP = parseInt($('.active-enemy .hp').attr('data-hp'));
	var heroHP = parseInt($('.active-hero .hp').attr('data-hp'));
	var enemyAttack = parseInt($('.active-enemy').attr('data-attack'));
	var heroAttack = parseInt($('.active-hero').attr('data-attack'));

	$('.active-enemy .hp').text((enemyHP - heroAttack) + ' hp');
	$('.active-enemy .hp').attr('data-hp', enemyHP - heroAttack);
	$('.hero-message').text(
		$('.active-hero h2').attr('data-name') + 
		' attacked ' + 
		$('.active-enemy h2').attr('data-name') + 
		' and reduced their health by ' + 
		heroAttack + 
		' points!'
	);

	setTimeout( function () {
		$('.active-hero .hp').text((heroHP - enemyAttack) + ' hp');
		$('.active-hero .hp').attr('data-hp', heroHP - enemyAttack);
		$('.enemy-message').text(
			$('.active-enemy h2').attr('data-name') + 
			' attacked ' + 
			$('.active-hero h2').attr('data-name') + 
			' and reduced their health by ' + 
			enemyAttack + 
			' points!'
		);
	}, 500);

}


$(document).ready(function() {

	playerNames(['synaptic', 'merc', 'warfighter', 'phantom']);
	healthPoints();
	attackPoints();
	$('.select-player').click(handlePlayerClick);
	$('#attack-button').click(attackClick);

});