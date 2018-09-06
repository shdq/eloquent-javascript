const tabs = document.getElementsByTagName('div');

for (let tab of tabs) {
  tab.style.display = 'none';
  
  let button = document.createElement('button');
  button.innerText = tab.dataset.tabname;
  button.dataset.tabname = tab.dataset.tabname;
  document.body.appendChild(button);
  button.addEventListener('click', switchTab);
}

const buttons = document.getElementsByTagName('button');

tabs[0].style.display = 'block';
buttons[0].classList.add('active');

function switchTab(event) {
  document.querySelector('.active').classList.remove('active');
  
  for (let tab of tabs) {
    if(tab.dataset.tabname === event.target.dataset.tabname) {
      tab.style.display = 'block';
      event.target.classList.add('active');
      continue;
    }
    tab.style.display = 'none';
  }
}