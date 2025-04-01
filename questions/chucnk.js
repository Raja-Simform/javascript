
function chunk(arr,val){
  let count=0;
  let ans=[]; 
  let temp=[];
  let it=0;
  while(it<arr.length){
    temp.push(arr[it])
    count++;
    if(count==val){
      ans.push(temp);
      count=0;
      temp=[];
    }
    it++;
  }
  if(temp.length<val && temp.length!=0){
    ans.push(temp);
  }
  return ans;
}
console.log(chunk([1,2,3,4,5],2))
console.log(chunk([1,2,3,4,5],3))
console.log(chunk([1,2,3,4,5],4))
