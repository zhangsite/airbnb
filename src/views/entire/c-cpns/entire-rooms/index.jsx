// import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { RoomWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EmtireRooms = memo((props) => {
  /** 从redux中获取roomList数据 */
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  /** 事件处理 */
  const navigate = useNavigate()
  const dispath = useDispatch()
  const itemClickHandle = useCallback((item) => {
    dispath(changeDetailInfoAction(item))
    navigate('/detail')
  }, [navigate, dispath])
  return (
    <RoomWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className="room-list">
        {
          roomList.map((item) => {
            return (
              <RoomItem itemClick={itemClickHandle} itemData={item} key={item._id}/>
            )
          })
        }
      </div>

      { isLoading && <div className="cover"></div> }
    </RoomWrapper>
  )
})

// EmtireRooms.propTypes = {}

export default EmtireRooms