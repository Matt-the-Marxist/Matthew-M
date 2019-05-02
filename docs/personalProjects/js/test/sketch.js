$.ajax({
    url:"https://api.myjson.com/bins",
    type:"POST",
    data:'{"key":"value"}',
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){
		console.log(data);
    }
}); 