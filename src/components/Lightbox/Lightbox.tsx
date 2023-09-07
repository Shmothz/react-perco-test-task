import React, {SetStateAction} from "react"
import ReactDOM from "react-dom";
import {createUseStyles} from "react-jss";
import {LightboxInfo} from "./LightboxInfo";
import {addNewLike} from "../../effector/effector";
import {IPhotocard} from "../../types";

type LightboxPropsType = {
    item: IPhotocard
    toggleVisible: React.Dispatch<SetStateAction<boolean>>
}

export const Lightbox: React.FC<LightboxPropsType> = ({item, toggleVisible}) => {

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
                toggleVisible(false)
            }}>
                <img className={styles.ligthboxImg}
                     src={item.photos}
                     alt={`Images ID: ${item.id}`}
                     onClick={e => e.stopPropagation()}
                     onDoubleClick={() => {addNewLike({index: item.id - 1})}}
                />
                <LightboxInfo comments={item.comments} likesCount={item.likesCount} id={item.id}/>
            </div>
        </>
        , appRoot)
}