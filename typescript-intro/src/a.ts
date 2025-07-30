

function runAfter2Sec(fn:()=> void){
    setInterval(fn,2000);
}

runAfter2Sec(()=>{
    console.log("hi");
})
