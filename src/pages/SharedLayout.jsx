import {Outlet, Link} from "react-router-dom";

function Nav() {
    return (
        <>
        <nav className='pt-[1.5rem] pb-[.5rem] bg-white border-b-4'>
            <ul className='flex justify-center gap-[3rem]'>
                <li>Sacola</li>
                <li>Pagamento</li>
                <li>Confirmação</li>
            </ul>
        </nav>
            <Outlet/>
        </>
    )
}

export default Nav