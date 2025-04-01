// let storage = {
//   setval(key, val) {
//     localStorage.setItem(key, val);
//     console.log(`${val}sucessfully added to local storage`);
//     setTimeout(() => {
//       localStorage.removeItem(key);
//       console.log(`item removed-${val}`);
//     }, 10000);
//   },
//   getval(key) {
//     console.log(
//       localStorage.getItem(key) === null
//         ? "item not found"
//         : localStorage.getItem(key)
//     );
//   },
// };
// storage.setval("hello", 20);
// storage.setval("hell", 40);
// storage.setval("he", 60);
// storage.getval("hello");

// // storage.getval("hello");
// // setInterval(()=>{
// //   storage.getval("hello");
// //   storage.getval("hell");
// //   storage.getval("he");
// // },1000);
// // storage.getval("hell");
// // storage.getval("he");



let storage = {
  setval(key, val,time) {
    const timer = Date.now() + time;
    localStorage.setItem(key, JSON.stringify({ val, timer }));
    console.log(`${val} added to local storage`);
  },

  getval(key) {
    const item = localStorage.getItem(key);
    if (!item) {
      console.log("item not found");
      return;
    }

    let { val, timer } = JSON.parse(item);
    let num = timer - Date.now();

    if (num <= 0) {
      localStorage.removeItem(key);
      console.log("item expired");
    } else {
      console.log(val);
    }
  },

  remove() {
    Object.keys(localStorage).forEach((key) => {
      let value = localStorage.getItem(key);
      if (value) {
        const { timer } = JSON.parse(value);
        if (Date.now() > timer) {
          localStorage.removeItem(key);
          console.log(`item expired - ${key}`);
        }
      }
     
    });
  }
};

setInterval(()=>{
storage.remove();
},1000)

storage.setval("hello",20,10000);
setInterval(()=>{
 storage.getval("hello");
},1000);
