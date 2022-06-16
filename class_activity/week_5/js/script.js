const input = document.getElementById('favchap');
const button = document.getElementById('button');
const list = document.getElementById('listcontainer');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const create_li = document.createElement('li');
    const create_button = document.createElement('button');
    
    create_li.textContent = myItem;
    create_button.textContent ="❌";
    create_li.appendChild(create_button);
    list.appendChild(create_li);

    create_button.addEventListener('click', () => {
      list.removeChild(create_li);
    });

    input.focus();
  });
