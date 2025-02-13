const axios = require('axios')

function oneReq(token,aurl){
    return axios.post('https://api.tinify.com/shrink',{source: {url: aurl}},{auth: {username: 'api', password: token }})
}

function downOne(token, turl) {
    return axios.get(turl, { auth: { username: 'api', password: token } ,responseType: 'arraybuffer' })
}

function getBuf(token,urllist){
    return new Promise((resolve, reject)=>{
        var returnbuf=[];
        for (let i = 0; i < urllist.length; i++) {
            returnbuf.push(downOne(token,urllist[i]))
        }
        Promise.all(returnbuf)
        .then((res)=>{
            let re=[]
            for (let i=0;i<res.length;i++ ){
                re.push(res[i].data)
            }
            //console.log(re)
            return resolve(re)
        })
        .catch(e=>console.log(e))
    })
}

var tinypnga = function(token,files)
{
    return new Promise((resolve,reject) => {
        var reqlist=[]
        for (let i=0;i < files.length;i++){
            reqlist.push(oneReq(token,files[i]))
        }
        Promise.all(reqlist)
        .then((res)=>{
            let reslist = []
            for (let i = 0; i < files.length; i++){
                reslist.push(res[i].data.output.url)
            }
            getBuf(token,reslist)
            .then((res)=>{return resolve (res)})
        })
        .catch(e=>console.log(e));
    })
}

module.exports= {tinypnga: tinypnga}
