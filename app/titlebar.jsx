import { space_grotesk } from "./fontes"

export default function TitleBar() {
    return (
        <div className="titlebar">
            <nav>
                <figure>
                    <h1 className={space_grotesk.className}>Vexly</h1>
                </figure>
            </nav>
        </div>
    )
}