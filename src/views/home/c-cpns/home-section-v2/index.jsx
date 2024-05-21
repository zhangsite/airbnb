// import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'
const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  // 数据转换
  const initialName = infoData.dest_address[0].name
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)
  const tabClickHandle = useCallback((index, name) => {
    setName(name)
  }, [])
  return (
    <SectionV2Wrapper>
      <div className="discount">
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
        <SectionTabs tabNames={tabNames} tabClick={(index, name) => tabClickHandle(index, name)}/>
        <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3333%"/>
        <SectionFooter name={name}/>
      </div>
    </SectionV2Wrapper>
  )
})

// HomeSectionV2.propTypes = {}

export default HomeSectionV2