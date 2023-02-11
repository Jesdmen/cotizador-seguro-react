export function obtenerDiferenciaYear (year) {
    return new Date().getFullYear() - year;
}

//El parametro marca recibe datos.marca, el cual es un numero en un string, con el switch comprobamos los casos y de acuerdo a la opción elegida nos arroja un incremento, que se retorna al finalizar la función
export function calcularMarca (marca) {
    let incremento;

    switch(marca){
        case "1":
            incremento = 1.15;
            break;
        case "2":
            incremento = 1.10;
            break;
        case "3":
            incremento = 1.05;
            break;
        default : break;
    }
    return incremento;
}

export function calcularPlan(plan) {
    return plan === "1" ? 1.1 : 1.3;
}

export function formatearDinero(cantidad) {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }


