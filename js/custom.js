function clicked(value) {
	var str = '.'+value;
	if($(str+' .playAndPause').text() ==  'Play') {
		$('.playAndPause').text('Play');
		$(str+' .playAndPause').text('Pause');
		$('.message').css('display', 'none')
		$(str+' .message').css('display', 'inline-flex');
		$('.myAudio').map((idx, item) => item.pause());
		$(str+ ' .myAudio')[0].load();	
		$(str+ ' .myAudio')[0].play();
	} else {
		$('.playAndPause').text('Play');
		$('.myAudio').map((idx, item) => item.pause());
		$('.message').css('display', 'none');
	}
}