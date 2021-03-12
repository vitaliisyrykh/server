async function allData(){
  const arrData =[1,'',true, null, undefined];
  
  return arrData;

}

const prom = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    resolve(allData())
  })
},3000)

async function resProm (){
  const response = await prom;
  return response
}


console.log(resProm());