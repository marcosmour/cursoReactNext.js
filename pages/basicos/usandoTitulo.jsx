import Titulo from "../../components/Titulo"

export default function usandoTitulo(){
    return(
        <div>
           <Titulo
              principal = "pagina de cadastro"
              secundario = "Incluir, alterar, e excluir coisas"
           />
           <Titulo
              terceiro = "pagina de login"
              quarto = "senha do usuario"
           />
        </div>
    )
}