import React, { useRef, useEffect } from 'react';
import ScrollToBottom from './react-scroll-to-bottom';
import Message from './Message';

const Chat = ({ messages }) => {
    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
