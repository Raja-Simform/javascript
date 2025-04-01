function firstrepeating(str)
{
   let map=new Map();
   for(let i=0;i<str.length;i++){
      if(map.has(str[i])){
        map.set(str[i],map.get(str[i])+1);
      }
      else{
        map.set(str[i],1);
      }
   }
   for(num of map){
     if(num[1]===1){
        return num[0];
     }
   }
   return "";
}
console.log(firstrepeating("axxyyzz"));
