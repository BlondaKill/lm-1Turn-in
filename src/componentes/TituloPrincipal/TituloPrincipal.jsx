import React from 'react'

//desectructuracion (props)

const TituloPrincipal = ({titulo,style}) => {
    return (
    <>
        <h1> {titulo} </h1>
        <h2> Your Own Style {style} </h2>

    </>
    )
}

export default TituloPrincipal