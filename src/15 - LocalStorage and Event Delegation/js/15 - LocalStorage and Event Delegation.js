const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const checkBtn = document.querySelector('#check');

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value
  const item = {
   text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))
  this.reset();
  

}



  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
  }

  function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

function check(){
  if(checkBtn.dataset.state == 'checked') {
    unCheckAllItems();
  }
  else if(checkBtn.dataset.state == 'cleared') {
    checkAllItems();
  }

}
function checkAllItems() {
  items.map(item => {
    item.done = !item.don;
    populateList(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items));
    checkBtn.dataset.state = 'checked';
    checkBtn.value = 'clear';
  })
  
}
function unCheckAllItems() {
  items.map(item => {
    console.log(item)
    item.done = !item.done;
    populateList(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items));
    checkBtn.dataset.state = 'cleared';
    checkBtn.value = 'check all';
  })
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
checkBtn.addEventListener('click', check);


populateList(items, itemsList)
checkBtnState() 

function checkBtnState() {
  items.map(item => {
    if(item.done == false){
      // checkBtn.value = 'check all';
      checkBtn.dataset.state = 'cleared';
    }
    else {
      checkBtn.value = 'clear';
      checkBtn.dataset.state = 'checked';
    }
  })
}
