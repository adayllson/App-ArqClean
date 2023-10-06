import Entidade from "../../shared/Entidade"
import NomeSimples from "../../shared/NomeSimples"

export interface CrusoProps {
    id?: string
    nome?: string
}

export default class Curso extends Entidade {
    readonly nome: NomeSimples

    constructor(props: CrusoProps){
        super(props.id)
        this.nome = new NomeSimples(props.nome!)
    }
}