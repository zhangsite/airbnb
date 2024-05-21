import PropsTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '../room-item'
import { RoomWrapper } from './style'
const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props
  return (
    <RoomWrapper>
      {
        roomList?.slice(0, 8).map(item => {
          return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}/>
        })
      }
    </RoomWrapper>
  )
})
SectionRooms.prototype = {
  goodPriceInfo: PropsTypes.array
}
export default SectionRooms