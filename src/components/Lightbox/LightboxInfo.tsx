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

export const LightboxInfo: React.FC<LightboxInfoPropsType> = ({id, likesCount, comments}) => {
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


    const onSubmit = (values: Values) => {
        addNewComment({index: id - 1, newCommentText: values.newComment})
        // useForm('newComment').reset()
    }
    return <div className={styles.lightboxInfoWrapper} onClick={e => e.stopPropagation()} key={id}>
        <div className={styles.likesWrapper}>
            {likesCount}
        </div>
        <div className={styles.commentsWrapper}>
            {comments.map(i => <div key={i}>{i}</div>)}
        </div>
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form
                    onSubmit={event => {
                        handleSubmit(event)
                        form.reset()
                    }}
                >
                    <div>
                        <label>Notes</label>
                        <Field name="newComment" component="textarea" placeholder="Новый комментарий!"/>
                    </div>
                    <div>
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        />
    </div>
}