import React from "react"

export const ImagesTab:React.FC = () => {
    return (
        <div>
            <img src={props.image}>
                {ReactDOM.createPortal(<Lightbox />, <App />)}
        </div>
    )
}