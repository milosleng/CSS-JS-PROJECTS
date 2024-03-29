const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
//root URL
const APIURL = 'https://api.github.com/users/';

getUser('milosleng');

// function getUser(username) {
//   axios
//     .get(APIURL + username)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }

//get user
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    //FIXME: getRepos(username);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard('The user does not exist. <br> Please try again.');
    }
  }
}

function createErrorCard(message) {
  const cardHTML = `<div class="card">
    <h1>${message}</h1>
    </div>
    `;
  main.innerHTML = cardHTML;
}

//get repos
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created');

    addReposToCard(data);
  } catch (err) {
    createErrorCard('Problem fetching repos');
  }
}

//create user card
function createUserCard(user) {
  const cardHTML = `
    <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt=""
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
      ${user.bio}
          </p>
          <ul>
            <li>${user.followers}<strong>Followers</strong></li>
            <li>${user.following}<strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
          </ul>

          <div id="repos">
          </div>
        </div>
      </div>`;

  main.innerHTML = cardHTML;
}

//add repos to card
function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos.slice(0, 10).forEach((repo) => {
    const repoLink = document.createElement('a');
    repoLink.classList.add('repo');
    repoLink.href = repo.html_url;
    repoLink.target = '_blank';
    repoLink.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener('submit', (e) => {
  // we do not wanna submit it
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = '';
  }
});
