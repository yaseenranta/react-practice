
import { useState, useEffect } from "react"

export const useApi = (endpoint,type, postData = null) => {

    const [data, setData]      = useState([])
    const [loading, setLoading]= useState(false)
    const [error, setError]    = useState('')
    const [status, setStatus]  = useState('')
    
    useEffect( () => {

        const requestOptions = {
            method: type,
            headers: {
                "Content-Type": "application/json",
            },
            body: (postData != null) ? JSON.stringify(postData) : null,
        }

        fetch(endpoint, requestOptions)
        .then( (res) => {

            setStatus(res.status)

            if (res.status === 401) {
                throw new Error("Unauthorized")
            } else if (res.status !== 200) {
                if (type === "DELETE") throw new Error("Unable to delete record")
                if (type === "GET") throw new Error("Unable to fetch records")
                if (type === "POST") throw new Error("Unable to save record")
                if (type === "PUT") throw new Error("Unable to save record")
            }
            
            return res.json()
        })
        .then( (data) => {
            setLoading(true)
            setData(data)
        }).catch( (error) => {
            setLoading(true)
            setError(error)
        })
    },[endpoint,postData,type])
    
    return {
        loading,
        data,
        error,
        status,
    }
}
