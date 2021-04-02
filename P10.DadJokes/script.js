const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

// when you use await inside a function, you need to label that function async! put the promises into a variable (res)
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  //these are promises
  const res = await fetch('https://icanhazdadjoke.com/', config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

jokeBtn.addEventListener('click', generateJoke);
