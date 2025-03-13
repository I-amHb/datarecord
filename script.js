const table = document.querySelector('.table');
const nameInput = document.querySelector('.nameInput');
const ageInput = document.querySelector('.ageInput');
const btn = document.querySelector('.btn');


const registryArr = [];
  
registryArr.map((val) => {
  
  let tabRow = document.createElement('tr');
  tabRow.setAttribute('class', 'tableRow');
  
  let tabNameData = document.createElement('td');
  tabNameData.setAttribute('class', 'nameData');
  tabNameData.textContent = val.name;
  
  let tabAgeData = document.createElement('td');
  tabAgeData.setAttribute('class', 'ageData');
  tabAgeData.textContent = val.age;
  
  tabRow.appendChild(tabNameData);
  tabRow.appendChild(tabAgeData);
  
  table.appendChild(tabRow);
  console.log(tabRow);
})


const renderArr = () => {
  
  let latestEntry = registryArr[registryArr.length -1];
  
  let tabRow = document.createElement('tr');
  tabRow.setAttribute('class', 'tableRow');
  
  let tabNameData = document.createElement('td');
   tabNameData.setAttribute('class', 'nameData');
  tabNameData.textContent = latestEntry.name;
  
  let tabAgeData = document.createElement('td');
  tabAgeData.setAttribute('class', 'ageData');
  tabAgeData.textContent = latestEntry.age;
  
  tabRow.appendChild(tabNameData);
  tabRow.appendChild(tabAgeData);
  
  table.appendChild(tabRow);
  
};

btn.addEventListener('click',  () => {
   
   if (nameInput.value.trim() == '' || ageInput.value.trim() == '') {
    return alert('Error empty inputs')
   } else {
    registryArr.push({name: nameInput.value, age: ageInput.value});
   }
  
  renderArr();
  
  nameInput.value ='';
  ageInput.value = '';
  
  
  console.log(registryArr);
  
});


