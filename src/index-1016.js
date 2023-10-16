import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";

// [1] with JSX
/* const element1 = (
		<h1 className='App'>
			영진 컴정 일본IT JI-A(AI SW반)
		</h1>
) */

// [2] Non JSX
/* const element2 = React.createElement(
	'h1',
	{className:'App'},
	'영진 컴정 일본IT JI-A(AI SW반) 화이팅',
	'a',
	'b',
	'c'
); */

/* console.log(typeof(element1));
console.log(typeof(element2));
console.log(element1.props.className);
console.log(element2.props.className);
console.log(element1.props.children);
console.log(element2.props.children);
console.log(element1);
console.log(element2); */

/* ReactDOM.createRoot(document.querySelector('#root')).render(
		// {element1}
		<>
			{element1} 
			{element2}
		</>
); */

// // [1] Function style - non JSX

// const Greeting1 = (props)=>{
// 	const ch = ['안녕','영진','컴정',props.name,'님'];
// 	return (
// 		React.createElement('div',{id:'hello'},[...ch])
// 	);
// };

// // [2] class 
// class Greeting2 extends React.Component{
// 	render(){
// 		// 반드시 render 함수 구현이 되어 있어야 함
// 		const ch = ['안녕','영진','컴정',this.props.name,'님'];
// 		return (
// 			React.createElement('div',{id:'hello'},[...ch])
// 		);
// 	}
// }

// // [3] function type with JSX
// const Greeting3 = (props) => {
// 	return (
// 		<>
// 			<div id='hello3'>
// 				{`안녕영진컴정${props.name}님`}
// 			</div>
// 		</>
// 	)
// }

// // [4] class type with JSX
// class Greeting4 extends React.Component{
// 	render(){ // java로 따지면 추상 메서드
// 		// class는 render를 반드시 구현해야함
// 		const ch = ['안녕','영진','컴정',this.props.name,'님'];
// 		return (
// 			React.createElement('div',{id:'hello'},[...ch])
// 		);
// 	}
// }

// ReactDOM.createRoot(document.querySelector('#root')).render(
// 	<>
// 		<Greeting1 name='김영진'/>
// 		<Greeting2 name='이영진'/>
// 		<Greeting3 name='최영진'/>
// 		<Greeting4 name='박영진'/>
// 	</>
// )

// 강의 자료 참조
// const el = React.createElement;
// el(
// 	'h1',props,'test'
// );


// [1] if문 사용
// const App = () => {
// 	let result = null;
// 	const loginCheck = 'Y';
// 	if(loginCheck==='Y'){
// 		result = <h3>홍박사님 환영합니다.</h3>
// 	}else{
// 		result = <h3>게스트님 회원가입합시다.</h3>
// 	}
// return(
// 	<> {/* JSX */}
// 		{result}
// 	</>
// )
// }


// [2] 삼항연산자 or &&(AND)
// const App = () => {
// 	const loginCheck='Y';
// 	return(
// 		<>
// 			{
// 				// 삼항연산자
// 				loginCheck==='Y'?
// 					(<h3>홍박사님 환영합니다.</h3>):
// 					(<h3>게스트님 회원가입합시다.</h3>)
// 			}
// 			{
// 				// &&
// 				loginCheck==='Y' && (<h3>홍박사님 환영합니다.</h3>)
// 			}
// 		</>
// 	);
// };

// [3] IIFE(Immediately invoked function expression): 즉시 호출되는 함수 표현식
// 형식: (이름없는 함수정의)()
// 이름없는 함수를 정의하고 곧 바로 호출

const App = () => {
	const loginCheck='Y';
	return (
		<>
			{	// JSX내에서 JS코드 실행
				(()=>{ // 이름없는 함수 정의
					// if 문, 삼항연산자, &&
					return (loginCheck==='Y'?<h3>홍박사 회원님 환영!</h3>:<h3>게스트 회원님 환영!</h3>);
				})()
			}
		</>
	);
}

ReactDOM.createRoot(document.querySelector('#root')).render(
	<> 
		<App/>
	</>
)