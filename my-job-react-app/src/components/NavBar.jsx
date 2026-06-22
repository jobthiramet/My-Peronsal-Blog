import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar">
      {/* โลโก้ฝั่งซ้าย */}
      <div className="logo">hh<span className="dot">.</span></div>
      
      {/* กลุ่มปุ่มกดฝั่งขวา */}
      <div className="nav-actions">
        <button className="btn-login">Log in</button>
        <button className="btn-signup">Sign up</button>
      </div>
    </nav>
  );
}