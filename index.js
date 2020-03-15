const axios = require('axios')
const secret = require('./secret')

function oneReq(token,aurl){
    return axios.post('https://api.tinify.com/shrink',{source: {url: aurl}},{auth: {username: 'api', password: token }})
}

var tinypnga = function(token,files)
{
    return new Promise((resolve,reject) => {
        var reqlist=[]
        for (var i=0;i < files.length;i++){
            reqlist.push(oneReq(token,files[i]))
        }
        Promise.all(reqlist)
        .then((res)=>console.log(res[0].data))
        .catch(e=>console.log(e));
    })
}

module.export= {tinypnga: tinypnga}

tinypnga(secret.token, ['https://raw.githubusercontent.com/YuxuanWang-CHINA/MyImages/master/images/20200310223352.jpg', 'https://raw.githubusercontent.com/YuxuanWang-CHINA/MyImages/master/images/20200308140737.jpg'])