import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index, name) {
    setCurrentIndex(index)
    tabClick(index, name)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div 
                className={classNames('item', { active: currentIndex === index })}
                onClick={e => itemClickHandle(index, item)}
                key={index}
              >{item}</div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTabs