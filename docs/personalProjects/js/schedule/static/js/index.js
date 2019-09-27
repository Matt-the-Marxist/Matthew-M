certs = 1
$(document).ready(function(){
	
	$(".Vco").click(function(){
		$("#overlay").css({"display":"block"})
		$(".viewCounselors").css({"display":"block"})
	})
	$(".Aco").click(function(){
		$("#overlay").css({"display":"block"})
		$(".addCounselor").css({"display":"block"})
	})
	$(".closeOverlay").click(function(){
		$("#overlay").css({"display":"none"})
		$(".addCounselor").css({"display":"none"})
		$(".viewCounselors").css({"display":"none"})
	})
	$(".unitSelect").change(function(){
		unit = $(".unitSelect").val()
		$(".cabinSelect").text("")
				$(".cabinSelect").append(`
				<option value="">--Select One--</option>
				`)
		switch(unit){
			case("Junior"):
				$(".cabinSelect").append(`
				<option value="Beebe">Beebe</option>
				<option value="Bishop Lawrence">Bishop Lawrence</option>
				<option value="Gillis">Gillis</option>
				<option value="Osceola">Osceola</option>
				<option value="Riley">Riley</option>
				`)
				
				break;
			case("Middler"):
				
				$(".cabinSelect").append(`
				<option value="Belknap">Belknap</option>
				<option value="Copp">Copp</option>
				<option value="Ossipe">Ossipe</option>
				<option value="Shaw">Shaw</option>
				<option value="Village">Village</option>
				<option value="Whiteface">Whiteface</option>
				`)
				break;
			case("Senior"):
				
				$(".cabinSelect").append(`
				<option value="Cardigan">Cardigan</option>
				<option value="Chocorua">Chocorua</option>
				<option value="Haycock">Haycock</option>
				<option value="Walker">Walker</option>
				`)
				
		}
	})
	$(`.certs`).on('click','.addCert',function(){
		console.log("click");
		$(".certs").append(`
		<div><div class="addCert">+</div><select name="cert${certs}">
						<option value="" selected>--Select One--</option>
						<option value="Archery">Archery Instructor</option>
						<option value="CWI">Climbing Wall Instructor</option>
						<option value="EMT">EMT</option>
						<option value="High Ropes">High Ropes</option>
						<option value="Lifeguard">Lifeguard</option>
						<option value="Low Ropes">Low Ropes</option>
						<option value="Riflery">Riflery Instructor</option>
						<option value="WFA">WFA</option>
						<option value="WFR">WFR</option>
						<option value="WSI">WSI</option>
						<option value="Driver's License">Driver's License</option>
					</select></div><br>
		`)
		certs++;
	})
	
	$(".counselor").submit(function(event){
		event.preventDefault();
		console.log(objectifyForm($(this).serializeArray()))
	})
})

function objectifyForm(formArray) {//serialize data function
	var returnArray = {};
	for (var i = 0; i < formArray.length; i++){
		returnArray[formArray[i]['name']] = formArray[i]['value'];
	}
	return returnArray;
}