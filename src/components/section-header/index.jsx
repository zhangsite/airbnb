import ProtoTypes from 'prop-types'
import React, { memo } from 'react'

import { HeaderWrapper } from './style'
const SectionHeader = memo((props) => {
  const { title, subtitle } = props

  return (
    <HeaderWrapper>
      <h2 className='title'>{title}</h2>
      { subtitle && <div className='subtitle'>{subtitle}</div> }
    </HeaderWrapper>
  )
})

SectionHeader.prototype = {
  title: ProtoTypes.string,
  subtitle: ProtoTypes.string
}
export default SectionHeader