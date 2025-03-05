let storage = {
  setval(key, val) {
    localStorage.setItem(key, val);
    console.log(`${val}sucessfully added to local storage`);
    setTimeout(() => {
      localStorage.removeItem(key);
      console.log(`item removed-${val}`);
    }, 10000);
  },
  getval(key) {
    console.log(
      localStorage.getItem(key) === null
        ? "item not found"
        : localStorage.getItem(key)
    );
  },
};
storage.setval("hello", 20);
storage.setval("hell", 40);
storage.setval("he", 60);
storage.getval("hello");

// storage.getval("hello");
// setInterval(()=>{
//   storage.getval("hello");
//   storage.getval("hell");
//   storage.getval("he");
// },1000);
// storage.getval("hell");
// storage.getval("he");
