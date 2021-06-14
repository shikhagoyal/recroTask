import React from 'react'
import axios from 'axios'

export default function Api() {
    const handleApi = () => {
        axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=8`)
    }
    return (
        <div>
            
        </div>
    )
}
