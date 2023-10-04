import React from 'react';
import ReactDOM from 'react-dom/client';

const SideMenu = (props) => {
	console.log(props.showMenu);
	/* ul>li*(숫자)>lorem => 테스트용 li */
	// 1rem = 16px
	return(
		<>
			<div
			style={{
				border:'1px solid red',
				width:'200px',
				height:'94vh', // viewport height, vw : viewport width
				padding:'10px',
				textAlign:props.direction,
				textTransform:'uppercase',
			}}
			>
				{props.direction}
				<ul style={{listStyle:'none', padding:'0px', lineHeight:'2.6rem'}}>
					<li>Lorem.</li>
					<li>Corporis?</li>
					<li>Quibusdam?</li>
					<li>Perferendis?</li>
					<li>Libero!</li>
					<li>Corporis.</li>
					<li>Velit!</li>
					<li>Deserunt.</li>
					<li>Dolorem!</li>
					<li>Eius.</li>
					<li>Ex.</li>
					<li>Corporis.</li>
					<li>Perspiciatis!</li>
					<li>Inventore.</li>
					<li>Ipsam.</li>
				</ul>
			</div>
		</>
	);
}

const App = (props) => {
	// const showMenu = props.showMenu;
	const {showMenu} = props
	return (
		<>
			{showMenu && <SideMenu direction='left' />}
		</>
	);
}

ReactDOM.createRoot(document.querySelector('#root')).render(
	<>
		<App showMenu={true}/>
	</>
)