let http=require("http")
let apiData=require("./properties__.json")
let server=http.createServer((req,res)=>{
    res.setHeader("content-type","application/json")
    res.setHeader("Access-Control-Allow-Origin","*")
    res.statusCode=200
    res.write(JSON.stringify(apiData))
    res.end()
})
server.listen(3000,(err,res)=>{
    if (err){
        console.log(err)
    }else{
        console.log("server at port : http://localhost:3000")
    }

})