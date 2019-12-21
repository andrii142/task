let arr = [
  {
   name: 'Ivan',
   birthday: '1994-01-22'
 },
 {
 name: 'Kile',
 birthday: '1992-02-07'
 },
 {
   name: 'Olia',
   birthday: '1990-01-09'
 }
 
 ]
let str = 'Ivan'
 searchByName =  arr.filter(function(item){
  return item.name == str
})
 
 getBiggestAge = arr.reduce(function(prev, cur){
   if(cur.birthday < prev.birthday){return cur}
   else{return prev}
 })
 
