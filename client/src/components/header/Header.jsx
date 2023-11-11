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
        src="https://media.istockphoto.com/id/1301592032/photo/spring-beautiful-background-with-green-juicy-young-foliage-and-empty-wooden-table-in-nature.jpg?s=612x612&w=0&k=20&c=vw-rzeOg1IUODaey1Xg7n8rPTk8BjWi1FKDa_gtMlBY="
        alt="background image"
      />
    </div>
  );
}

export default Header;
