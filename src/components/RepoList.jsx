import React, { useEffect } from 'react'

const RandomImage = () => {
    const [image, setImage] = React.useState("")

    useEffect(()=>{
        fetch("")
        .then(res => res.json())
        .then(data => setImage(data.message))
        .catch(e => console.log(e))
    }, [])

    if(!image)return <h1>Loading...</h1>
  return (
    <div>
        <img src={image} alt="" />
    </div>
  )
}

export default RepoList