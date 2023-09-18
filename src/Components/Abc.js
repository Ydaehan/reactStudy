import { Fragment } from "react";
import Welcome from './Welcome';
function Abc() {
  // return (
  //   // <h2 style='border: 1px solid'>열심히 React해봅시다.</h2>
  //   <h2>열심히 React해봅시다.</h2>
  // );
  // {/* <div>열심히 React해봅시다.</div> */}
  // return (
  //   <Fragment>
  //     열심히 React해봅시다
  //   </Fragment>
  // );
  return (
    <>
      <Welcome city='seoul' population='940'/>
    </>
  );
}

export default Abc;
