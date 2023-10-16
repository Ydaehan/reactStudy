import './App.css';
import './common.css';
import Counter from './Components/exam2/Counter_useState';
import CounterEffect from './Components/exam2/Counter_useEffect';
import CounterEffect2 from './Components/exam2/Counter_useEffect2';
import Info from './Components/exam2/Info_useState';

const App = (props) => {
  return (
    <>
      {/* <p>
        안녕하세요?
      </p><br/><br/>
      <div className="textBox"></div>
      <div className="textBox2"></div> */}

      <Counter count={0} />
      <Counter count={111} />
      {/* 논리적 오류 발생: 
          컴포넌트 별로 상태관리가 안되어 있음: useState 사용해야 함 */}
      <hr/>
      <Info / >
      <hr/>
      <CounterEffect count={0} />
      <CounterEffect2 count={0} />
    </>
  );
};

export default App;