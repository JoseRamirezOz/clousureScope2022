let money = 0

function save(deposit){
    money = money + deposit
    console.log(money)
}

save(10)
save(30)
save(50)
console.log(money)