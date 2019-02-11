var productObj=localStorage.getItem('product_list_string');
if(productObj==null)
{
	document.getElementById('table').style.display="none";
	document.getElementById('product-list').innerHTML+='<h1 align="center">No data available</h1>';
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
		display.innerHTML+='<tr'+prop+'><td>'+product.sku+'</td><td>'+product.name+'</td><td>'+product.category+'</td><td>'+product.price+'</td><td>'+product.quantity+'</td><td><button id="edit-btn" onclick="return edit_product('+product.sku+')">Edit</button><button id="edit-btn" onclick="return delete_product('+product.sku+')">Delete</button></td></tr>';
		prop='';
	});
}
const edit_product = (sku_id)=>{
	localStorage.setItem('sku_edit',sku_id);
	location.href='edit.html';
}
const delete_product = (sku_id)=>{
	if(confirm('Are you sure to delete the data'))
	{
		var data=JSON.parse(productObj);
		var pos=0,i=-1;
		data.forEach(product=>{
			i++;
			if(product.sku==parseInt(sku_id))
				pos=i;
		});
		if(data.length<=1)
		{
			data.splice(pos,1);
			localStorage.removeItem('product_list_string');
		}
		else
		{
			data.splice(pos,1);
			localStorage.setItem('product_list_string', JSON.stringify(data));
		}
		location.href='list.html';
	}
}