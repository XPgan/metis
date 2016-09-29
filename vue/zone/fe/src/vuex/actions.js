import * as types from './mutation-types'

export const markLogin = ({dispatch, state}, id) => {
    dispatch(types.LOGIN, id)
}
export const markExit = ({dispatch, state}) => {
    dispatch(types.EXIT)
}
