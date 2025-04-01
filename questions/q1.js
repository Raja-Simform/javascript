// function compress(str){
//     let map=new Map();
//     for(let i=0;i<str.length;i++){
//         if(map.has(str[i])){
//             let count=map.get(str[i]);
//             map.set(str[i],++count);
//         }
//         else{
//             map.set(str[i],1);
//         }
//    }
//    let ans="";
//    for(a of map){
//         ans+=a[0]+a[1];
//    }
//    console.log(ans);
// }
// compress("ccccccbbbbbbaaaaaaaz")


function solve(input) {
  let map = new Map();
  for (a in input) {
    if (map.has(input[a].user)) {
      let temp = map.get(input[a].user).equipment;
      for (let b in input[a].equipment) {
        if (
          map.get(input[a].user).equipment.indexOf(input[a].equipment[b]) === -1
        ) {
          let str2 = input[a].equipment[b];
          temp.unshift(str2);
        }
      }

      map.set(input[a].user, {
        user: input[a].user,
        duration: map.get(input[a].user).duration + input[a].duration,
        equipment: temp,
      });
    } else {
      map.set(input[a].user, {
        user: input[a].user,
        duration: input[a].duration,
        equipment: input[a].equipment,
      });
    }
  }
  console.log(map);
}
solve([
  { user: 8, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell"] },
  { user: 1, duration: 10, equipment: ["barbell"] },
  { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
  { user: 7, duration: 200, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["treadmill"] },
  { user: 2, duration: 200, equipment: ["bike"] },
]);
