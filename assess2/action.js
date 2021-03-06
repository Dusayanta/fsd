let dl_list=[];
const form = document.querySelector('form');
const btn_modal= document.getElementById('btn-modal');
const btn_modal_close = document.querySelectorAll('.close');
const search = document.getElementById('filter');

const addDl = (e)=>{
	e.preventDefault();

	const name = document.getElementById('name');
	const dob = document.getElementById('dob');
	const address = document.getElementById('address');
	const dl = document.getElementById('dl');

	dl_list.push({
				id : dl.value,
				name : name.value,
				dob : dob.value,
				address : address.value});
	console.log(dl_list);

	name.value='';
	dob.value='';
	address.value='';
	dl.value='';

}
const generateDlRandom = ()=>{
	const dl = document.getElementById('dl');
	let dl_id = 'DL2019' + (parseInt(Math.random()*1000 ));
	dl.value=dl_id;
	console.log('add random');

}
const generateList = ()=>{
	console.log("List generateList");

	let row = document.querySelector('.row');

	row.innerHTML='';
	let classProp='';
	dl_list.forEach((list,index)=>{
		if(index%2==0)
			classProp='bg-primary text-white';
		else
			classProp='bg-secondary text-white';
	let html = `
	<div class="col-lg-4">
		<div class="card m-2 ${classProp}">
			<div class="card-header text-right">
				<a onclick="return editDL('${list.id}','${list.name}','${list.address}','${list.dob}')">
					<i class="fa fa-edit edit_btn_class"></i>
				</a>&nbsp;&nbsp;&nbsp;
				<a onclick="return deleteDL('${list.id}')">
					<i class="fa fa-times-circle delete_btn_class"></i>
				</a>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-4"><img src="person.png" height="100" width="100" style="border-radius: 50%;"></div>
					<div class="col-md-8">
						<div class="${list.id}">
							<label for="name">Name:&nbsp;</label><span id="card_name"><strong>${list.name}</strong></span><br>
							<label for="dob">DOB:&nbsp;</label><span id="card_dob"><strong>${list.dob}</strong></span><br>
							<label for="address">Address:&nbsp;</label><span id="card_add"><strong>${list.address}</strong></span><br>
							<label for="dlno">DL. No.&nbsp;</label><span id="card_id"><strong>${list.id}</span></strong><br>
							<span id="edit_btn"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>	
	`;
	row.innerHTML += html;
	});
}
const deleteDL = (dl_id)=>{
	if(confirm('Are You Sure to delete ?'))
	{
		dl_list.forEach((list,index)=>{
			if(list.id == dl_id){
				dl_list.splice(index,1);
			}
		});
		generateList();
	}
}
const editDL = (user_id,user_name,user_add,user_dob)=>{
	//console.log('under construction: '+user_id,user_name,user_add,user_dob);

	let edit_btn = document.querySelector(`div.${user_id} #edit_btn`);
	let name = document.querySelector(`div.${user_id} #card_name`);
	let dob = document.querySelector(`div.${user_id} #card_dob`);
	let add = document.querySelector(`div.${user_id} #card_add`);
	let id = document.querySelector(`div.${user_id} #card_id`);

	name.innerHTML = `<input type="text" value="${user_name}" id="edit_data_name">`;
	dob.innerHTML = `<input type="date" value="${user_dob}" id="edit_data_dob">`;
	add.innerHTML = `<input type="text" value="${user_add}" id="edit_data_add">`;

	edit_btn.innerHTML = `<input type="button" value="Update" id="update_btn" onclick="return updateDL('${id.innerText}');">`;

	//console.log('Received '+name.innerText,dob.innerText,add.innerText,id.innerText);
	
}
const updateDL = (dl_id)=>{
	let name_txt = document.querySelector(`div.${dl_id} #edit_data_name`);
	let dob_txt = document.querySelector(`div.${dl_id} #edit_data_dob`);
	let add_txt = document.querySelector(`div.${dl_id} #edit_data_add`);
	console.log('Received '+ add_txt.value);

	dl_list.forEach((list)=>{
			if(list.id == dl_id){
				list.name = name_txt.value;
				list.dob = dob_txt.value;
				list.address = add_txt.value;
			}
		});
	generateList();
	console.log(dl_list);
}
const filterDL = (e)=>{
	const text = e.target.value.toLowerCase();
	
	document.querySelectorAll('#card_name').forEach((card)=>{
		const name = (card.textContent).toLowerCase();
		if(name.indexOf(text) != -1){
			card.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display='block';
		}
		else{
			card.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display='none';
		}
	});
}
const loadEventlisteners = () =>{
	btn_modal.addEventListener('click',generateDlRandom);
	form.addEventListener('submit', addDl);
	btn_modal_close.forEach((b)=>{
		b.addEventListener('click',generateList);
	});
	search.addEventListener('keyup',filterDL);
}

loadEventlisteners();

// $("#filter").keyup(function(){
//   $("#filter").css("background-color", "pink");
//   console.log($('span[id="card_name"]')[0].parents().eq(6));
// });