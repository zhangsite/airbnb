import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils/is-empty-object'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  // 从redux获取数据
  const { 
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  // 派发异步事件
  const dispatch = useDispatch()
  // 发起进行的网络请求
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({
      isFixed: true,
      topAlpha: true
    }))
  }, [dispatch])

  return (
    <HomeWrapper>
      
      <HomeBanner />
      <div className='content'>
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/> }
        { isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/> }

        { isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}/> }

        { isEmptyO(discountInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        { isEmptyO(discountInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        { isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}/>}
      </div>
    </HomeWrapper>
  )
})

export default Home