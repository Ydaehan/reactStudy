
const Box1 = (props) => {
  console.log(props.children);
  return <>
    {/* // <div style='background-color:red'></div> 에러 */} {/* js code를 의미 */}
    <div className="box" style={{ backgroundColor:props.color }}>
    {props.name}
    {props.children}
    </div>
  </>
}

Box1.defaultProps = {
  name:'기본상자',
  color:'yellow'
}
export default Box1;