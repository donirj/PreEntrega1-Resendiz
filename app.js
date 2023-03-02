//clase banco
class Banco {
    constructor(nombre, id, tasa12, tasa24, tasa36){
        this.nombre = nombre
        this.id = id
        this.tasa12 = tasa12
        this.tasa24 = tasa24
        this.tasa36 = tasa36
    }
}
//bancos
const santander = new Banco('santander', 1, 12, 24, 36)
const bbva = new Banco('bbva', 2, 12, 14, 15)
const scotiabank = new Banco('scotiabank', 4,5,6,7)
const bancoDelBienestar = new Banco('scotiabank', 4,5,6,7)

//dato de elección del cliente
let bancoDeseado = parseInt(
    prompt(
        'Elige el número del banco con el que deseas cotizar? 1) Santander  2) Bbva  3) Scotiabank  4) HSBC  5) Banco del Bienestar'
    )
)

//el banco no está elegido
let escogioBanco = false

//variable que contiene info del banco elegido
let infoBancoDeseado

//mientras que el cliente no elija banco, o sea false, la pregunta se repite
while(escogioBanco === false) {
    //si es igual a 1, escogioBanco se vuelve true
    //infoBanco es igual a santander
    if(bancoDeseado === 1){
        escogioBanco = true
        infoBancoDeseado = santander
    } else if(bancoDeseado === 2) {
        escogioBanco = true
        infoBancoDeseado = bbva
    } else if(bancoDeseado === 3) {
        escogioBanco = true
        infoBancoDeseado = scotiabank
    } else if(bancoDeseado === 4) {
        escogioBanco = true
        infoBancoDeseado = bancoDelBienestar
    } else {
        //si no es ninguno de estos numeros vuelve a preguntar
        bancoDeseado = parseInt(
            prompt(
                'Escoge un numero de banco correcto  1)Santander - 2)Bbva - 3)Scotiabank - 4)HSBC - 5)Banco del Bienestar'
            )
        )
    }
}
//input para agregar el monto
const montoSolicitado = parseInt(prompt('Ingresa el monto que deseas solicitar: 1) 1000 a 12 meses - 2) 2000 mensuales a 24 meses - 3) 3000 mensuales a 36 meses'))


//datos para la funcion, con cada cuota
const cuota12 = calcularCuota(montoSolicitado, infoBancoDeseado.tasa12, 12)
const cuota24 = calcularCuota(montoSolicitado, infoBancoDeseado.tasa24, 24)
const cuota36 = calcularCuota(montoSolicitado, infoBancoDeseado.tasa36, 36)


//funcionar calcular cuota dependiendo de monto, intereses, meses
function calcularCuota(monto, interes, meses){
    const cuota = (monto + (monto * interes))/100/meses
    return cuota
}

document.querySelector('.result').innerHTML = 'Tu banco elegido es: ' + infoBancoDeseado.nombre
document.querySelector('.creditResult').innerHTML = `Las opciones que te ofrece ${infoBancoDeseado.nombre} son: <br><br>1) $${cuota12.toFixed(2)} pesos a 12 meses <br> 2) $${cuota24.toFixed(2)} pesos a 24 meses <br> 3) $${cuota36.toFixed(2)} pesos a 36 meses`