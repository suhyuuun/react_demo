import React, { Fragment } from "react";

const MyJsx002 = () => {
  return (
    // <Fragment>
    <>
      <p>start</p>
      <span>!!!</span>
    </>
    // </Fragment>
    //div는 하나만 넘겨주는 것 가능
    //div를 묶어주는 용도만 사용하는 경우 Fragment로 사용한다.
    //(필요없는 div가 사용되지 않기 때문)
    //비어있는 꺽새도 사용가능
  );
};

//default 꼭 사용해야 함
export default MyJsx002;
