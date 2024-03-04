const createPlayer = (_name, _hp, ...rest) => {
    let name = _name;
    let hp = _hp;
    let moves = rest;
    return {
        getName () {
            return name;
        },
        getHp () {
            return hp;
        },
        getMoves () {
            let div = document.querySelector(".moves");
            for (move of moves){
                let p = document.createElement("p");
                p.innerText = move;
                div.appendChild(p);
            }
        }
    }
}
var player = createPlayer("Charles", 9, "kick", "punch", "dodge")
player.getMoves()
console.log(player.getHp())
console.log(player.getName())

// var player = createPlayer("Charles", 9, 9)
// console.log(player)