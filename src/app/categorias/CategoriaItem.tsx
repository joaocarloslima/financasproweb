import DropDownActions from "@/components/DropDownActions";
import { Icon } from "@/components/Icon";

interface CategoriaItemProps{
    categoria: Categoria
}

export function CategoriaItem(props: CategoriaItemProps) {
    const categoria = props.categoria

    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                <Icon name={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>
            <DropDownActions />
        </div>
    )
}