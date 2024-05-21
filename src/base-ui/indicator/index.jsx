import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndiactorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex } = props
  const contentRef = useRef()
  useEffect(() => {
    // 获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex]
    // 获取元素距离左侧的宽度
    const itemLeft = selectItemEl.offsetLeft
    // 获取元素的宽度
    const itemWidth = selectItemEl.clientWidth

    // content 自身的宽度
    const contentWidth = contentRef.current.clientWidth
    // content 可滚动的宽度
    const contentScroll = contentRef.current.scrollWidth
    // 获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    // console.log(itemWidth, contentScroll);
    // 最左边不用移动
    if (distance < 0) {
      distance = 0
    }

    // 可滚动宽度-元素宽度
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) {
      distance = totalDistance
    } 
    // console.log(distance, contentScroll, contentWidth);
    contentRef.current.style.transform = `translateX(${-distance}px)`
  }, [selectIndex])
  return (
    <IndiactorWrapper>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndiactorWrapper>
  )
})

Indicator.prototype = {
  selectIndex: PropTypes.number
}
export default Indicator