// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/createActions';
const EntirePagination = memo((props) => {

  const { totalCount, currentPage, roomList } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20 + 1

  /** 事件处理逻辑 */
  const dispatch = useDispatch()
  function pageChangeHandle(event, value) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    // console.log(event, value);
    // 更新最新的页码：redux => currentPage
    // dispatch(changeCurrentPageAction(value - 1))
    dispatch(fetchRoomListAction(value - 1))
  }

  return (
    <PaginationWrapper>
      { !!roomList.length && <div className="info">
        <Pagination count={totalPage} onChange={pageChangeHandle}/>
        <div className="desc">
          第{startCount}-{endCount}个房源,共超过{totalCount}个房源
        </div>
      </div>}
    </PaginationWrapper>
  )
})

// EntirePagination.propTypes = {}

export default EntirePagination