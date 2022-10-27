import React from "react";
import { BiNotepad } from 'react-icons/bi'
import {BsFillEyeFill} from 'react-icons/bs'
import {RiReactjsLine} from 'react-icons/ri'

export const services = [
    {
        id: 1,
        icon: <RiReactjsLine />,
        title: 'our Mission',
        text:
            'To serve consumers through online and physical stores and focus on selection, price, and convenience. Carry on with the value that drives us give out the best in doing office, educational and home furniture business.',
    },
    {
        id: 2,
        icon: <BsFillEyeFill />,
        title: 'our vision',
        text:
            'To be Earth’s most customer-centric company, where customers can find and discover anything they might want to buy online, and endeavors to offer its customers the lowest possible prices.',
    },
    {
        id: 2,
        icon: <BiNotepad />,
        title: 'our objectives',
        text:
            'To provide one stop solutions including supply of different furniture brands as per the customer requirements and meet their expectations with the right coordination with architects / interior designers.',
    }
]