import { useEffect } from "react"

export default () => {
    useEffect(() => { console.log(123)}, [])
    return <h2>client about</h2>
}