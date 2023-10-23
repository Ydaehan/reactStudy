<<<<<<< HEAD
function App() {
  return (
    <>
      <p>hello everyone</p>
=======
import './App.css';
import Abc from './Components/Abc';
import Box from './Components/Box';
import Box1 from './Components/Box1';
import Box2 from './Components/Box2';
import CoupangBox from './Components/Coupang';
function App() {

  // 작업 처리
  return (
    // JSX
    <>
      <div className='App'>
        <h1>일본 IT과 AI소프트웨어반(2JI-A) 화이팅</h1>
        <Abc />
      </div>
      <Box name="redBox" color="red"/>
      <Box name="greenBox" color="green"/>
      <Box name="blueBox" color="#0000FF"/>
      <Box name="??ColorBox" color="rgba(200,140,45,0.7)"/>
      <Box name="??ColorBox" color="rgba(255,0,0,0.2)"/>
      <Box/>
      <hr/>
      <Box1 name="noNameBox" color="rgba(111,111,111,0.8)">
        어떤게 나타나냐?
        <p>잘 보일까요?</p>
      </Box1>
      <Box2 name="Box" color="rgba(255,85,51,0.9)"/>
      <CoupangBox name="칠성사이다, 350ml, 48개" price="22,990원" mlPrice="100ml당 403원" arrivalTime="내일 도착 보장"/>
>>>>>>> origin/main2
    </>
  );
}

export default App;
