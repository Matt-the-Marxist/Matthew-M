let mouseDown = false
//C
	var cNote = document.getElementById('cAudio');
	console.log(cNote);
	$('#c').mousedown(function(){
		cNote.currentTime = 0;
		cNote.play();
		mouseDown = true;
	});
	$('#c').mouseup(function(){
		mouseDown = false;
	});
	$('#c').mouseover(function(){
		if(mouseDown){
			cNote.currentTime = 0;
			cNote.play();
		}
	});
//D
	var dNote = document.getElementById('dAudio');
	$('#d').mousedown(function(){
		dNote.currentTime = 0;
		dNote.play();
		mouseDown = true;
	});
	$('#d').mouseup(function(){
		mouseDown = false;
	});
	$('#d').mouseover(function(){
		if(mouseDown){
			dNote.currentTime = 0;
			dNote.play();
		}
	});
//E
	var eNote = document.getElementById('eAudio');
	$('#e').mousedown(function(){
		eNote.currentTime = 0;
		eNote.play();
		mouseDown = true;
	});
	$('#e').mouseup(function(){
		mouseDown = false;
	});
	$('#e').mouseover(function(){
		if(mouseDown){
			eNote.currentTime = 0;
			eNote.play();
		}
	});
//F
	var fNote = document.getElementById('fAudio');
	$('#f').mousedown(function(){
		fNote.currentTime = 0;
		fNote.play();
		mouseDown = true;
	});
	$('#f').mouseup(function(){
		mouseDown = false;
	});
	$('#f').mouseover(function(){
		if(mouseDown){
			fNote.currentTime = 0;
			fNote.play();
		}
	});
//G
	var gNote = document.getElementById('gAudio');
	$('#g').mousedown(function(){
		gNote.currentTime = 0;
		gNote.play();
		mouseDown = true;
	});
	$('#g').mouseup(function(){
		mouseDown = false;
	});
	$('#g').mouseover(function(){
		if(mouseDown){
			gNote.currentTime = 0;
			gNote.play();
		}
	});
//A
	var aNote = document.getElementById('aAudio');
	$('#a').mousedown(function(){
		aNote.currentTime = 0;
		aNote.play();
		mouseDown = true;
	});
	$('#a').mouseup(function(){
		mouseDown = false;
	});
	$('#a').mouseover(function(){
		if(mouseDown){
			aNote.currentTime = 0;
			aNote.play();
		}
	});
//B
	var bNote = document.getElementById('bAudio');
	$('#b').mousedown(function(){
		bNote.currentTime = 0;
		bNote.play();
		mouseDown = true;
	});
	$('#b').mouseup(function(){
		mouseDown = false;
	});
	$('#b').mouseover(function(){
		if(mouseDown){
			bNote.currentTime = 0;
			bNote.play();
		}
	});

