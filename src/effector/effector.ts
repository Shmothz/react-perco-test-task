import {createEffect, createEvent, createStore} from "effector";
import {IPhotocard} from "../types";

const defaultState = {
    photocards: [],
    loading: false,
    error: false
} as PhotocardsStore

export type PhotocardsStore = {
    photocards: IPhotocard[]
    loading: boolean
    error: boolean
}
type AddNewComment = {
    index: number,
    newCommentText: string
}
type AddNewLike = {
    index: number
}

export const fetchPhotocardsFx = createEffect<void, IPhotocard[], Error>(async () => {
    const res = await fetch('http://localhost:4000/photocards')
    return res.json()
})


fetchPhotocardsFx.done.watch(({result}) => {
    console.log(result)
})
fetchPhotocardsFx.fail.watch(({error}) => {
    alert(`С приложением случилась какая-то чушь... ${error}`)
})

export const addNewComment = createEvent<AddNewComment>()
export const addNewLike = createEvent<AddNewLike>()

const $store = createStore<PhotocardsStore>(defaultState)
    .on(fetchPhotocardsFx.done, (state,{result}) => {
        state.photocards = result
        return {...state}
    })
    .on(fetchPhotocardsFx.fail, (state, {error}) => {
        state.photocards = []
        state.error = true
        return {...state}
    })

export default $store