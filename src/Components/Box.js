
const Box = (props) => {
  return <>
    {/* // <div style='background-color:red'></div> 에러 */} {/* js code를 의미 */}
    <div className="box" style={{ backgroundColor:props.color }}>
    {props.name}
    </div>
  </>
}

Box.defaultProps = {
  name:'기본상자',
  color:'yellow'
}
export default Box;