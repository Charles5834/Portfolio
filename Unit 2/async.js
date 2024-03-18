async function runRace(){
    var runner1 = false;
    var runner2 = false;
    var loser = "";
 
    var runner1Go = new Promise(function(resolve){
        setTimeout(() => {
            loser = "runner1";
            resolve(true)
        }, 10000)
    })

    var runner2Go = new Promise(function(resolve){
        setTimeout(() => {
            loser = "runner2";
             resolve(true)
            }, 10000)  

    })

    return [await runner1Go, await runner2Go, loser]
}
runRace().then((result) => {
    console.log(result[2])
})