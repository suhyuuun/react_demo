import { useState } from "react";

const MyuseState005 = () => {
  const [customerList, setCustomerList] = useState([
    {
      name: "고수",
      address: "서울시 강남구",
      phone: "010-0000-0000",
    },
    {
      name: "여진구",
      address: "서울시 서초구",
      phone: "010-1111-1111",
    },
  ]);

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleName = (e) => {
    setCustomer({ ...customer, name: e.target.value });
  };

  const handleAddress = (e) => {
    setCustomer({ ...customer, address: e.target.value });
  };

  const handlePhone = (e) => {
    setCustomer({ ...customer, phone: e.target.value });
  };

  const handleCommit = (e) => {
    setCustomerList([...customerList, customer]);
    setCustomer({ name: "", address: "", phone: "" });
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input type="text" value={customer.name} onChange={handleName} />
      </p>
      <p>
        <span>주소</span>
        <input type="text" value={customer.address} onChange={handleAddress} />
      </p>
      <p>
        <span>전화</span>
        <input type="text" value={customer.phone} onChange={handlePhone} />
      </p>

      <button onClick={handleCommit}>확인</button>

      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>주소</th>
            <th>전화</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((element, idx) => {
            return (
              <tr key={idx}>
                <td>{element.name}</td>
                <td>{element.address}</td>
                <td>{element.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyuseState005;
