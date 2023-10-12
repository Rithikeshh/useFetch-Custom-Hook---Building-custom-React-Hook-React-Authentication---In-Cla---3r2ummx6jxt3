//write your code here

import { useEffect, useState } from "react";

function callApi(setLoading, setData, setError, api){
    // try{
        fetch(api).then((response)=>{
            return response.json()
        }).then((result)=>{
            setData(result)
        }).catch((e)=>{

            setError(e)
        })
        // console.log('hi')
    // }
    setLoading(false)
}
export default function useFetch(api){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        callApi(setLoading, setData, setError, api)
    },[api])

    return {
        data,
        loading,
        error
    }
}
