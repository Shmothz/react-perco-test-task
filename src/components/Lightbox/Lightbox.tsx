import React from "react"
import ReactDOM from "react-dom";
import {createUseStyles} from "react-jss";
import {LightboxInfo} from "./LightboxInfo";

type LightboxPropsType = {
    id: number,
    photos: string,
    likesCount: number,
    comments: Array<string>,
    cancelVisionMode: () => void
}

export const Lightbox:React.FC<LightboxPropsType> = (props) => {

    const appRoot = document.getElementById('root') as HTMLElement

    const styles = createUseStyles({
        lightboxWrapper: {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            zIndex: '1',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            cursor: 'pointer'
        },
        ligthboxImg: {
            cursor: 'default',
            width: '90%',
        }
    })()

    return ReactDOM.createPortal(
        <div className={styles.lightboxWrapper} onClick={() => {
            props.cancelVisionMode()
        }}>
            <img className={styles.ligthboxImg}
                 src={props.photos}
                 alt={`Images ID: ${props.id}`}
                 onClick={e => e.stopPropagation()}
            />
            <LightboxInfo comments={props.comments} likesCount={props.likesCount} id={props.id}/>
        </div>
        , appRoot)
}