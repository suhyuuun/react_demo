import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../commonApi/todoApi";

const JoinForm = () => {
  const navigator = useNavigate();

  const [member, setMember] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    nickName: "",
    birth: "",
    gender: "",
    authRole: "ROLE_MEMBER",
  });

  //오류메세지
  const [message, setMessage] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    nickName: "",
    authRole: "ROLE_MEMBER",
  });

  // 메시지 띄워보고 싶어서 해본 뻘짓입니다...히히...^^
  // let idMsg = "";
  // let pwMsg = "";
  // let nickNameMsg = "";

  //유효성
  const [effect, setEffect] = useState({
    username: false,
    password: false,
    passwordConfirm: false,
    nickName: false,
  });

  //출생년도 option을 위한 for문
  const birthYear = () => {
    const result = [];
    for (let i = 1900; i <= 2023; i++) {
      result.push(<option value={i} key={i}>{i}</option>);
    }
    return result;
  };

  const onSubmit = async (e) => {

    e.preventDefault();
    await axios
      .post(`${baseUrl}/join`, member, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setMember({
          username: "",
          password: "",
          nickName: "",
          birth: "",
          gender: "",
          authRole: "ROLE_MEMBER",
        });
      })
      .then((response) => {
        setMessage({
          username: "",
          password: "",
          passwordConfirm: "",
          nickName: "",
          birth: "",
          gender: "",
          authRole: "ROLE_MEMBER",
        });
      })
      .then((response) => {
        setEffect({
          username: false,
          password: false,
          passwordConfirm: false,
          nickName: false,
          birth: false,
          gender: false,
          authRole: "ROLE_MEMBER",
        });
      })
      .then((response) => {
        navigator("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onChangeName = (e) => {
    const currentUsername = e.target.value;
    setMessage({ username: currentUsername });
    const idRegExp = /^[0-9a-zA-Z]*$/;
    // 이렇게 4~12자리로 설정하려고 하면 처음작성부터 막혀욤ㅠ -> 처음작성시 4자리가 아니어서!
    // const idRegExp = /^(?=.*[a-z])(?=.*\d)[a-z0-9]{4,12}$/;
    if (idRegExp.test(e.target.value)) {
      setMember({ ...member, username: e.target.value });
      setMessage({ ...message, username: e.target.value });
      console.log(e.target.value);
      setEffect({ username: false });
      // idMsg = "사용가능한 아이디입니다."
    } else {
      setMessage({ ...message, username:e.target.value });
      setEffect({ ...effect, username: true });
      // idMsg = "영문과 숫자를 조합하여 4~12자 안으로 입력해주세요.";
      alert("영문과 숫자를 조합하여 4~12자 안으로 입력해주세요😥");
    }
  };

  const onChangePassword = (e) =>{
    const currentPassword = e.target.value;
    setMessage({password:currentPassword});
    // 테스트용 -> 자리수제한 없
    const pwRegExp = /^[0-9a-zA-Z]*$/;
    // const pwRegExp = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/;
    if(pwRegExp.test(e.target.value)){
      setMember({...member, password: e.target.value});
      setMessage({...message, password: e.target.value});
      console.log(e.target.value);
      setEffect({password:false});
      // pwMsg = "사용가능한 비밀번호입니다.";
    }else{
      setMessage({...message, password:e.target.value});
      setEffect({...effect, password:true});
      // pwMsg = "영어, 숫자, 특수문자를 조합하여 8~12자 안으로 입력해주세요.";
      alert("영어, 숫자, 특수문자를 조합하여 8~12자 안으로 입력해주세요.");
    }
  }

  const onChangeNickName = (e) =>{
    const currentPassword = e.target.value;
    setMessage({password:currentPassword});
    const nickNameRegExp = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]*$/;
    if(nickNameRegExp.test(e.target.value)){
      setMember({...member, nickName: e.target.value});
      setMessage({...message, nickName: e.target.value});
      console.log(e.target.value);
      setEffect({password:false});
    // nickNameMsg = "사용가능한 닉네임입니다.";

    }else{
      setMessage({...message, nickName:e.target.value});
      setEffect({...effect, nickName:true});
      // nickNameMsg = "영어,한글,숫자 상관없이 2~7자 안으로 입력해주세요.";
      alert("영어,한글,숫자 상관없이 2~7자 안으로 입력해주세요.");
    }
  }

  // const userValidator = () => {
  //   let valid = true;
  //   if (member.password !== member.passwordConfirm) {
  //     valid = false;
  //     alert("비밀번호가 일치하지 않습니다.");
  //   }
  //   return valid;
  // };

  const handleValueChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });

  //   if (e.target.name === member.passwordConfirm) {
  //     userValidator();
  //   }
  };

  const handleValueChangeBirth = () =>{

  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="container">
          <h1>회원가입</h1>
          <div className="form-group mb-1">
            <span>아이디</span>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="영문과 숫자를 조합하여 4~12자 안으로 입력"
              value={member.username}
              onChange={onChangeName}
            />
            {/* <span id='idMsg'>{`${idMsg}`}</span> */}
            <span id='idMsg'>사용가능한 아이디입니다. / 영문과 숫자를 조합하여 4~12자 안으로 입력해주세요.</span>
          </div>
          <div className="form-group mb-1">
            <span>비밀번호</span>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="영어, 숫자, 특수문자를 조합하여 8~12자 안으로 입력"
              onChange={onChangePassword}
            />
            {/* <span id='idMsg'>{`${pwMsg}`}</span> */}
            <span id='pwMsg'>사용가능한 비밀번호입니다. / 영어, 숫자, 특수문자를 조합하여 8~12자 안으로 입력해주세요.</span>
          </div>
          <div className="form-group mb-1">
            <span>비밀번호 확인</span>
            <input
              type="password"
              className="form-control"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              onChange={handleValueChange}
            />
             <span id='pwAvailable'>비밀번호가 일치하지 않습니다.</span>

          </div>
          <span></span>

          <div className="form-group mb-1">
            <span>닉네임</span>
            <input
              type="nickName"
              className="form-control"
              name="nickName"
              placeholder="영어,한글,숫자 상관없이 2~7자 안으로 입력"
              onChange={onChangeNickName}
            />
            {/* <span id='idMsg'>{`${nickNameMsg}`}</span> */}
            <span id='nickNameMessage'>사용가능한 닉네임입니다. / 영어,한글,숫자 상관없이 2~7자 안으로 입력해주세요.</span>

          </div>
          <div className="form-group mb-1">
            <div>출생년도</div>
            <select className="form-control" name="birth" onChange={handleValueChangeBirth}>
              {birthYear()}
            </select>
          </div>
          <label className="form-group mb-1">
            <span>성별</span>
            <br />
            <input type="radio" name="gender" className="genchk" value="남" />남
          </label>
          <label className="form-group mb-1">
            <input type="radio" name="gender" className="genchk" value="여" />여
          </label>
          <hr className="my-3" />
          <div className="form-group mb-3 mb-1">
            <div
              className="form-check form-check-inline  form-group"
              onChange={handleValueChange}
            >
              <label className="mx-5">
                <input
                  type="radio"
                  name="authRole"
                  value="ROLE_ADMIN"
                  className="form-check-input"
                />
                관리자
              </label>
              <label className="mx-5">
                <input
                  type="radio"
                  name="authRole"
                  value="ROLE_MANAGER"
                  className="form-check-input"
                />
                매니저
              </label>
              <label className="mx-5">
                <input
                  type="radio"
                  name="authRole"
                  value="ROLE_MEMBER"
                  className="form-check-input"
                  // 기본으로 사용하기 위해 defaultChecked={true} 사용
                  defaultChecked={true}
                />
                일반 사용자
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            가입 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinForm;