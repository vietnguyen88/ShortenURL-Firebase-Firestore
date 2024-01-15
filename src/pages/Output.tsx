import { useEffect, useState } from 'react'
import { useParams, useNavigation } from 'react-router-dom'

const Output = () => {
    const { code } = useParams()
    const navigate = useNavigation()
    const [originalURL, setOriginalURL] = useState('')

    useEffect(() => {
        setOriginalURL('https://google.com')
    }, [])

    useEffect(() => {

        // setOriginalURL('http://google.com')

        setTimeout(() => {
            window.location.href = originalURL
        }, 2000);
        console.log('load')
    }, [originalURL])
    return (
        <div>Redirect to : {originalURL}</div>
    )
}

export default Output