const userdata = document.getElementById('userdata');

const fetchdatauser = async() => {
    const data = await fetch('https://dummyjson.com/users');
    const main = await data.json();

    const users = main.users;
    console.log(users);
    
    users.forEach((a) => {
        userdata.innerHTML += `
        <div class="col-xl-3 col-lg-4 col-md-6" style="border: 2px gray solid">
        <p><strong>ID :</strong> ${a.id}</p>
        <p><strong>First Name :</strong> ${a.firstName}` + `<strong> Last Name : </strong> ` + `${a.lastName}</p>
        <p><strong>Gender :</strong> ${a.gender}</p>
        <p><strong>E-mail :</strong> ${a.email}</p>
        <p><strong>Mobile Number :</strong> ${a.phone}</p>
        <p><strong>Address :</strong> ${a.address.address}` + `, ` + `${a.address.city}` + `, ` + `${a.address.state}` + `, ` + `${a.address.country}</p>
        <p><strong>Company Name :</strong> ${a.company.name}</p>
        </div>
        `
    });
}

fetchdatauser()