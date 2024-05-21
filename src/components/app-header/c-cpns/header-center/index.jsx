import React, { memo, useRef, useState } from 'react'

import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './c-cpns/search-tabs'
import SearchTitles from '@/assets/data/search_titles'
import SearchSections from './c-cpns/search-sections'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props
  const [ tabIndex ] = useState(0)
  const titles = SearchTitles.map(item => item.title)

  function tabClickHandle() {
    console.log('tabClickHandle')
  }

  function searchBarClickHandle() {
    if (searchBarClick) {
      searchBarClick()
    }
  }

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  return (
    <CenterWrapper>
      <CSSTransition
      nodeRef={ref1}
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit
      >
        <div ref={ref1} className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">
            搜索房源和体验
          </div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        nodeRef={ref2}
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit
      >
        <div ref={ref2} className="search-detail">
          <SearchTabs titles={titles} tabClick={tabClickHandle}/>
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter