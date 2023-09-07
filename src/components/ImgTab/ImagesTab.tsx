import React, {useState} from "react"
import {createUseStyles} from "react-jss";
import {Lightbox} from "../Lightbox";

type ImagesTabPropsType = {
    id: number,
    photos: string,
    likesCount: number,
    comments: Array<string>
}

export const ImagesTab: React.FC<ImagesTabPropsType> = (props) => {

    const styles = createUseStyles({
        imageTabWrapper: {
            width: '320px',
            height: '320px',
            borderRadius: '4px',
            margin: '4px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
        },
        img: {
            height: '100%',
            width: '100%',
            objectFit: 'cover'
        }
    })()
    const [isVisible, setVisible] = useState<boolean>(false)

    return (
        <>
            <div className={styles.imageTabWrapper} onClick={() => setVisible(true)}>
                <img src={props.photos} alt={`Images ID: ${props.id}`}
                     className={styles.img}
                />
            </div>
            {isVisible && <Lightbox {...props} cancelVisionMode={() => setVisible(false)} key={props.id}/>}
        </>
    )
}