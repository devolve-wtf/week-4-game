var selectedPlayer = '';

$(document).ready(function() {

	selectHero();

});

function selectHero() {

	$('.select-hero').click(function() {
		var player = $(this).clone();
		$('#Hero').html(player);
		$('.select-hero').off('click');
		$(this).removeClass('select-hero');
		$(this).remove();
		$('.select-hero').addClass('select-enemy').removeClass('select-hero');
		//$('#Players').append(selectedPlayer);
		//selectedPlayer = player;
		//console.log(selectedPlayer);

	});

}