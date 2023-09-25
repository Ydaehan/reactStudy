import PropTypes  from 'prop-types';
export default function TestProps(props){
  console.log(typeof(props.third));
  return(
    <>
      <p>첫 번째 Props: {props.first}</p>
      <p>두 번째 Props: {props.second}</p>
      <p>세 번째 Props: {props.third}</p>
      {/* <p>세 번째 Props: {props.third?"true":"false"}</p> */}
    </>
  )
}

TestProps.propTypes = {
  // first:PropTypes.string.isRequired, // first 라는 props값은 string(문자열) 이고 필수 props이다.
  // second:PropTypes.string.isRequired,
  first:PropTypes.string,
  second:PropTypes.string,
  third:PropTypes.string,
  // third:PropTypes.any     // any: 모든 type
  // third:PropTypes.bool     // bool: true, false
}

TestProps.defaultProps={
  first:'영진',
  second:'영진 컴정',
  third:'영진 컴정 일본IT',
}
