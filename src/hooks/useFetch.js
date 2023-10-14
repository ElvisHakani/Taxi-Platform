import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{

        setData(null)
        setIsPending(true)
        setError(null)

        fetch(url)
        .then(res => {
            if(!res.ok) throw Error('Lidhja me DB deshtoi')
            return res.json()
        })
        .then(serverData => {
            setData(serverData);
            setIsPending(false);
            setError(null)
        })
        .catch(error => {
            setError(error.message)
            setData(null)
            setIsPending(false)
        })

    },[url])

    return {data, isPending, error}
}

export default useFetch;