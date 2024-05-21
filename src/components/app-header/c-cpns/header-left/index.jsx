import React, { memo } from 'react'

import IconLogo from '@/assets/svg/icon_logo'
import { LeftWrapper } from './style'
import { useNavigate } from 'react-router-dom'
const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function logoClickHandle() {
    navigate('/')
  }

  return (
    <LeftWrapper>
      <div className='logo' onClick={logoClickHandle}>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft