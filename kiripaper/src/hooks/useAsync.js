
import { useState, useEffect } from 'react'


export const useAsync = (asynFunc, dependencies = []) => {
    const [data, setData] = useState ([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    if (!Array.isArray(dependencies)){
        dependencies = []
    }

    useEffect(()=>{
        setLoading(true)

        asynFunc().then(response =>{
            setData(response)
        }).catch(error =>{
            setError(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, dependencies)

    return {
        data,
        error,
        loading
    }
}