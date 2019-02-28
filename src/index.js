module.exports =function check(str, bracketsConfig) {
  if (str.length % 2 != 0) 
    return false;  
  let mas=[];
  for (let i=0; i<str.length; i++) 
    for (let j=0; j<bracketsConfig.length; j++) {
      if ((str[i]==bracketsConfig[j][1])&&(mas[mas.length-1]==bracketsConfig[j][0])) {
        mas.pop();
        break;
      }
      else
        if (str[i]==bracketsConfig[j][0]) {
          mas.push(str[i]);
          break;
        }
      if ((str[i]==bracketsConfig[j][1])&&(mas.length==0)) 
        return false;
  }
  return (mas.length!=0) ? false:true;
}