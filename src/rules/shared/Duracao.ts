export default class Duracao {
    constructor(
        readonly emSegundos: number,
    ) {
        if(!emSegundos)
            throw new Error ("Duração é obrigatória")
        if (emSegundos <= 0) 
            throw new Error("Duração deve ser maior que zero")
    }
}