import CardStats from "@/components/Card"
import MovimentacaoTable from "@/components/MovimentacaoTable";
import NavBar from "@/components/NavBar"
import { getMaiorValor, getMenorValor, getUltimas, getUltimoValor } from "./actions/movimentacoes/dashboard";
import { BarChartCategorias } from "@/components/BarChartCategorias";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { BarChart } from "lucide-react";
import { LineChatMovimentacoes } from "@/components/LineChartMovimentacoes";

export default async function Home() {

  const maior = {
    icon: "arrow-up",
    title: "Maior movimentação",
    value: await getMaiorValor()
  }

  const menor = {
    icon: "arrow-down",
    title: "Menor movimentação",
    value: await getMenorValor()
  }

  const ultimo = {
    icon: "calendar",
    title: "Última movimentação",
    value: await getUltimoValor()
  }

  const totais = [
    maior,
    menor,
    ultimo
  ]

  const ultimasMovimentacoes: Movimentacao[] = await getUltimas()

  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <NavBar active="dashboard"/>
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <section className="grid grid-flow-col-dense  gap-5">
        { totais.map( t => <CardStats {...t} /> ) }
      </section>

      <section className="flex gap-4">
        <Card>
          <CardHeader>
            <BarChart />
            <h3>Gastos por categoria</h3>
          </CardHeader>
          <CardBody>
            <BarChartCategorias />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <BarChart />
            <h3>Gastos por mês</h3>
          </CardHeader>
          <CardBody>
            <LineChatMovimentacoes />
          </CardBody>
        </Card>
      </section>

      <section>
        <h3 className="text-lg font-bold">Últimas movimentações</h3>
        <MovimentacaoTable data={ultimasMovimentacoes}  />
      </section>


    </main>
  );
}
