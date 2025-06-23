import React from 'react';

const FreeCourse = () => {
  return (
    <div className="container free-course">
      <div className="free-left">
        <h1>BEPUL DARSGA<br />RO‘YXATDAN  O‘TING</h1>
        <p>Va o‘zингizning ingliz tili darajangizni<br />aniqlash imkoniyatiga ega bo‘ling</p>
      </div>
      <div className="free-right">
        <input type="text" placeholder="Ismingiz" />
        <input type="text" placeholder="Telefon raqamingiz" />
        <input type="text" placeholder="Telefon raqamingiz" />
        <button>BEPUL DARSGA YOZILISH</button>
      </div>
    </div>
  );
};

export default FreeCourse;
