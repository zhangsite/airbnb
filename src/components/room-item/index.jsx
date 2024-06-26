import PropTypes from 'prop-types'
import classnames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import { Rating } from '@mui/material'
import { ItemWrapper } from './style'
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [ selectIndex, setSelectIndex ] = useState(0)
  const slider = useRef()

  // 事件处理
  function controlClickHandle(e, isRight = true) {
    e.stopPropagation()
    isRight ? slider.current.next() : slider.current.prev()

    // 最新索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) {
      newIndex = length - 1
    }
    if (newIndex > length - 1) {
      newIndex = 0
    }
    setSelectIndex(newIndex)
  }
  // 圆点是否要变小
  function isSmall(index, count) {
    const length = itemData.picture_urls.length
    if (selectIndex <= 2 || selectIndex >= length - 3) {
      return false
    }
    if (index === selectIndex - count || index === selectIndex + count) {
      return true
    }
  }

  // 事件处理逻辑
  function itemClickHandle() {
    if (itemClick) {
      itemClick(itemData)
    }
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )
  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={e => controlClickHandle(e, false)}>
          <IconArrowLeft width={30} height={30} />
        </div>
        <div className="btn right" onClick={e => controlClickHandle(e, true)}>
          <IconArrowRight width={30} height={30} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className={classnames("dot", {active: selectIndex === index, size2: isSmall(index, 2), size3: isSmall(index, 3)})}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={slider}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className="cover" key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
  return (
    <ItemWrapper 
      $verifycolor={itemData?.verify_info?.color || '#39576a'}
      $itemwidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {
          !itemData.picture_urls ? pictureElement : sliderElement
        }
        <div className="desc">
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>
        <div className='bottom'>
          <Rating 
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly 
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})
RoomItem.prototype = {
  itemData: PropTypes.object
}

export default RoomItem