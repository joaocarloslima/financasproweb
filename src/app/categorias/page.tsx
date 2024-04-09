import NavBar from "@/components/NavBar"
import { Apple, ChevronDown, Plus } from "lucide-react";
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/react";

export default function Categorias() {
  
  const categorias = [
    {
      id: 1,
      nome: "alimentação",
      icone: "apple"
    },
    {
      id: 2,
      nome: "transporte",
      icone: "bus"
    },
    {
      id: 3,
      nome: "educação",
      icone: "book"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias" />

      <section className="flex flex-col gap-5 bg-slate-900 p-6 mt-6 rounded min-w-96">

        <div className="flex justify-between gap-4">
          <h2 className="text-2xl font-bold">Categorias Cadastradas</h2>
          <Button color="primary" startContent={<Plus size={18} />}>nova categoria</Button>
        </div>

        {categorias.map(categoria => <CategoriaItem categoria={categoria} /> )}

      </section>
      
    </main>
  );
}
