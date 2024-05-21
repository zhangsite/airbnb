import React, { memo, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'
const HeaderRight = memo(() => {
  /** 定义组件内部的状态 */
  const [ showPanel, setShowPanel ] = useState(false)

  /** 副作用代码 */
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener("click", windowHandleClick, true)
    return () => {
      window.removeEventListener("click", windowHandleClick, true)
    }
  }, [])

  /** 事件处理函数 */
  function profileClickHandle() {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {
          showPanel && <CSSTransition 
              classNames="panel-show"
              in={showPanel} 
              unmountOnExit
              timeout={500}
              appear
              >
              <div className="panel">
                <div className="top">
                  <div className="item register">注册</div>
                  <div className="item login">登录</div>
                </div>
                <div className="bottom">
                  <div className="item">出租房源</div>
                  <div className="item">开展体验</div>
                  <div className="item">帮助</div>
                </div>
              </div>
          </CSSTransition>
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight