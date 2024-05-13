const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        },
    }

    // let's make a fetch request to a specific URL
    fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke;
        })
        .catch((error) => {
            jokeEl.innerHTML = 'Error fetching joke. Please try again later.';
            console.error('Error fetching joke:', error);
        });
}