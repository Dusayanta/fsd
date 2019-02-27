const getJokes = (e) => {
    const number = document.getElementById('number').value;
    document.querySelector('.jokes').innerHTML = '';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    let output = '';
    xhr.onprogress = function () {
        document.querySelector('.spinner').style.display = 'block';
    }
    xhr.onload = ()=> {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            if (response.type === 'success') {
                document.querySelector('.spinner').style.display = 'none';
                response.value.forEach(joke => {
                    output += `
                    <ul>
                        <li>${joke.joke}</li>
                    </ul>
                    `;
                });
            } else {
                output = `Something went wrong`;
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
    /*
     Stages of AJAX or XHR
        0   The request is not initialized
        1   The request/connection has been set up : xhr.open
        2   The request has been sent
        3   The request is in process : xhr.onprogress
        4   The request is complete : xhr.onload
    */
}
document.querySelector('.get-jokes').addEventListener('click', getJokes);