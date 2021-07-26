import React, { useState, useEffect } from "react"
import firebase from "../../firebase/firebase"
import { XIcon } from '@primer/octicons-react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


const override = css`
  display: block;
  margin: 0 auto;
`;

export const Profesionales = () => {
    const [profesional, setProfesional] = useState({ name: "" })
    const [profesionales, setProfesionales] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    console.log(profesional)

    useEffect(() => {
        setIsLoading(true)
        firebase.db.collection("profesionales").onSnapshot(querySnapshot => {
            const profesionales = []
            querySnapshot.docs.forEach(doc => {
                const { name, id } = doc.data()
                profesionales.push({
                    id: doc.id,
                    name
                })
            })
            setProfesionales(profesionales)
            setIsLoading(false)
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProfesional({ name: "" })
        await firebase.db.collection("profesionales").add(profesional)
    }


    const handleChange = (e) => {
        setProfesional({ name: e.target.value })

    }

    const deleteUser = async (id) => {
        const dbRef = firebase.db.collection("profesionales").doc(id)
        await dbRef.delete()
    }
    return <div className="w-75 m-auto">
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input value={profesional.name} type="text" onChange={handleChange} className="form-control" placeholder="Agregue un profesional" aria-label="Default" aria-describedby="inputGroup-sizing-default" />

            </div>
        </form>
        <h1 className="mt-5">Lista de profesionales</h1>
        {!isLoading ? <ul class="list-group list-group-flush mt-5">
            {profesionales.map(item => {
                return <li key={item.id} class="list-group-item mt-2 d-flex justify-content-between">
                    <div>{item.name}</div>
                    <button type="button" className="btn" onClick={() => deleteUser(item.id)} ><XIcon size={24} /></button>
                </li>
            })}
        </ul> : <div className="mt-5"><ClipLoader css={override} color={"black"} size={70} /> </div>}
    </div>
}