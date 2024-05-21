import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 第二个参数是store对象 可以结构出dispatch getState
export const fetchHomeDataAction = createAsyncThunk('fetchdata', (payload, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfo(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfo(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfo(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeRecommendInfo(res))
  })
  getHomeLongforData().then(res => {
    dispatch(changeLongforInfo(res))
  })
  getHomePlusData().then(res => {
    dispatch(changePlusInfo(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfo(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfo(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfo(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfo(state, { payload }) {
      state.plusInfo = payload
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload
  //   })
  // }
})

export const { 
  changeGoodPriceInfo, 
  changeHighScoreInfo,
  changeDiscountInfo,
  changeRecommendInfo,
  changeLongforInfo,
  changePlusInfo
} = homeSlice.actions
export default homeSlice.reducer