//App.js와는 달리 변수 지정할 때 콤마 사용해야함
//기본값보다 App에서 넘겨주는 값의 우선순위가 더 높음
const Myprops003 = ({ name = "아무개", age = 10, loc = "서울" }) => {
  return (
    <div>
      <p>
        고객님 이름 : {name} 나이 : {age} 지역 : {loc}
      </p>
    </div>
  );
};
export default Myprops003;
