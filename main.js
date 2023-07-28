const myName=prompt("Enter name: ");
function greeting(name) {
    if (name.slice(-1) == 'а' || name.slice(-1) == 'ь') {
      alert(`Добрый день, госпожа ${name}!`);
      console.log(`Добрый день, госпожа ${name}!`);
    } else {
      alert(`Добрый день, господин ${name}!`);
      console.log(`Добрый день, господин ${name}!`);
    }
  }
  greeting(myName);
  
