import React from "react"
import "./tipsy.css"

type PropsType = {
    time?: number
    back: boolean 
    setOrder?: () => void
}

export const Tipsy: React.FC<PropsType> = ({time, back, setOrder}) => <>
{back 
?<b>Текст вернется через {time} сек.</b>
:<button className="glo" onClick={setOrder}>Текст удален! Кликнете что-бы вернуть его обратно</button>
}
</>