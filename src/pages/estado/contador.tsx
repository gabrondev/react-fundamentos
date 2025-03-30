import Pagina from '@/components/Pagina'
import { IconSquareRoundedMinusFilled, IconSquareRoundedPlusFilled } from '@tabler/icons-react'
import { useState } from 'react'

export default function Contador() {
    const [numero, setNumero] = useState(0)

    function adicionar() {
        setNumero(numero + 1)
    }

    function subtrair() {
        setNumero(numero - 1)
    }

    return (
        <Pagina titulo="Contador" subtitulo='Resposta do desafio do contador'>
            <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
                <div className='text-9xl font-black'>{numero}</div>
                <div>
                    <button onClick={adicionar}><IconSquareRoundedPlusFilled size={45} /></button>
                    <button onClick={subtrair}><IconSquareRoundedMinusFilled size={45} /></button>
                </div>
            </div>
        </Pagina >
    )
}