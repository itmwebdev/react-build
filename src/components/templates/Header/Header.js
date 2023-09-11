import React from 'react'
import HeaderMenuLogo from "../../atoms/HeaderLogo/HeaderMenuLogo";
import HeaderMenu from "../../organism/HeaderMenu/HeaderMenu";
import HeaderMenuBtn from "../../atoms/HeaderMenuBtn/HeaderMenuBtn";

const Header = () => {
    return (
        <div>
           <header>
               <div className='container_lg flex justify-between items-center h-[80px] pb-1'>
                   <HeaderMenuLogo/>
                   <HeaderMenuBtn/>
               </div>
           </header>
           <HeaderMenu/>
        </div>

    )
}
export default Header
