import React, { useState, useEffect } from "react";
import "./detail.style.css";

const SectionVoucher = () => {
  const array = [
    { id: 1, title: "70 Tokens" },
    { id: 2, title: "720 Tokens" },
    { id: 3, title: "350 Tokens" },
    { id: 4, title: "750 Tokens" },
    { id: 5, title: "1440 Tokens" },
    { id: 6, title: "3600 Tokens" },
  ];
  const [token, setToken] = useState(null);

  const onClick = (m) => {
    setToken(m);
  };

  useEffect(() => {
    setToken(array[0]);
  }, []);

  return (
    <div className="card shadow p-3">
      <h2 class="circle">
        <span>2</span>
        Enter ID
      </h2>

      <div className="row">
        {array.map((m, i) => (
          <div
            key={i}
            className="col-6 col-md-4 voucher-list-element"
            onClick={() => onClick(m)}
          >
            <a className={`${token && token.id === m.id ? "active" : ""} pt-3`}>
              <span className="element-check-label"></span>
              {m.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionVoucher;
