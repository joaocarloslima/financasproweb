import NavBar from "@/components/NavBar"
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default async function FormCategorias() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias" />

      <form action="" className="flex flex-col gap-4 p-6 m-6 bg-slate-900 rounded min-w-[500px]">
        <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>
        <Input 
          key="nome"
          label="Nome"
          name="nome"
          labelPlacement="outside"
        />

        <div className="flex justify-around">
          <Link href="/categorias">
            <Button variant="bordered">cancelar</Button>
          </Link>

          <Button type="submit" color="primary">salvar</Button>
        </div>
      </form>      
    </main>
  );
}
