const url = 'data/members.json';
const directory = document.getElementById('directory');

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  members.forEach(member => {
    const card = document.createElement('section');

    // Estilo según membresía
    let membershipClass = '';
    if (member.membership === 3) membershipClass = 'platinum';
    else if (member.membership === 2) membershipClass = 'gold';
    else membershipClass = 'silver';

    card.classList.add('member-card', membershipClass);

    const img = document.createElement('img');
    img.src = member.image;
    img.alt = `Logo of ${member.name}`;
    img.loading = 'lazy';

    const name = document.createElement('h3');
    name.textContent = member.name;

    const address = document.createElement('p');
    address.textContent = member.address;

    const phone = document.createElement('p');
    phone.textContent = member.phone;

    const website = document.createElement('a');
    website.href = member.website;
    website.textContent = 'Visit Website';
    website.target = '_blank';

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    directory.appendChild(card);
  });
}

getMembers();

// Toggle views
document.getElementById('grid').addEventListener('click', () => {
  directory.classList.add('grid-view');
  directory.classList.remove('list-view');
});

document.getElementById('list').addEventListener('click', () => {
  directory.classList.add('list-view');
  directory.classList.remove('grid-view');
});
