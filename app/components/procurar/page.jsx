import NavBar from "../../navbar"
import TitleBar from "../../titlebar"

export default function Procurar(){
    return(
        <div>
            <TitleBar />
            <h1>Procurar</h1>
            <input type="search" />
            <NavBar />
        </div>
    )
}