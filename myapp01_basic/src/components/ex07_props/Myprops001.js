//props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며,
//컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다.
//state는 컴포너트 내부에서 바뀔 수 있는 값을 의미한다.

//부모의 값을 받을 때에는 중괄호해서 속성값을 받아옴
const Myprops001 = ({ name }) => {
  return (
    <div>
      <h3>props:properties</h3>
      <p>Hello, {name}</p>
    </div>
  );
};

export default Myprops001;
