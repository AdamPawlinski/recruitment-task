// data configuration for fakejson.com - the tool for creating fake api; delaying parameter set to 2s
// repeat property sets number of generated fake products

let payload = {
    token: "rRBSvsILbnIJ8LJkuCyWAg",
    "parameters": {
        delay: 2
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

export default payload;
