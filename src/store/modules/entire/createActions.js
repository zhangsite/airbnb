import { getEntireList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountList = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (page = 0) => {
  return async (dispatch) => {
    // 修改currentPage
    dispatch(changeCurrentPageAction(page))

    // 获取页码数据
    // const currentPage = getState().entire.currentPage
    // const res = await getEntireList(currentPage * 20)
    const res = await getEntireList(page * 20)
    
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))

    dispatch(changeIsLoadingAction(true))
    dispatch(changeTotalCountList(totalCount))
    dispatch(changeIsLoadingAction(false))
  }
}