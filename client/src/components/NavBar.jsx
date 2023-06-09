import { useState } from "react";


const NavbarItem = ({ title, classProps }) => {

        
    return ( 
        <li className={`mx-4 cursor-pointer ${classProps}$`}>
            <a href={`/${title}`} className="nav-link nav-link:hover">
                {title}
            </a>
            
        </li>

    );
}

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return(
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <h1>Hello</h1>
            </div>
            <form action="/search" method="get" className="w-3/4 sm:w-1/2 lg:w-1/3">
                <input type="text" name="query" placeholder="Enter Serial Number" className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-full text-sm focus:outline-none" />
            </form>
            <button type="submit"  className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">Go</button>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Home", "Explore/Browse","My Profile"].map((item, index) => (
                    <NavbarItem  key={item+index} title={item}/>
                ))}
                <form  className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]" action="https://www.pinksale.finance" method="get" target="_blank">
                    <button type="submit">Login</button>
                </form>
                <form  className="bg-gray-500 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-green-800" action="https://www.pinksale.finance" method="get" target="_blank">
                    <button type="submit">Sign up</button>
                </form>
            </ul>   
        </nav>
    )
}

export default NavBar;
