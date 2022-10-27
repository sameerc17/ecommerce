import React from "react";
import { services } from '../data/introdata'
import styled from 'styled-components'
const HomeServices = () => {
    return <Wrapper className="section-center">
        {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
                <article key={id} className="service" >
                    <div className="div">
                        <span className="icon">{icon}</span>
                    </div>
                    <h3 className="h3">{title}</h3>
                    <p className="p">{text}</p>
                </article>
            )
        })}
    </Wrapper>
}

export default HomeServices;

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem
`