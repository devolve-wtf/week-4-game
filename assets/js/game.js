var selectedPlayer = '';

$(document).ready(function() {

	selectHero();

});

function selectHero() {

	$('.select-hero').click(function() {
		var player = $(this).clone();
		$('#Hero').html(player);
		$(this).removeClass('select-hero');
		$(this).remove();
		$('.select-hero').addClass('select-enemy').removeClass('select-hero');
		//$('#Players').append(selectedPlayer);
		//selectedPlayer = player;
		//console.log(selectedPlayer);
		$('.select-hero').unbind('click');
	});

}