import React  from "react";
import {GlobalStyle} from "../assets/styles/GlobalStyle";
import style from 'index.css'
import Header from "../components/templates/Header/Header";
import Footer from '../components/templates/Footer/Footer'
import Home from "../pages/Home";



const Root = () => {

    return (
        <>
            <GlobalStyle/>
            <div className='mx-auto w-full'>

                <div className='' >
                    <Header/>
                    <Home/>
                    <Footer/>
                </div>
            </div>


        </>
    )
}

export default Root;
