import {useEffect} from "react";
import {Link} from "react-router-dom";
import { useAtom } from 'jotai'
import { nameProduct, imgProduct, priceProduct } from "../atoms/StatesProducts.jsx";

function Bag() {
    const [names, setNames] = useAtom(nameProduct)
    const [price, setPrice] = useAtom(priceProduct)
    const [img, setImg] = useAtom(imgProduct)

    useEffect(() => {

        fetch("https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd")
            .then(response => response.json())
            .then(data => {
                //console.log(data.items)

                //Pega os nomes dos produtos e coloca em um array
                const getNames = data.items.map((item => item.product.name))
                setNames(getNames)

                //Pega os preços do prduto e coloca em um array
                const getPrice = data.items.map(item => item.product.priceSpecification.price)
                setPrice(getPrice)

                //Pega um array de imagens
                const getImgs = data.items.flatMap(item => item.product.imageObjects)

                //Pega o array de imagens e coloca em um array
                const getThumbnails = getImgs.map(img => img.thumbnail)
                setImg(getThumbnails)

                localStorage.setItem('names', JSON.stringify(getNames))
                localStorage.setItem('price', JSON.stringify(getPrice))
                localStorage.setItem('img', JSON.stringify(getThumbnails))
            })
    }, [])

    return (
        <div>

                <div className='flex flex-col items-center py-[2rem] rounded-[.5rem]'>
                    {names.map((name, index) => (
                        <div className='flex bg-white items-center w-[95%] gap-[0.938rem] p-[1.5rem] justify-between ' key={index}>
                            <img src={img[index]} alt="" />
                            <p className='w-[15rem] text-[.75rem]'>{name}</p>
                            <p><strong>R$ {price[index]}</strong></p>
                        </div>
                    ))}
                </div>


            <div className='bg-white p-[2rem]'>
                <div className='flex justify-between'>
                    <p>Produtos: ({`${names.length} items`})</p>
                    <p>{`R$ ${price.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}`}</p>
                </div>
                <div className='flex justify-between'>
                    <strong><p>{`Subtotal `}</p></strong>
                    <strong><p>{`R$ ${price.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}`}</p></strong>
                </div>
                <div className='flex justify-center'>
                    <Link to='pay'><button className='bg-[#9222DC] text-white rounded-[.5rem] w-[20rem] h-[3rem] mt-[1.5rem]'>Seguir para o pagamento</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Bag