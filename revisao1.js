// 1)

let _numero = 10;

let resultado = _numero < 0 ? "O valor número é um Número negativo" : "O valor número é um Número positivo";
console.log(resultado);

// 2)

var a = 10;
var b = 15;
var c = 5;

if (a + b > c){
   console.log(a + c);
}
else{
    console.log(a + c == b);
}

// 3)

let _horario1 = "matutino"
let _horario2 = "vespertino"
let _horario3 = "noturno"

switch(_horario3){
    case "matutino":
        console.log("Bom Dia!");
        break;
        case "vespertino":
            console.log("Boa Tarde!");
            break;
            case "noturno":
                console.log("Boa Noite!");
                break;
                default:
                    console.log("Valor Inválido!")
}


