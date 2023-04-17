import {Outlet, Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

function Nav() {
    const location = useLocation()

    return (
        <>
        <nav className='pt-[1.5rem] pb-[.5rem] bg-white'>
            <ul className='flex justify-center gap-[3rem]'>
                <li className={location.pathname === "/" ? "border-b-4 border-black rounded-[.5rem]" : "border-b-4 rounded-[.5rem]"}>Sacola</li>
                <li className={location.pathname === "/pay" ? "border-b-4 border-black rounded-[.5rem]" : "border-b-4 rounded-[.5rem]"}>Pagamento</li>
                <li className={location.pathname === "/confirmPay" ? "border-b-4 border-black rounded-[.5rem]" : "border-b-4 rounded-[.5rem]"}>Confirmação</li>
            </ul>
        </nav>
            <Outlet/>
        </>
    )
}

export default Nav