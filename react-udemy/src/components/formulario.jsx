import React, {useState} from "react"

const Formulario = () => {
    const [nombre, setNombre] = useState([])
    const [edad, setEdad] = useState([])

    const Validar = (event) =>{
        event.preventDefault()
        console.log("Boton pulsado")
        if(!nombre.trim){
            console.log("Nombre vacio")
            return
        }
        if(!edad.trim){
            console.log("Edad vacio")
            return
        }
    }


    return (
        <div className="container">
            <form onSubmit={Validar} className="form-group m-3">
                <input placeholder="Nombre" className="form-control mb-3" type="text" onChange= {(e) => {setNombre(e.target.value)}}/>
                <input placeholder="Edad" className="form-control mb-3" type="text" onChange= {(e) => {setEdad(e.target.value)}}/>                                
                <input className="btn btn-info btn-block mb-3" type="submit"/>
            </form>
        </div>
    )
}

export default Formulario