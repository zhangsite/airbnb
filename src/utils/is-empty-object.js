export function isEmptyO(obj) {
  // !!转成Boolean值
  return !!Object.keys(obj).length
}