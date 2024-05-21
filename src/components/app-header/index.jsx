import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import classNames from 'classnames'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'
const AppHeader = memo(() => {
  /** 定义组件内部状态 */
  const [isSearch, setIsSearch] = useState(false)
  /** 从redux中获取header配置 */
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topAlpha } = headerConfig
  // console.log(isFixed);

  /** 监听滚动 */
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  if (!isSearch) {
    prevY.current = scrollY
  }
  if (isSearch && (Math.abs(scrollY - prevY.current)) > 30) {
    setIsSearch(false)
  }

  /** 透明度的逻辑 */
  const isAlpha = topAlpha && scrollY === 0
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)}/>
            <HeaderRight />
          </div>
          <div className="search-area"></div>
          <SearchAreaWrapper $isSearch={isAlpha || isSearch}></SearchAreaWrapper>
        </div>
        {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader