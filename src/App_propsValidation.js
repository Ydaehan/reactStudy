import TestProps from "./Components/exam1/TestProps"

const App = (props)=>{
  return(
    <>
      {/* <TestProps first='한글' second='😊' third='テスト'/>
      <TestProps first='dr.hong' second='홍박사' third='1234'/>
      <TestProps first='dr.hong' second='홍박사' third={1234}/> */}
      {/* <TestProps first='dr.hong' second='홍박사' third={true}/> */}
      {/* 숫자를 props로 전달시에는 주의 필요: {110} */}
      {/* <TestProps/>
      <TestProps first='dr.hong'/>
      <TestProps first='dr.hong' second='홍박사'/>
      <TestProps first='dr.hong' second='홍박사' third='✌️😛✌️'/> */}
      <TestProps first='dr.hong' second='홍박사' third='✌️😛✌️' fourth='남'/>
      <TestProps first='dr.hong' second='홍박사' third='✌️😛✌️' />
      <TestProps first='dr.hong' second='홍박사' third='✌️😛✌️' fourth='여'/>
      <TestProps first='dr.hong' second='홍박사' third='✌️😛✌️' fourth='농'/>
    </>
  )
}

export default App;