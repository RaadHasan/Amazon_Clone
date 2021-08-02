import React from 'react';
import { useState, useEffect, useCallback } from 'react';

export default function useFetch(url) {
    const [data,setData] = useState([]);

    const fetchData = async (url) =>{
        const resp = await fetch(url);
        const data = await resp.json();
        setData(data);
        // console.log(data);
    };

    useEffect (()=>{
        fetchData(url);
    },[url,fetchData]);
    return {data};
}
