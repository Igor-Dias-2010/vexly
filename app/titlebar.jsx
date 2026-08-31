import Image from "next/image"

export default function TitleBar() {
    return (
        <div className="titlebar">
            <nav>
                <figure>
                    <Image src={'/vexly-logo.png'} alt="Logo do Vexly" width={270} height={170} loading="eager" draggable="false" />
                </figure>
            </nav>
        </div>
    )
}