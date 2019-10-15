
function getMusicByName(url,cb){
  let hostUrl = '/api'+ url
  this.axios.get(hostUrl).then((res)=>{
    if(res.ok){
      console.log(res)
      cb(JSON.parse(res.body.slice(9,-1)).data)
    }
  }).catch(err=>{
    console.log(err)
  })
}

function getToken(url,cb){
  let hostUrl = '/api'+ url
  this.axios.get(hostUrl).then((res)=>{
    if(res.ok){
      cb(res.body.data)
    }
  })
}

function typeNum(n){
  console.log(n)
}
export { getMusicByName, getToken,typeNum }