import React,{useState,useEffect,useRef} from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
	const inputRef = useRef();

	useEffect(() => {
		console.log(inputRef.current);
		inputRef.current.focus();
	},[]);

	const inputID = () => {
		const value = inputRef.current.value;
		console.log(value);
		console.log(value.length);
		console.log(inputRef.current.size);
		if(inputRef.current.value.length > 8){
			alert('아이디의 길이는: 8이하');
			inputRef.current.value = null;
		}
	}
	return (
		<>
			<form>
				<fieldset style={{padding:'50px'}}> {/* 여러 입력창을 하나의 묶음으로 다룸 */}
					<legend>회원가입</legend>
					<label htmlFor='mid'>아이디: </label>
					<input type="text" ref={inputRef} id="mid" size='24' autoComplete='off' placeholder='아이디 입력창'
					style={{padding:'10px'}} onChange={inputID}/>
					<br /><br />

					<label htmlFor='email'>이메일: </label>
					<input type="text" id="email" size='30' autoComplete='off' placeholder='이메일 입력창'
					style={{padding:'10px'}} onChange={inputID}/>
					<br /><br />
				</fieldset>
			</form>
		</>
	)
}

ReactDOM.createRoot(document.querySelector('#root')).render(
	<>
		<App/>
	</>
)