"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){

    await new Promise(r => setTimeout(r, 4000))
    

    const data = {
        nome: formData.get("nome"),
        icone: formData.get("icone")
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch("http://localhost:8080/categoria", options)

    if (resp.ok){
        redirect("/categorias")
    }

    if (resp.status == 400){
        return {
            message: "campo nome é obrigatório"
        }
    }


}