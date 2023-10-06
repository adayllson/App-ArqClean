import Duracao from "../../shared/Duracao"
import Entidade from "../../shared/Entidade"
import NomeSimples from "../../shared/NomeSimples"

export interface CrusoProps {
    id?: string
    nome?: string
    duracao?: number
}

export default class Curso extends Entidade {
    readonly nome: NomeSimples
    readonly duracao: Duracao

    constructor(props: CrusoProps){
        super(props.id)
        // no momento de estanciar o objeto NomeSimples, podemos alterar a validação de quantitivo de caracteres,
        // mesmo já sendo definida na classe do objeto.
        this.nome = new NomeSimples(props.nome!, 4, 115)
        this.duracao = new Duracao(props.duracao!)
    }
}