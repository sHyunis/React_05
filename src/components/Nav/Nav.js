import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
// Link는 a태그 대용으로 사용 가능
// import style from './Nav.module.css'
import './Nav.css'

/* 
  localhost:3000/home
  localhost:3000/about
  localhost:3000/products
  localhost:3000/products/:id
  localhost:3000/products/productDetail
  localhost:3000/products/reviews
  localhost:3000/profile
*/

// Link 사용
// const Nav = () => {
//   const [menuNum, setMenuNum] = useState(0);

//   const menu = ["home", "about", "products", "profile"];
//   return (
//     <nav className={style.lnb}>
//       <ul>
//         {
//           menu.map((item, index) => (
//               <li>
//                   <Link to={`${item}`} onClick={ () => {setMenuNum(index)}}
//                         className={menuNum === index ? style.active : null}
//                   >{item}</Link>
//               </li>
//           ))
//         }
//       </ul>
//     </nav>
//   )
// }

// NavLink 사용
const Nav = () => {
  const [menuNum, setMenuNum] = useState(0);

  const menu = ["home", "about", "products", "profile"];
  return (
    <nav className='lnb'>
      <ul>
        {
          menu.map((item, index) => (
              <li>
                  <NavLink to={`${item}`} onClick={ () => {setMenuNum(index)}}
                  >{item}</NavLink>
              </li>
          ))
        }
      </ul>        
    </nav>
  )
}

export default Nav