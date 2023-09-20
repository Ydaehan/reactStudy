export default function TestProps(props){
  console.log(typeof(props.third));
  return(
    <>
      <p>첫 번째 Props: {props.first}</p>
      <p>두 번째 Props: {props.second}</p>
      <p>세 번째 Props: {props.third}</p>
    </>
  )
}