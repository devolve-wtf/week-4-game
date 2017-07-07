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
		$(this).text(Math.floor(Math.random() * 200) + ' hp');
	});

}

function attackPoints() {

	$('.player').each(function(){
		$(this).attr('data-attack', Math.floor(Math.random() * 75));
	});
}

$(document).ready(function() {
	healthPoints();
	attackPoints();
	$('.select-player').click(handlePlayerClick);
	$('#attack-button').click()

});