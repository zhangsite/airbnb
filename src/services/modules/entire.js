import abRequest from "../request";

export function getEntireList(offset = 0, size = 20) {
  return abRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}
