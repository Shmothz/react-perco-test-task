import React from "react"
import {Field, Form} from "react-final-form"
import {createUseStyles} from "react-jss"
import {addNewComment} from "../../effector/effector";

type LightboxInfoPropsType = {
    likesCount: number,
    comments: Array<string>,
    id: number
}
type Values = {
    newComment: string
}

export const LightboxInfo: React.FC<LightboxInfoPropsType> = (props) => {

    const styles = createUseStyles({
        lightboxInfoWrapper: {
            width: '90%',
            background: {
                color: 'cyan'
            },
            cursor: 'default'
        },
        likesWrapper: {},
        commentsWrapper: {},
        commentWrapper: {
            padding: '4px',
            borderRadius: '4px'
        }
    })()
    const onSubmit = (values:Values) => {
        addNewComment({index: props.id - 1, newCommentText: values.newComment})
    }

    return <div className={styles.lightboxInfoWrapper} onClick={e => e.stopPropagation()} key={props.id}>
        <div className={styles.likesWrapper}>
            {props.likesCount}
        </div>
        <div className={styles.commentsWrapper}>
            {props.comments.map(i => <div key={i}>{i}</div>)}
        </div>
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Новый комменатарий</label>
                        <Field name="newComment" component="textarea" placeholder='Как Вам фотография?' />
                        <button type='submit'>Отправить комментарий</button>
                    </div>
                </form>
            )}
        />
    </div>
}