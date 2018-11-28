$(window).ready(function() {

	// 確認是否玩遊戲，預設為不玩
	var confirmPlay = 0;
	// 計時器設定變數
	var time;
	// 計次器
	var timer = 1;
	// 經過時間
	var timeofTimer = 30;
	// 開始和暫停
	var control = 0;
	// BEECoin點數
	var coin = 9999;
	// 遊戲一開始產生隨機數字
	var num1 = seqArr(1, 100, 2);
	var num2 = seqArr(101,200, 1);
	var correctNum = num2 - num1;
	// 現在輸入的數字
	var numNow = '';
	// 現在分數
	var score = 0;
	// localStorage.beeCoin = 90;

	// 初始設定時間為01:00
	$('.timeRemaining').text('00:30');
	// 初始設定分數0
	$('.lastScore span').text(0);
	// 初始硬幣數量
	
	// $('.beeCoinNow h3').text('$'+ Number(localStorage.beeCoin));
	// 預設顯示數字
	$('.num1').text('??');
	$('.result').text('??');
	$('.num2').text('??');
	$('.beeCoinNow h3').text('$'+ Number(localStorage.beeCoin));
	(function(){
		console.log(coin);
		if (typeof (Storage) !== "undefined") {
			if (localStorage.beeCoin == undefined ) {
				localStorage.beeCoin = coin;
				console.log(localStorage.beeCoin);
				$('.beeCoinNow h3').text('$'+ Number(localStorage.beeCoin));
			}		
		} else {
			$('.beeCoinNow h3').text('$'+ 999);
			$('.coinNow span').text('1111');
		}
	})();

	function resetIt() {
		$('.startPause').text('Start');
		$('.startPause').addClass('active');
		clearTimeout(time);
		// 變數歸零
		control = 0;
		timeofTimer = 30;
		numNow = '';
		control = 0;
		confirmPlay = 0;
		score = 0;
		
		// 顯示重新設定
		$('.num1').text('??');
		$('.num2').text('??');
		$('.result').text('??');
		$('.scoreNow h2').text(0);
		// 按鈕恢復預設
		$('.startPause').text('Start');
		$('.startPause').addClass('active');
		// 時間重新顯示
		$('.timeRemaining').text('00:30');
		return control;
		return timeofTimer;
		return numNow;
		return control;
		return confirmPlay;
		return score;
	}

	// 從頁面跳轉到小遊戲
	$('.playGameFixed h2').click(function() {
		$('.littleGameUI').show();
		$('.closeLittleGameBG').show();
		$('.coinNow span').text(localStorage.beeCoin);	
	});
	// 關掉小遊戲視窗，從按鈕
	$('.closeLittleGame').click(function() {
		$('.littleGameUI').hide();
		$('.closeLittleGameBG').hide();
		$('.beeCoinNow h3').text('$'+ Number(localStorage.beeCoin));
		$('.playGameFixed').removeClass('clickIt');
		resetIt();
		console.log(score);
	});
	// 關掉小遊戲視窗，從背景
	$('.closeLittleGameBG').click(function() {
		$('.littleGameUI').hide();
		$('.closeLittleGameBG').hide();
		$('.beeCoinNow h3').text('$'+ Number(localStorage.beeCoin));
		resetIt();
		console.log(score);
	});

	// 清空計時器，以及分數歸零
	

	// 按鈕設定開始和暫停		
	$('.startPause').click(function(){		
		if (confirmPlay == true) {	
			$('.coinNow span').text(Number(localStorage.beeCoin));
			$('.startPause').text('Pause');
			$('.num1').text(num1);
			$('.result').text(num2);
			console.log(control);
			if (control == 1) {
				control = 0;
				$('.startPause').text('Start');
				$('.startPause').addClass('active');
				clearTimeout(time);
			} else if( control == 0) {
				control = 1;
				time = setTimeout(runTimer, 1000);
				$('.startPause').text('Pause');
				$('.startPause').removeClass('active');
			}
		} else {
			confirmPlay = confirm('是否要花費 5 BeeCoin來玩小遊戲?');
			// 減掉5元，並存入localStorage
			if (confirmPlay == true) {
				coin -= 5;
				if (typeof (Storage) !== "undefined") {
					localStorage.beeCoin = Number(localStorage.beeCoin) - 5;
					$('.coinNow span').text(Number(localStorage.beeCoin));
				}
				$('.startPause').text('Pause');
				$('.num1').text(num1);
				$('.result').text(num2);
				console.log(control);
				if (control == 1) {
					control = 0;
					$('.startPause').text('Start');
					$('.startPause').addClass('active');
					clearTimeout(time);
				} else if( control == 0) {
					control = 1;
					time = setTimeout(runTimer, 1000);
					$('.startPause').text('Pause');
					$('.startPause').removeClass('active');
				}
			}
		}
	});

	// 清空計時器，以及分數歸零
	// function resetIt() {
	// 	$('.startPause').text('Start');
	// 	$('.startPause').addClass('active');
	// 	clearTimeout(time);
	// 	// 變數歸零
	// 	control = 0;
	// 	timeofTimer = 30;
	// 	numNow = '';
	// 	control = 0;
	// 	confirmPlay = 0;
	// 	// 顯示重新設定
	// 	$('.num1').text('??');
	// 	$('.num2').text('??');
	// 	$('.result').text('??');
	// 	$('.scoreNow h2').text(0);
	// 	// 按鈕恢復預設
	// 	$('.startPause').text('Start');
	// 	$('.startPause').addClass('active');
	// 	// 時間重新顯示
	// 	$('.timeRemaining').text('00:30');
	// }


	// 詢問是否點擊重來
	$('.reset').click(function() {
		$('.num1').text('??');
		// $('.num2').text('??');
		// $('.result').text('??');
		console.log(11111);
		var confirmReset = confirm('你確定要重來嗎?');
		if (confirmReset == true) {
			resetIt();
		}
	});
		
	// 計時顯示
	function runTimer(){
		var timerA = timer % 20;
		timer++;
		// 正向計時
		// timeofTimer = (timeofTimer + 1);

		// 倒數計時
		timeofTimer = (timeofTimer - 1);

		var a2 = timeofTimer.toFixed(0);
		var minute = Math.floor(a2 / 60);
		// 分轉換
		if (minute < 10) {
			minute = '0' + minute;
		}
		// 秒轉換
		var second = a2 % 60;
		if (second < 10) {
			second = '0' + second;
		}

		// console.log(second);
		$('.timeRemaining').text(minute +':'+ second);	

		time = setTimeout(runTimer, 1000);

		// 時間到清空計時器，並產生最後分數
		if (timeofTimer == 0) {
			$('.startPause').text('Start');
			$('.startPause').addClass('active');
			clearTimeout(time);
			// 變數歸零
			control = 0;
			timeofTimer = 30;
			numNow = '';
			control = 0;
			confirmPlay = 0;
			// 顯示重新設定
			$('.num1').text('??');
			$('.num2').text('??');
			$('.result').text('??');
			$('.scoreNow h2').text(0);
			// 按鈕恢復預設
			$('.startPause').text('Start');
			$('.startPause').addClass('active');
			// 時間重新顯示
			$('.timeRemaining').text('00:30');

			// 最後分數加入localStorage儲存
			if (typeof (Storage) !== "undefined") {
				if ((localStorage.beeCoin + score / 100) >= 0) {
					localStorage.beeCoin = Number(localStorage.beeCoin) + score / 100;
					$('.coinNow span').text(Number(localStorage.beeCoin));
				} else {
					localStorage.beeCoin = 0;
				}
			} else {
				// 預設值為20
				localStorage.beeCoin = 20;
			}
			// 產生結算畫面
			$('.finalScoreCoin').show();
			$('.finalBG').show();
			$('.finalScore').text(score);
			$('.finalCoin').text(score/100);
			// 頁面中同步顯示
			$('.beeCoinNow h3').text('$'+ Number(localStorage.beeCoin));

		}
	}

			// 點擊以關掉結算畫面
			$('.finalConfirm').click(function() {
				$('.finalScoreCoin').hide();
				$('.finalBG').hide();
			})
			// $('.finalBG').click(function() {
			// 	$('.finalScoreCoin').hide();
			// 	$('.finalBG').hide();
			// })



// 產生數字部分--------------------------------


	
	$('.scoreNow h2').text(score);


	// 按鈕設定數字
	$('.numPad').mousedown(function() {		
		console.log(numNow*1);		
		console.log(numNow.length);
		// 開始按下才可以輸入數字
		if(control == 1) {
			// 數字最大4位數
			if (numNow.length > 3 ) {
				numNow = numNow.substring(1, numNow.length) + $(this).text();
				$('.num2').text((numNow*1));
			} else {
				numNow += $(this).text();
				$('.num2').text((numNow*1));
			}
		}
	})



	//刪除數字
	$('.calPadDelete').click(function() {
		numNow = numNow.substring(0, numNow.length - 1);
		console.log(numNow);
		$('.num2').text((numNow*1));
	})



	// 數字歸零
	$('.calPadC').click(function() {
		console.log(1);
		numNow = '';
		$('.num2').text((numNow*1));
	})



	// 產生隨機數字
	function seqArr(min, max, n) {
		var arr = new Array();
		var leng = max - min + 1;
		for (var i = 0; i < leng; i++) {
			arr.push(min+i);
		}
		for (var i = arr.length - 1; i >= 0; i--) {
			var j = Math.floor(Math.random() * i );
			if (j != i) {
				var box  = arr[i];
				arr[i] = arr[j];
				arr[j] = box;
			}	
		}return arr[n-1];
	}

	


			
		// 提交答案
		$('.calPadCheck').click(function() {
			// correctNum = (num2 - num1)*1;
			console.log(correctNum);
			// 開始按下才可以輸入數字
			if(control == 1) {
				if ((numNow*1) == correctNum) {
					score += 100;
					$('.scoreNow h2').text(score);
					num1 = seqArr(1, 100, 2);
					num2 = seqArr(101,200, 1);
					correctNum = num2 - num1;
					$('.num1').text(num1);
					$('.result').text(num2);
					$('.num2').text('??');
					console.log(correctNum);
				} else {
					score -= 50;
					$('.scoreNow h2').text(score);
					num1 = seqArr(1, 100, 2);
					num2 = seqArr(101,200, 1);
					correctNum = num2 - num1;
					$('.num1').text(num1);
					$('.result').text(num2);
					$('.num2').text('??');
					console.log(correctNum);
				}
			}
			numNow = '';
			$('.numUI h3').text('??');
			$('.numUI h2').text(num1);
			$('.numUI h4').text(num2);
		})

// 產生數字部分--------------------------------


	})