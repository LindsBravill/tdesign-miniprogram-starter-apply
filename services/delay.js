/** 模拟网络请求延时 */
export default function delay(ms = 500) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}
