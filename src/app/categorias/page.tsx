import NavBar from "@/components/NavBar"
import { Apple, ChevronDown, Plus } from "lucide-react";
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default async function Categorias() {

  async function getCategorias(){
    const resp = await fetch("http://localhost:8080/categoria", { next: {revalidate: 0}})
    return await resp.json()
  }
  
  const categorias : Array<Categoria> = await getCategorias()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias" />

      <section className="flex flex-col gap-5 bg-slate-900 p-6 mt-6 rounded min-w-96">

        <div className="flex justify-between gap-4">
          <h2 className="text-2xl font-bold">Categorias Cadastradas</h2>
          <Link href="/categorias/new">
            <Button color="primary" startContent={<Plus size={18} />}>
              nova categoria
            </Button>
          </Link>
        </div>

        {categorias.map(categoria => <CategoriaItem categoria={categoria} /> )}

      </section>
      
    </main>
  );
}
