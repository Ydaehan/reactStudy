//[1] function 컴포넌트명(props){ return 결과; }

// function Welcome(){
//   // JSX
//   return (
//     <p>Welcome to Korea!</p>
//   );
// }

// [2] const 컴포넌트명 = function(props){return ;}
// const Welcome = function() {
//   return (
//     <p>Welcome to Korea!</p>
//   );
// }

// [3] const 컴포넌트명 = (props) => {return ;}
// const Welcome = () => {
//   return (
//     <p>Welcome to Korea!</p>
//   );
// }

// export default Welcome;

/* 이렇게는 사용이 불가능하다 
    const 라는 키워드가 상수를 정의하는 keyword 이기 때문에 Error 가 발생한다*/
// export default const Welcome = () => {return ;};
// [1] 방식으로 맨 마지막 코드를 통합해서 정의
// [4] export default function 컴포넌트명(props){ return 결과; }

// export default function Welcome(props){ // 부모컴포넌트로부터 전달받은 재료
//   console.log(props);
//   console.log(typeof(props));
//   // return <p>Welcome to Korea</p>
  
//   return<>
//     {/* JSX에서 {} 내부는 JS 소스코드를 의미 */}
//     <p>Welcome to Korea {} (인구수: {} 만명)</p>
//   </>
// }

export default function Welcome({city, population}){ // 부모컴포넌트로부터 전달받은 재료
  // console.log(props);
  // console.log(typeof(props));
  // return <p>Welcome to Korea</p>
  
  return<>
    {/* JSX에서 {} 내부는 JS 소스코드를 의미 */}
    <p>Welcome to Korea {city} (인구수: {population} 만명)</p>
  </>
}