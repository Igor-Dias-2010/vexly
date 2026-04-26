import Image from "next/image"

export default function TitleBar() {
    return (
        <div className="titlebar">
            <nav>
                <figure>
                    <Image src={'/vexly-logo-oficial-removebg-preview.png'} alt="Logo do Vexly" width={270} height={170} />
                </figure>
            </nav>
        </div>
    )
}