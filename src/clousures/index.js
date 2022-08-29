const myGlobal = 0

function myFunction(){
    const myNumber = 1
    console.log(myGlobal)

    return function parent(){
        const inner = 2
        console.log(myNumber, myGlobal)

        return function child(){
            console.log(inner, myNumber, myGlobal)
        }

    }
}

const resultado = myFunction()
console.log(resultado)