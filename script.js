let numero1 = Number(prompt("Digite o primeiro numero: ") )
let numero2 = Number(prompt("Digite o segundo numero: ") )
let operação = prompt ("Informe a Operação: \n{+}\n{-}\n(*)\n(/)")

if (operação =="+") {
     alert(numero1 + numero2)
    }
    
else if (operação =="-") {
 alert(numero1 - numero2)
}
    else if (operação =="*") {
        alert(numero1 * numero2)
    }
    else if (operação =="/") {
        alert(numero1 / numero2)
    }