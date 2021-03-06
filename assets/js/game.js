const laser = new Audio('assets/sounds/laser.wav');
const damage = new Audio('assets/sounds/damage.wav');
const lose = new Audio('assets/sounds/lose.wav');
const win = new Audio('assets/sounds/win.wav');

class Player {
	constructor(playerName, playerHp, playerImage) {
		this.playerName = playerName;
		this.playerHp = playerHp;
		this.playerImage = playerImage;
	}

	registerPlayer(arr) {
		arr.push({name: this.playerName, hp: this.playerHp, img: this.playerImage})
	}
}

function selectHero() {
	$('.select-hero').click(function() {
		var player = $(this).clone();
		player.removeClass('select-hero col-md-3');
		$('#Hero').html(player);
		$('.select-hero').off('click');
		$(this).removeClass('select-hero');
		$(this).remove();
		$('.select-hero').addClass('select-enemy').removeClass('select-hero');
		$('#Instructions').html('SELECT ENEMY TO BATTLE');
		selectEnemy();
	});
}

function selectEnemy() {
	$('.select-enemy').click(function() {
		$('#WarZone').html('<button onClick="attack()">Attack</button><p id="Messages"><span>Click Attack To Begin</span></p>');
		var player = $(this).clone();
		player.removeClass('select-enemy col-md-3');
		$('#Enemy').html(player);
		$('.select-enemy').off('click');
		$(this).removeClass('select-enemy');
		$(this).remove();
		$('.player').removeClass('select-enemy');
		$('#Instructions').html(' ');
		$('#WarZone button').removeClass('invisible');
	});
}

function buildPlayers(arr) {
	for(var i = 0; i < arr.length; i++) {
		let self = arr[i];
		$('#Players').append('<div id="' + self.name + '" class="player select-hero col-md-3" data="' + i + '" style="background-image:url(' + self.img + ');"><h2>' + self.name + '</h2><div class="hp">' + self.hp + '</div></div>');
	}
}

function attack() {
	if($('#Hero div').hasClass('player') && $('#Enemy div').hasClass('player')) {
		let hero = players[$('#Hero .player').attr('data')];
		let enemy = players[$('#Enemy .player').attr('data')];
		let heroAttack = randomNumber(20,40);
		let enemyAttack = randomNumber(20,40);
		enemy.hp -= heroAttack;
		if(enemy.hp > 0) {
			hero.hp -= enemyAttack;
			$('#Messages span').html(hero.name + ' did <strong class="hero">' + heroAttack + '</strong> damage to ' + enemy.name + ', and ' + enemy.name + ' did <strong class="enemy">' + enemyAttack + '</strong> damage to ' + hero.name);
			if(heroAttack > enemyAttack) {
				laser.play();
				$('strong.hero').addClass('winner');
			}else{
				damage.play();
				$('strong.enemy').addClass('winner');
			}
		}else{
			let earnedHp = randomNumber(70,140);
			hero.hp += earnedHp;
			$('#Players .player').addClass('select-enemy');
			if($('#Players .player').hasClass('select-enemy')) {
				var message = hero.name + ' defeated ' + enemy.name + '<br>' + 'You earned ' + earnedHp + 'hp <br>Select another enemy to continue playing';
				laser.play();
			}else{
				var message = hero.name + ' is the champion!';
				win.play();
			}
			$('#Messages span').html(message);
			$('#WarZone button').addClass('invisible');
			selectEnemy();

		}
		$('#Hero .player .hp').html(hero.hp);
		$('#Enemy .player .hp').html(enemy.hp);
		if(enemy.hp <= 0) {
			$('#' + enemy.name).remove();
		}else if(hero.hp <= 0) {
			$('#' + hero.name).remove();
			lose.play();
			$('#Messages span').html('You have been defeated by the ' + enemy.name);
			$('#WarZone button').html('Play Again');
			$('#WarZone button').click(function() {location.reload()});
		}
	}
}

function randomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

var players = [

];

var synaptic = new Player('Synaptic', randomNumber(100,200), 'assets/images/synaptic.jpg');
synaptic.registerPlayer(players);

var warfighter = new Player('Warfighter', randomNumber(100,200), 'assets/images/warfighter.jpg');
warfighter.registerPlayer(players);

var merc = new Player('Merc', randomNumber(100,200), 'assets/images/merc.jpg');
merc.registerPlayer(players);

var phantom = new Player('Phantom', randomNumber(100,200), 'assets/images/phantom.jpg');
phantom.registerPlayer(players);


$(document).ready(function() {
	buildPlayers(players);
	selectHero();
	$('#Instructions').blink();
});


//Thanks http://www.antiyes.com/jquery-blink/jquery-blink.js !!!
(function($) {
    $.fn.blink = function(options) {
        var defaults = {
            delay: 500
        };
        var options = $.extend(defaults, options);

        return this.each(function() {
            var obj = $(this);
            setInterval(function() {
                if ($(obj).css("visibility") == "visible") {
                    $(obj).css('visibility', 'hidden');
                }
                else {
                    $(obj).css('visibility', 'visible');
                }
            }, options.delay);
        });
    }
}(jQuery)) 