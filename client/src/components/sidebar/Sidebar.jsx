import { useEffect, useState } from "react";
import "./Sidebar.css";
import {getCategories} from "../../apis/categories.api"
import {Link} from "react-router-dom";



function Sidebar() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const categories = await getCategories()
      setCats(categories)
    }
    getCat()
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSr0z2vTqP8NzQVfHsBDUBjHGQ0aorE_65mg&usqp=CAU"
          alt="about me image"
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
          tempore deleniti amet perferendis laboriosam harum
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          {
            cats.map((cat, index) => (
              <li key={index} className="sidebar-list-item">
                <Link to={`/?cat=${cat.name}`} className="link">
                  {cat.name}
                </Link>
              </li>
              
            ))
          }
          
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW ME</span>
        <div className="sidebar-social-icons">
          <i className="sidebar-icons fa-brands fa-facebook"></i>
          <i className="sidebar-icons fa-brands fa-x-twitter"></i>
          <i className="sidebar-icons fa-brands fa-square-instagram"></i>
          <i className="sidebar-icons fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
