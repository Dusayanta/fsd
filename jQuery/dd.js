const employees = [
    {
        id: 1,
        name: 'Mike',
        salary: 10000,
        address:{
            city: 'London',
            country: 'UK'
        }
    },
    {
        id: 2,
        name: 'John',
        salary: 55000,
        address:{
            city: 'Manchester',
            country: 'UK'
        }
    },
    {
        id: 3,
        name: 'Harvey',
        salary: 250000,
        address:{
            city: 'New york',
            country: 'US'
        }
    },
    {
        id: 4,
        name: 'Roger',
        salary: 55000,
        address:{
            city: 'New york',
            country: 'US'
        }
    }
];
$(document).ready(()=>{
    console.log('Running');
    $('#table').append('<tr><th>Id</th><th>Name</th><th>Salary</th><th>City</th><th>Country</th></tr>');
    employees.forEach((emp)=>{
        $('#table').append('<tr><td>'+emp.id+'</td><td>'+emp.name+'</td><td>'+emp.salary+'</td><td>'+emp.address.city+'</td><td>'+emp.address.country+'</td></tr>');
        //console.log(Object.keys(emp)[0]);
    });    
});