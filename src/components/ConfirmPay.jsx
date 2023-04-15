import { useAtom } from 'jotai'
import { nameProduct, priceProduct, imgProduct, userCardNumber, userNameCard, userDateCard, userCardCvc } from "../atoms/StatesProducts.jsx";
import {Link} from "react-router-dom";

function ConfirmPay() {

    const [names, setNames] = useAtom(nameProduct)
    const [price, setPrice] = useAtom(priceProduct)
    const [img, setImg] = useAtom(imgProduct)

    const [numberCard, setNumberCard] = useAtom(userCardNumber)
    const [nameCard, setNameCard] = useAtom(userNameCard)
    const [dateCard, setDateCard] = useAtom(userDateCard)
    const [cvc, setCvc] = useAtom(userCardCvc)

    return (
        <div>
            <div className='flex flex-col items-center bg-white mt-[2rem] p-[1.5rem] mx-[1rem] gap-[.5rem]'>
                <strong><h1 className='text-[1.2rem]'>Compra efetuada com sucesso</h1></strong>
                <p>{`****.****.****.${numberCard.slice(-4)}`}</p>
                <p>{nameCard}</p>
                <p>{dateCard}</p>
            </div>

            <div className='bg-white mt-[2rem] mx-[1rem]'>
                <strong><h1 className='pt-[2rem] pl-[2rem] text-[1.2rem]'>Produtos</h1></strong>

                <div className='flex flex-col items-center py-[1rem] rounded-[.5rem]'>
                    {names.map((name, index) => (
                        <div className='flex bg-white items-center w-[95%] gap-[0.938rem] p-[1.5rem] justify-between ' key={index}>
                            <img src={img[index]} alt="" />
                            <p className='w-[20rem] text-[.80rem]'>{name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-white p-[2rem] mt-[2rem]'>
                <div className='flex justify-between'>
                    <p>Produtos: ({`${names.length} items`})</p>
                    <p>{`R$ ${price.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</p>
                </div>
                <div className='flex justify-between'>
                    <strong><p className='text-[1.2rem]'>{`Subtotal `}</p></strong>
                    <strong><p className='text-[1.2rem]'>{`R$ ${price.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</p></strong>
                </div>
                <div className='flex justify-center'>
                    <Link to='/'><button className='bg-black text-white rounded-[.5rem] w-[20rem] h-[3rem] mt-[1.5rem]'>Voltar ao inicio do protótipo </button></Link>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPay