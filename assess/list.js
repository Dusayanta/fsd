var productObj=localStorage.getItem('product_list_string');
if(productObj==null)
{
	document.getElementById('table').innerHTML+='No data available';
	console.log('The object is null');
}
else
{
	var display=document.getElementById('table');
	var data=JSON.parse(productObj);
	let prop='';
	data.forEach(product=>{
		if(product.quantity<=2)
			prop=' class="under-stock"';
		display.innerHTML+='<tr'+prop+'><td>'+product.sku+'</td><td>'+product.name+'</td><td>'+product.category+'</td><td>'+product.price+'</td><td>'+product.quantity+'</td><td><button id="edit-btn" onclick="return edit_product('+product.sku+')">Edit</button></td></tr>';
		prop='';
	});
}
const edit_product = (sku_id)=>{
	localStorage.setItem('sku_edit',sku_id);
	location.href='edit.html';
}