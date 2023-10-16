import React,{useState} from 'react';

const Info = (props) => {
  // 하나의 컴포넌트에 useState를 여러개 사용해도 되는가?
  const [name,setName] = useState('');
  const [pwd,setPwd] = useState('');
  // useState는 primitive type만 사용하여야 하나?
  // array, object형 사용가능한가? Yes
  // 주의사항
  // array, object의 사용시 setter 함수의 사용 주의

  const [user,setUser] = useState({name:'',pwd:''});

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  const changeUser = (e) => {
    e.preventDefault();
    setUser({
      name,
      pwd
    });
  };

  return(
    <>
      {/* <input value={name} onChange={changeName} />
      <input value={pwd} onChange={changePwd} /><hr/> */}
      <form onSubmit={changeUser}>
        <input value={name} onChange={changeName} />
        <input value={pwd} onChange={changePwd} /><hr/>
        <button type='submit'>등록</button>
      </form>
      <div>
        <div><b>이름:</b>{user.name}</div>
      </div>
      <div>
        <div><b>패스워드:</b>{user.pwd}</div>
      </div>
    </>
  );
};

export default Info;