// var selectedPlayer = '';

// $(document).ready(function() {

// 	selectHero();

// });

// function selectHero() {

// 	$('.select-hero').click(function() {
// 		var player = $(this).clone();
// 		player.removeClass('select-hero');
// 		$('#Hero').html(player);
// 		$('.select-hero').off('click');
// 		$(this).removeClass('select-hero');
// 		$(this).remove();
// 		$('.select-hero').addClass('select-enemy').removeClass('select-hero');
// 		//$('#Players').append(selectedPlayer);
// 		//selectedPlayer = player;
// 		//console.log(selectedPlayer);

// 	});

// }

function handlePlayerClick() {

	if($('#hero').html() == false) {
		$('#hero').html($(this).clone().addClass('active-hero'));
		$(this).remove();
	} else if ($('#enemy').html() == false) {
		$('#enemy').html($(this).clone().addClass('active-enemy'));
		$(this).remove();
	}

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

function attackClick() {
	var enemyHP = parseInt($('.active-enemy .hp').attr('data-hp'));
	var heroHP = parseInt($('.active-hero .hp').attr('data-hp'));
	var enemyAttack = parseInt($('.active-enemy').attr('data-attack'));
	var heroAttack = parseInt($('.active-hero').attr('data-attack'));

	$('.active-enemy .hp').text(enemyHP - heroAttack);
	$('.active-enemy .hp').attr('data-hp', enemyHP - heroAttack);

	setTimeout( function () {
		$('.active-hero .hp').text(heroHP - enemyAttack);
		$('.active-hero .hp').attr('data-hp', heroHP - enemyAttack);
	}, 500);


}

$(document).ready(function() {
	healthPoints();
	attackPoints();
	$('.select-player').click(handlePlayerClick);
	$('#attack-button').click(attackClick);

});