import React from 'react';
import ReactDOM from 'react-dom/client';

// const name = 'dr.hong';
// const element = <h1>안녕하세요?{name}</h1>

// const App = (prop_state) => {
// 	return (
// 		<>
// 			name
// 			<hr />
// 			{name}
// 			<hr />
// 			{element}
// 		</>
// 	)
// }

// const person = {
// 	name:'홍박사',
// 	address: '대구시',
// 	age:25,
// }

// 최신방식
// ReactDOM.createRoot(document.querySelector('#root')).render(     // querySelector 사용
//     // <>{element}</>
// 		// <App />
// 		element
// );

// function printPerson(person){
// 	// const {name, address, age} = person;
// 	return (`${name} 입니다. ${address}에서 살고, 나이는 ${age}입니다.`)
// }

// const person = {
// 	name:'홍박사',
// 	address: '대구시',
// 	age:25,
// }

// const element = (
// 	<h1>
// 		안녕하세요? {printPerson(person)}
// 	</h1>
// )

// ReactDOM.createRoot(document.querySelector('#root')).render(
// 	element
// );

// const photoUrl = 'https://i.ibb.co/3kwssd7/jing.jpg';

// const element1 = <a href='https://google.com'>클릭</a>
// const element2 = <img src={photoUrl}></img>

// ReactDOM.createRoot(document.querySelector('#root')).render(
// 	<>
// 		{element1}
// 		{element2}
// 	</>
// )

const MyObj = {
	ColorPicker: function ColorPicker(props) {
		return <div style={{backgroundColor:props.color}}>선택한 색상은: <b>{props.color}</b></div>
	}
}

function BlueColorPicker(){
	return <MyObj.ColorPicker color = 'skyblue'/>
}

function RedColorPicker(){
	return <MyObj.ColorPicker color = 'red'/>
}

ReactDOM.createRoot(document.querySelector('#root')).render(
	<>
		<BlueColorPicker/>
		<RedColorPicker/>
	</>
)