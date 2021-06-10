import React, {useState} from "react"
import uniqid from "uniqid"


const Listado = () =>{

    const [nombre, setNombre] = useState("")
    const [listaNombres, setListaNombres] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState("")
    const [error, setError] = useState(null)

    const addNombre = (e) =>{
        e.preventDefault()
        if(!nombre.trim()){
            setError("El campo nombre esta vacío")
            return
        }
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre: nombre
        }
        setListaNombres([...listaNombres,nuevoNombre])
        setNombre("")
        setError(null)
    }

    const deleteNombre = (id) => {
        const nuevaArray = listaNombres.filter( item => item.id !== id)
        setListaNombres(nuevaArray)
    } 

    const editar = (item) => {
        setModoEdicion(true)
        setNombre(item.tituloNombre) 
        setId(item.id)
    }
    const editarNombre = (e) => {
        e.preventDefault()
        const nuevaArray = listaNombres.map( item => item.id === id ? {id:id, tituloNombre:nombre} : item)
        setListaNombres(nuevaArray)
        setModoEdicion(false)
        setNombre("")
    }

    

    return (
        <div>
            <div className="row m-10">
                <div className="col m-10"><h2>Listado de nombres</h2>
                    <ul className="list-group">
                        { 
                            listaNombres.map(item =>
                             <li key={item.id} className="list-group-item">{item.tituloNombre}
                                <button onClick={() => (deleteNombre(item.id))} className="btn btn-danger float-right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </button>
                                <button className="btn btn-info float-right" onClick={() => editar(item)}>Editar</button>
                             </li>
                         )
                        } 
                    </ul>
                </div>

                <div className="col">
                    <h2>Añadir nombres</h2>
                    <form onSubmit={modoEdicion ? editarNombre : (e)=> addNombre(e)} className="form-group ">
                        <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} className="form-control mb-3" type="text" placeholder={modoEdicion ? "Editar" : "Nombre"}/>
                        <input className="btn btn-info btn-block" type="submit" value={modoEdicion ? "Guardar cambio" : "Registrarse"} />
                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger"> 
                                {error}
                            </div>
                        ): 
                        (
                            <div>

                            </div>
                        )    
                    }
                </div>    
    
            </div>                 
        </div>
    )
}

export default Listado