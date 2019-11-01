
$(document).ready(function(){
	$(".menu button").click(function(){
		console.log("so you wanna place an order?")
	});
	
	$.ajax({
		url: "../static/json/items.json",
		success: function(data, textStatus, jqXHR){
			let items = data;
			console.log(items);
			let a=0;
			for(var i in items){
				$(`.column${(a%2)+1}`).append(`
				<div class="menuItem">
					<div class="itemName">${i}</div>
					<div class="itemDescription">
						<img class="itemImg" src="../static/media/${items[i].image}">
						${items[i].description}
					</div>
				</div>
				`);
				a++;
			}
		}
	})
})