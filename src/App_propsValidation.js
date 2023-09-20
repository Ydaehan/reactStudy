import TestProps from "./Components/exam1/TestProps"

const App = (props)=>{
  return(
    <>
      <TestProps first='한글' second='😊' third='テスト'/>
      <TestProps first='dr.hong' second='홍박사' third={1000}/>
      {/* 숫자를 props로 전달시에는 주의 필요: {110} */}
    </>
  )
}

export default App;