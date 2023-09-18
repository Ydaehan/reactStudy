
const Box2 = ({color, name}) => {
  // const {color, name} = props;

  /* const color = props.color;
  const name = props.name; */
  return <>
    {/* // <div style='background-color:red'></div> 에러 */} {/* js code를 의미 */}
    {/* <div className="box" style={{ backgroundColor:props.color }}>
    {props.name}
    {props.children} */}
    <div className="box" style={{ backgroundColor:color }}>
      {name}
    </div>
  </>
}

Box2.defaultProps = {
  name:'기본상자',
  color:'yellow'
}
export default Box2;