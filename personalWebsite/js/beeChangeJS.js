// beeChange JS

$(window).ready(function() {
	var BGtime = setTimeout(changeBG, 6000);
	var recentChange = setTimeout(bulletChange, 6000);
	// setTimeout(changeBG, 6000);
	var a = 1;
	function changeBG() {
		if (a < 2) {
			a++;
		} else {
			a = 1;
		}
		console.log(a);
		$('.indexBanner').css({
			backgroundImage: "url('asset/BG-0"+ a +".jpg')"

		})
		setTimeout(changeBG, 6000);
	}

	$('.playGameFixed h2').click(function() {
		$('.littleGameUI').show();
		$('.closeLittleGameBG').show();
		$('.coinNow span').text(localStorage.beeCoin);	
	});
	$('.playGameFixed').click(function(){
		$(this).addClass('clickIt');
		$('.closeLittleGameBG').show();
		$('.littleGameUI').show();
	})
	$('.closeLittleGameBG').click(function() {
		$('.playGameFixed').removeClass('clickIt');
	})
	// 切換計數器
	var b = 2;
	// 隨時間自動切換
	function bulletChange() {
		if (b < 4) {
			b++;
		} else {
			b = 0;
		}
		$('.justChanged .bullet').removeClass('active');
		document.getElementsByClassName('bullet')[b].classList.add('active');
		changeContent();
		
		setTimeout(bulletChange, 6000);
	}

	// 點擊子彈直接切換
	$('.justChanged .bullet').click(function() {
		$('.justChanged .bullet').removeClass('active');
		$(this).addClass('active');
		console.log($(this));
		b = $(this).attr('b') * 1;
		console.log(b);
		changeContent();
	}) 

	// 切換其他人正在交換	
	function changeContent() {
		var changeContent = document.getElementsByClassName("change-content");
		// console.log(changeContent.length);
		for (var i = changeContent.length - 1; i >= 0; i--) {
			changeContent[i].style.display = 'none';
		}
		for (var j = b*3 ; j < b*3 + 3; j++) {
			changeContent[j].style.display = 'block';
		}
	}

	// 商品詳細頁面的大圖切換
	$('.otherGamePic .pic').mousemove(function() {
		$('.otherGamePic .pic').removeClass('Now');
		$(this).addClass('Now');
		var pnow = $(this).attr('pNow') * 1 + 1;
		$('.main.pic img').hide();
		$('.main.pic img:nth-child('+ pnow + ')').show();
	})





})