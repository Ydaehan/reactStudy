import React,{useState} from 'react';

// const Counter = (props) => {
//   let num = props.count;

//   const inCrease = () => {
//     // num = num + 1;
//     // num = num - 1;
//     // num = num++; // 후위 연산자를 쓰면 할당 먼저 실행한 후 증가
//     // num = num--; // props의 값을 변경 시키지 않음
//     // num = ++num; // 전위 연산자를 사용하여야 증가한 후 할당함
//     // num = --num;
//     console.log( typeof(num), num );
//     // props.count++;  // props는 읽기 전용이다.
//     const h1Tag = document.querySelector('h1');
//     h1Tag.innerText= num;
//   };

//   return(
//     <>
//       <h1>{num}</h1>
//       <button onClick={inCrease}>클릭</button>
//     </>
//   );
// };

// const Counter = (props) => {
//   // useState 사용
//   // const [num, setNum] = useState(0);
//   const [num,setNum] = useState(props.count);
//   // num: 상태관리용 변수
//   // setNum: num의 Setter함수
//   // num은 setNum으로만 값 변경 가능함
//   // const [변수명, set변수명(camelCase)]=useState(초기값);
//   console.log(num);

//   const inCrease = () => {
//     setNum(num+1);
//   };

//   return(
//     <>
//       <h1>{num}</h1>
//       <button onClick={inCrease}>클릭</button>
//     </>
//   );
// };

const Counter = (props) => {
  const [num,setNum] = useState(props.count);
  console.log(num);

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

export default Counter;