import "./MyJsx003.css";

const MyJsx003 = () => {
  const numX = 3;
  const numY = 5;

  return (
    <>
      <div>{`${numX} + ${numY} = ${numX + numY}`}</div>
      <div className="line">Line Test</div>
    </>
  );
};

export default MyJsx003;

//변수에 있는 값을 사용할 때는 백틱사용하기
//js 사용시 중괄호 활용
//함수를 컴포넌트라고 부름
