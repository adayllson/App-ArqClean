export default class NomeSimples {
    constructor(readonly completo: string, readonly min: number = 3, readonly max: number = 120) 
    {
        if(min > max) 
            throw new Error ('Tamanho mínimo não pode ser maior que o máximo!')

        if(!completo) 
            throw new Error ('Nome é obrigatório!')

        if(completo.length < min) 
            throw new Error (`Nome deve ter no mínimo ${min} caracteres.`)

        if(completo.length > max) 
            throw new Error (`Nome deve ter no máximo ${max} caracteres.`)

        // não pode conter caracteres especiais, mas pode acentos

        // if(!completo.match(/^[a-zA-ZÀ-ú0-9\u00C0-\u017F ] +$/)) 
        //     throw new Error ('Nome não pode ter caracteres especais')
    }

    //
    parcial(qtde: number){
        return this.completo.substring(0, qtde) ?? ""
    }
    
}