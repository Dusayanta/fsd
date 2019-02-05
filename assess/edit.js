	let sku_local_storage=localStorage.getItem('sku_edit');
	console.log('Local storage sku '+sku_local_storage);
	let sku_text_readonly=document.getElementById('sku');
	sku_text_readonly.value=sku_local_storage;
	let productObj=localStorage.getItem('product_list_string');
	var data=JSON.parse(productObj);

	let name=document.getElementById('name');
	let cat=document.getElementById('cat');
	let price=document.getElementById('price');
	let quantity=document.getElementById('quantity');

	data.forEach(p=>{
		if(p.sku==sku_local_storage)
		{
			name.value= p.name;
			cat.value=p.category;
			price.value=p.price;
			quantity.value=p.quantity;
		}
	});

const editProduct = ()=>{

		//console.log(data[0].sku);
		const findDuplicate = data.find(p=>{
			return p.sku == parseInt(sku_local_storage);
		});
		if(findDuplicate!=undefined)
		{
			data.forEach(p=>{
				if(p.sku==sku_local_storage)
				{
					p.name = name.value;
					p.category = cat.value;
					p.price = parseInt(price.value);
					p.quantity = parseInt(quantity.value);
				}
			});
			localStorage.setItem('product_list_string', JSON.stringify(data));
			localStorage.removeItem('sku_edit');
		}
}