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

const api = () => axios({
    method: "post",
    url: "https://app.fakejson.com/q",
    data: payload    
  }).then(function(resp) { 
    products = [];    
    return resp.data.map(
        ind => products.push(ind)
    )      
  })
  .catch(
      error => console.log(error)
  );

export default api;