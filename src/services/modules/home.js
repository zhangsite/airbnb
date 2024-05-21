import abRequest from "../request";

export function getHomeGoodPriceData() {
  return abRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return abRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return abRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return abRequest.get({
    url: "/home/hotrecommenddest"
  })
}


export function getHomeLongforData() {
  return abRequest.get({
    url: "/home/longfor"
  })
}


export function getHomePlusData() {
  return abRequest.get({
    url: "/home/plus"
  })
}