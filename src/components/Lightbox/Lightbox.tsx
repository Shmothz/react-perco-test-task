import React from "react"
import ReactDOM from "react-dom";
import {createUseStyles} from "react-jss";
import {LightboxInfo} from "./LightboxInfo";
import {addNewLike} from "../../effector/effector";

type LightboxPropsType = {
    id: number,
    photos: string,
    likesCount: number,
    comments: Array<string>,
    cancelVisionMode: () => void
}

export const Lightbox: React.FC<LightboxPropsType> = (props) => {

    const appRoot = document.getElementById('root') as HTMLElement

    const styles = createUseStyles({
        lightboxBackground: {
            position: 'fixed',
            zIndex: '1',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            backgroundColor: 'rgba(0,0,0,0.5)',
        },
        lightboxWrapper: {
            position: 'absolute',
            top: '0',
            left: '0',
            padding: '40px 0',
            width: '100%',
            zIndex: '2',
            display: 'flex',
            // justifyContent: 'center',
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
        <>
            <div className={styles.lightboxBackground}></div>
            <div className={styles.lightboxWrapper} onClick={() => {
                props.cancelVisionMode()
            }}>
                <img className={styles.ligthboxImg}
                     src={props.photos}
                     alt={`Images ID: ${props.id}`}
                     onClick={e => e.stopPropagation()}
                     onDoubleClick={() => {addNewLike({index: props.id - 1})}}
                />
                <LightboxInfo comments={props.comments} likesCount={props.likesCount} id={props.id}/>
            </div>
        </>
        , appRoot)
}