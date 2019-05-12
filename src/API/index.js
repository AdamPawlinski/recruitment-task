import axios from 'axios';

let payload = {
    token: "rRBSvsILbnIJ8LJkuCyWAg",
    "parameters": {
        delay: 1
    },
    data: {
        productName: "productName",
        stringShort: "stringShort",
        stringLong: "stringLong",
        personAvatar: "personAvatar",
        numberFloat: "numberFloat|100,1000|2",
        _repeat: 10
    }
}

async API = () => await axios({
    method: "post",
    url: "https://app.fakejson.com/q",
    data: payload    
  }).then(function(resp) {
      if(resp.status === 200){
        return resp.data;
      }    
  })
  .catch(
      error => console.log(error)
  );

export default API;