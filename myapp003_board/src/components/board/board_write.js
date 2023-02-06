import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../commonApi/todoApi";

const BoardWrtie = () => {
  const [inputs, setInupts] = useState({
    writer: "",
    email: "",
    subject: "",
    content: "",
    filename: null,
  });

  const navigator = useNavigate();
  const { currentPage, num, ref, re_step, re_level } = useParams();
  const { writer, email, subject, content, filename } = inputs;

  const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    console.log(nextState);
    // setInupts((prev) => {
    //   return { ...prev, ...nextState };
    // });

    setInupts({ ...inputs, ...nextState });

    // setInupts({ ...inputs, e.target.name: e.target.value });
    // 이벤트 가져와서 이벤트 처리 불가
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    console.log("files: " + e.target.files[0]);
    setInupts({ ...inputs, filename: e.target.files[0] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("writer", writer);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("content", content);
    console.log("filename: ", filename);
    if (filename !== null) formData.append("filename", filename);

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    await axios
      .post(`${baseUrl}/board/write`, formData, config)
      .then((response) => {
        console.log(response.data);
        setInupts({
          writer: "",
          email: "",
          subject: "",
          content: "",
          filename: null,
        });
        navigator(`/board/list/${currentPage ? currentPage : 1}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  ////////////////////////////////////////////////////////
  return (
    <>
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <td width="20%" align="center">
                글쓴이
              </td>
              <td>
                <input
                  type="text"
                  name="writer"
                  size="10"
                  maxLength="10"
                  value={writer}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <td width="20%" align="center">
                Email
              </td>
              <td>
                <input
                  type="text"
                  name="email"
                  size="30"
                  maxLength="30"
                  value={email}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <td width="20%" align="center">
                제목
              </td>
              <td>
                <input
                  type="text"
                  name="subject"
                  size="40"
                  value={subject}
                  placeholder={num !== undefined ? "답변" : null}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <td width="20%" align="center">
                내용
              </td>
              <td>
                <textarea
                  name="content"
                  rows="13"
                  cols="40"
                  value={content}
                  onChange={handleValueChange}
                ></textarea>
              </td>
            </tr>

            <tr>
              <td width="20%" align="center">
                첨부파일
              </td>
              <td>
                <input
                  type="file"
                  name="filename"
                  id="filepath"
                  onChange={handleFileChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Link className="btn btn-primary" to={`/board/list/${currentPage}`}>
          리스트
        </Link>
        <input type="submit" className="btn btn-primary" value="등록" />
      </form>
    </>
  );
};

export default BoardWrtie;
