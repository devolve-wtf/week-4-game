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


$(document).ready(function() {


	$('.select-player').click(function(){

		if($('#hero').html() == false) {
			$('#hero').html($(this).clone().addClass('active-hero'));
			$(this).remove();
		} else if ($('#enemy').html() == false) {
			$('#enemy').html($(this).clone().addClass('active-enemy'));
			$(this).remove();
		}


	});


});