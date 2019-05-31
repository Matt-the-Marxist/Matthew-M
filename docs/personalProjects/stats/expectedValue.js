$(document).ready(function(){
	$("#possibilities").change(function(){
		num = $("#possibilities").val();
		$("#expCalc").empty()
		
		console.log(num)
		for(let i=0; i<num; i++){
			$("#expCalc").append(`
				Value: <input type="number" name="value${i}">
				Prop: <input type="number" name="prop${i}"><br>
			`)
		}
			$("#expCalc").append(`<input type="submit">`)
		
	})
	$("#expCalc").submit(function(e){
		e.preventDefault();
		ExpectedValue()
	})
})

function getFormData(formName){
	var paramObj = {};
	$.each($('#'+formName).serializeArray(), function(_, kv) {
		if (paramObj.hasOwnProperty(kv.name)) {
			paramObj[kv.name] = $.makeArray(paramObj[kv.name]);
			paramObj[kv.name].push(kv.value);
		}
		else {
			paramObj[kv.name] = kv.value;
		}
	});
	return paramObj;
}

function ExpectedValue(){
	data = getFormData("expCalc")
}