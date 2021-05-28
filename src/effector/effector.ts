import {createEvent, createStore} from "effector";

const store = [
    {
        id: 1,
        photos: 'https://lh3.googleusercontent.com/proxy/YADsN2H5Q1E9EGQeaW-JIR8tikVCA5k6Kk9fCiG8RIOL3tdMaf0QI3iMBMpyOvpm8-6hkiLzuLddFVJ5qRXaDMfF6UJRAG04-mp2',
        likesCount: 0,
        comments: ['первый комментарий', 'второй комментарий', 'третий комментарий'] as Array<string>
    }, {
        id: 2,
        photos: 'https://cs10.pikabu.ru/post_img/big/2018/11/11/1/1541890605160950166.jpg',
        likesCount: 0,
        comments: ['первый комментарий', 'второй комментарий', 'третий комментарий'] as Array<string>
    }, {
        id: 3,
        photos: 'https://bipbap.ru/wp-content/uploads/2017/06/1366_768_20141203081214493035.jpg',
        likesCount: 0,
        comments: ['первый комментарий', 'второй комментарий', 'третий комментарий'] as Array<string>
    }, {
        id: 4,
        photos: 'https://i.ytimg.com/vi/WA3O0bXwZkU/maxresdefault.jpg',
        likesCount: 0,
        comments: ['первый комментарий', 'второй комментарий', 'третий комментарий'] as Array<string>
    }, {
        id: 5,
        photos: 'https://img3.akspic.ru/previews/0/1/4/6/4/146410/146410-bmw-nissan_gt_r-nebo-tyuning_avtomobilej-lichnyj_roskoshnyj_avtomobil-550x310.jpg',
        likesCount: 0,
        comments: ['первый комментарий', 'второй комментарий', 'третий комментарий'] as Array<string>
    }, {
        id: 6,
        photos: 'https://img2.akspic.ru/previews/3/8/0/5/6/165083/165083-retrovejv-legkovyye_avtomobili-audi_avant_2-synthwave-voda-550x310.jpg',
        likesCount: 0,
        comments: [] as Array<string>
    }, {
        id: 7,
        photos: 'https://wallpaperscave.ru/images/original/18/10-27/vehicles-cars-chevrolet-94827.jpg',
        likesCount: 0,
        comments: [] as Array<string>
    }, {
        id: 8,
        photos: 'https://images3.alphacoders.com/890/89045.jpg',
        likesCount: 0,
        comments: [] as Array<string>
    }, {
        id: 9,
        photos: 'https://witcher-tv.ru/wp-content/uploads/2019/12/geralt-stryga-full-hd.jpg',
        likesCount: 0,
        comments: [] as Array<string>
    }, {
        id: 10,
        photos: 'https://i.pinimg.com/originals/9b/f0/be/9bf0be77314beb7f22497247c3f475a3.jpg',
        likesCount: 0,
        comments: [] as Array<string>
    },
]

export type storeType = typeof store
type AddNewComment = {
    index: number,
    newCommentText: string
}

export const addNewComment = createEvent<AddNewComment>()

const $store = createStore<storeType>(store)
    .on(addNewComment, (state, { index, newCommentText}) => {state[index].comments.push(newCommentText)})

export default $store