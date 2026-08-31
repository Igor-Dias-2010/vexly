import NavBar from "../../navbar"
import TitleBar from "../../titlebar"

export default function Procurar(){
    return(
        <div>
            <TitleBar />
            <h1>Pesquisar</h1>
            <input type="search" placeholder="Pesquisar" />
            <NavBar />
        </div>
    )
}