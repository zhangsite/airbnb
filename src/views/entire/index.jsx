import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EmtireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/createActions'
import { changeHeaderConfigAction } from '@/store/modules/main'

const entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({
      isFixed: true,
      topAlpha: false
    }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EmtireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default entire