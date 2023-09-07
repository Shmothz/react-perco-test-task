import React, {useEffect} from 'react'
import {ImagesTab} from "./components/ImgTab"
import {useStore} from "effector-react";
import $store, {fetchPhotocardsFx} from "./effector/effector";
import {createUseStyles} from "react-jss";


export const App: React.FC = () => {

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

    useEffect(() => {
        fetchPhotocardsFx()
    }, [])

    const {photocards, loading, error} = useStore($store)


    if (loading) return <div>loading...</div>

    if (error) return <div>error...</div>

    return (
        <div className={styles.galleryWrapper}>
            {photocards.map(i => {
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
