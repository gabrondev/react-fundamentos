import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";
import AreaLateral from "./AreaLateral";

interface PaginaProps {
    titulo: string
    subtitulo: string
    children: any
}

export default function Pagina(props: PaginaProps) {
    const ano = new Date().getFullYear()

    return (
        <div className="flex h-screen">
            <AreaLateral />
            <div className="flex flex-col flex-1">
                <Cabecalho
                    titulo={props.titulo}
                    subtitulo={props.subtitulo}
                    className="h-16 bg-zinc-800"
                />
                <Conteudo>
                    {props.children}
                </Conteudo>
                <Rodape
                    textoEsquerdo="Feito com ❤️ usando React e Next"
                    textoDireito={`Desenvolvido em ${ano}`}
                />
            </div>
        </div>
    )
}