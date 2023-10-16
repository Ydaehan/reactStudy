import React,{useState,useEffect} from 'react';

const CounterEffect = (props) => {
  const [num,setNum] = useState(props.count);

  /* 
  // [1] 빈 배열이 없는 경우
  // 렌더링 될 때 마다 항상 호출
  useEffect(()=>{
    console.log('useEffect 호출');
  }); 
  */

  /* 
  // [2] 빈 배열이 있는 경우
  // 첫 렌더링 될 때만 호출
  useEffect(()=>{
    console.log('useEffect 호출');
    fetch()처리, axios처리 -ajax통신
  },[]);
  */

  // [3] dependency list 가 있는 경우
  // 지정한 state인 num의 값이 변경될 경우에만 호출됨
  useEffect(()=>{
    console.log('useEffect 호출');
  },[num]);

  const inCrease = () => {
    setNum(num+1);
  };

  const deCrease = () => {
    if(num ===  0) {
      console.log('0 이하로는 감소 불가');
      return;
    }
    setNum(num-1);
  };

  return(
    <>
      <h1>{num}</h1>
      <button onClick={inCrease}>1 증가</button> &nbsp;&nbsp;
      <button onClick={deCrease}>1 감소</button>
    </>
  );
};

export default CounterEffect;