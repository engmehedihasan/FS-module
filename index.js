const fs = require('fs');

fs.writeFile('demo.txt',"This is First Node Js FS-Module Rext",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Run File Successful");
    }
})