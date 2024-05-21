// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  /** 定义内部的状态 */
  const [ showRight, setShowRight ] = useState(false)
  const [ showLeft, setShowLeft ] = useState(false)
  // const [ posIndex, setPosIndex ]  = useState(0)
  const posIndexRef = useRef()
  const totalDistanceRef = useRef()

  /** 组件渲染完毕，判断是否显示右侧的按钮 */
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 可滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 元素占据的宽度
    // console.log(scrollWidth, clientWidth);
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    /** 内容占据的宽度 - 元素占据的宽度 > 0显示按钮*/
    setShowRight(totalDistance > 0)
    posIndexRef.current = 0
  }, [props.children])

  function controlClickHandle(isRight) {
    // const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newIndex = isRight ? posIndexRef.current + 1 : posIndexRef.current - 1
    // 获取要偏移的元素
    const newEl = scrollContentRef.current.children[newIndex]
    // 获取偏移元素距离左侧的距离
    const newOffsetLeft = newEl.offsetLeft
    // console.log(newEl.offsetLeft);
    scrollContentRef.current.style.transform = `translate(${-newOffsetLeft}px)`
    // setPosIndex(newIndex)
    posIndexRef.current = newIndex
    // 是否继续显示右边的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    // 是否显示左边的按钮
    setShowLeft(newOffsetLeft > 0)
  }


  return (
    <ViewWrapper>
      { showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      { showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

// ScrollView.propTypes = {}

export default ScrollView