import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {GlobalStyle} from "../assets/styles/GlobalStyle";
import {Helmet} from "react-helmet";
import style from 'index.css';



const Root = () => {
    const metaData = {
        title: 'Default Title',
        description: ' My Default Description'
    }

    const metaTitle = {
        title: 'My title'
    }
    useEffect(() => {
    //    Sanity API
    }, []);

    return (
        <>
            <Helmet>
                <title>{metaTitle.title}</title>
                <meta name="description" content={metaData.description} />
                <GlobalStyle/>
            </Helmet>
        </>
    )
}

export default Root;
