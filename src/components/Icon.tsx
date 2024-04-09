import { Apple, Book, Bus } from "lucide-react";

interface IconProps {
    name: string,
}

const icons: { [key: string]: JSX.Element } = {
    apple: <Apple />,
    bus: <Bus />,
    book: <Book />
}

export function Icon({name}: IconProps){

    return icons[name]
  
}