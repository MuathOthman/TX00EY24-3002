import React from "react";
import { FiUser, FiAtSign, FiLock, FiUserCheck } from "react-icons/fi";

const iconComponents = {
  user: <FiUser />,
  atSign: <FiAtSign />,
  lock: <FiLock />,
  userCheck: <FiUserCheck />,
};

function Field({ label, icon, type = "text", onChange }) {
  const iconComponent = iconComponents[icon] || null;

  return (
    <div className="fields-container">
      {iconComponent} {}
      <input type={type} placeholder={label} onChange={(i) => onChange(i.target.value)} />
    </div>
  );
}

export default Field;
