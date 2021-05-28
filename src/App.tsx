import React from 'react'
import {ImagesTab} from "./components/ImgTab/ImagesTab"
import {useStore} from "effector-react";
import $store from "./effector/effector";
import {createUseStyles} from "react-jss";


const App: React.FC = () => {

    const styles = createUseStyles({
        galleryWrapper: {
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '1000px',
            justifyContent: 'center',
            margin: '0 auto',
            backgroundColor: 'turquoise'
        }
    })()

    const getImagesData = useStore($store)

    return (
        <div className={styles.galleryWrapper}>
            {getImagesData.map(i => {
                return <ImagesTab key={i.id}
                                  id={i.id}
                                  photos={i.photos}
                                  likesCount={i.likesCount}
                                  comments={i.comments}
                />
            })}
        </div>
    )
}

export default App
