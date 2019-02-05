const addProduct = ()=>{
	
	let name=document.getElementById('name');
	let cat=document.getElementById('cat');
	let price=document.getElementById('price');
	let sku=document.getElementById('sku');
	let quantity=document.getElementById('quantity');
	console.log(name.value+' '+cat.value+' '+price.value+' '+sku.value+' '+quantity.value);

	let productObj=localStorage.getItem('product_list_string');
	if(productObj==null)
	{
		console.log('Empty product list');
		var product_list = [
		{
			sku : parseInt(sku.value),name : name.value,category : cat.value,price : parseInt(price.value),quantity : parseInt(quantity.value)
		}];
		localStorage.setItem('product_list_string',JSON.stringify(product_list));
	}
	else
	{
		console.log('running else')
		var data=JSON.parse(productObj);
		console.log(data[0].sku);
		const findDuplicate = data.find(p=>{
			return p.sku == parseInt(sku.value);
		});
		if(findDuplicate!=undefined)
		{
			data.forEach(p=>{
				if(p.sku==sku.value)
				{
					p.name = name.value;
					p.category = cat.value;
					p.price = price.value;
					p.quantity = quantity.value;
				}
			});
			localStorage.setItem('product_list_string', JSON.stringify(data));
		}
		else
		{
			data.push({
				sku : parseInt(sku.value),
				name : name.value,
				category : cat.value,
				price : parseInt(price.value),
				quantity : parseInt(quantity.value)
			});
			localStorage.setItem('product_list_string', JSON.stringify(data));
		}
	}
}