function palindrome(){
let str1="helloworld";
let str2="dlrowolleh";
if(str1.length!=str2.length){
    console.log("not a plaindrome")
    return;
}
for(let i=0;i<str1.length;i++){
 if(str1[i]!=str2[str2.length-i-1]){
    console.log("Not a palindrome")
    return;
 }
}
console.log("Palindrome");
}
let a=palindrome();