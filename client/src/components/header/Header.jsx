import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-title-sm">React</span>
        <span className="header-title-lg">Blog</span>
      </div>
      <img
        className="header-image"
        src="https://img.freepik.com/free-photo/border-green-leaves-yellow-with-copyspace_24972-499.jpg?size=626&ext=jpg&ga=GA1.1.238767090.1701343230&semt=ais"
        alt="background image"
      />
    </div>
  );
}

export default Header;
