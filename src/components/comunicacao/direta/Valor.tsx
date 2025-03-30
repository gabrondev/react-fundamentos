interface ValorProps {
    texto: string
}

export default function Valor(props: ValorProps) {
    return (
        <div className="bg-green-800 p-4 rounded-md text-8xl font-black">
            {props.texto}
        </div>
    )
}