import { useAtom } from 'jotai'
import { nameProduct, priceProduct, userCardNumber, userNameCard, userDateCard, userCardCvc } from "../atoms/StatesProducts.jsx";
import {Link} from "react-router-dom";

function Pag() {

    const [names, setNames] = useAtom(nameProduct)
    const [price, setPrice] = useAtom(priceProduct)

    const [numberCard, setNumberCard] = useAtom(userCardNumber)
    const [nameCard, setNameCard] = useAtom(userNameCard)
    const [dateCard, setDateCard] = useAtom(userDateCard)
    const [cvc, setCvc] = useAtom(userCardCvc)

    function handleClick() {

    }


    return (
        <div className=''>
            <div className='flex flex-col bg-white mt-[2rem] p-[1.5rem] mx-[1rem]'>
                <strong><h1 className='text-[1.25rem]'>Cartão de Crédito</h1></strong>
                <form className=''>
                    <label>
                        <p>Número</p>
                        <input type="text" value={numberCard} onChange={(e) => setNumberCard(e.target.value)} className='border-2 border-gray-300 rounded-[.5rem] w-[100%] px-[1rem] h-[2rem]' required/>
                    </label>

                    <label>
                        <p>Nome do titular do cartão</p>
                        <input type="text" value={nameCard} onChange={(e) => setNameCard(e.target.value)} className='border-2 border-gray-300 rounded-[.5rem] w-[100%] px-[1rem] h-[2rem]' required/>
                    </label>

                    <div className='flex justify-between'>
                        <label>
                            <p>Data de validade</p>
                            <input type="text" value={dateCard} onChange={(e) => setDateCard(e.target.value)} className='border-2 border-gray-300 rounded-[.5rem] w-[100%] px-[1rem] h-[2rem]' required/>
                        </label>

                        <label>
                            <p>CVC</p>
                            <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} className='border-2 border-gray-300 rounded-[.5rem] w-[100%] px-[1rem] h-[2rem]' required/>
                        </label>
                    </div>

                </form>
            </div>

            <div className='bg-white mt-[2rem] p-[2rem]'>
                <div className='flex justify-between'>
                    <p>Produtos: ({`${names.length} items`})</p>
                    <p>{`R$ ${price.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}`}</p>
                </div>

                <div className='flex justify-between'>
                    <strong><p>{`Subtotal`}</p></strong>
                    <strong><p>{`R$ ${price.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}`}</p></strong>
                </div>

                <div className='flex justify-center'>
                    <button  className='bg-[#9222DC] text-white rounded-[.5rem] w-[20rem] h-[3rem] mt-[1.5rem]'>Finalizar Pagamento</button>
                </div>
            </div>
        </div>

    )
}

export default Pag