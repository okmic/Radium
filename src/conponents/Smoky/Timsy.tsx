import React from "react"
import "./tipsy.css"

type PropsType = {
    time?: number
    back: boolean
    setOrder?: () => void
}

export const Tipsy: React.FC<PropsType> = ({ time, back, setOrder }) => <>
    {back
        ? <b>Back in {time} sec.</b>
        : <button className="glo" onClick={setOrder}>Text removed! Click to bring it back</button>
    }
</>