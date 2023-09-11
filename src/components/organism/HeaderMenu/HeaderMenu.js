import React from 'react'
import HeaderMenuSocial from "../../molecules/HeaderMenuSocial/HeaderMenuSocial";


const HeaderMenu = () => {
    return (
            <div className='header-menu bg-bgColor w-full h-[100%] fixed z-10 top-0 bottom-0 right-0 left-0'>
                <div className='py-2 h-full min-h-[600px] container_lg pt-[100px]'>
                    <div className='flex h-full'>
                        <div className='w-[50%] h-full border-r-[1px] border-solid border-amber-50 flex '>
                            <HeaderMenuSocial/>
                        </div>
                        <div>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="">Work</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="">Carrers</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="">Ideas</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default HeaderMenu
