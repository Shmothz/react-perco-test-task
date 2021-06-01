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
        likesWrapper: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '8px',
        },
        commentsWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '8px',
        },
        commentWrapper: {
            padding: '4px',
            borderRadius: '4px'
        },
        comment: {
            color: 'white',
            margin: '4px',
            padding: '2px',
            background: {
                color: 'rgba(150,150,200,1)',
            },
            border: {
                radius: '6px'
            },
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        },
        formWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px'
        },
        btn: {
            border: 'none',
            outline: 'none',
            background: 'rgba(150,150,200,1)',
            padding: '8px',
            marginLeft: '8px'
        },
        inputField: {
            resize: 'none',
            width: '100%',
            flexGrow: '1',
            border: 'none',
            outline: 'none',
        }
    })()


    const onSubmit = (values: Values) => {
        addNewComment({index: id - 1, newCommentText: values.newComment})
        // useForm('newComment').reset()
    }
    return <div className={styles.lightboxInfoWrapper} onClick={e => e.stopPropagation()} key={id}>
        <div className={styles.likesWrapper}>
            Нравится: {likesCount}
        </div>
        <div className={styles.commentsWrapper}>
            {comments.length === 0
                ? 'Пока что никто не оставил комментарий, Вы будете первыми'
                : comments.map(i => <div key={i} className={styles.comment}>{i}</div>)}
        </div>
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form
                    onSubmit={event => {
                        handleSubmit(event)
                        form.reset()
                    }}
                    className={styles.formWrapper}
                >
                    <Field name="newComment" component="textarea" placeholder="Новый комментарий!"
                           className={styles.inputField}
                           rows='3'/>
                    <button type="submit" disabled={submitting || pristine} className={styles.btn}>
                        Submit
                    </button>
                </form>
            )}
        />
    </div>
}