import React from 'react'
import "../App.css";
import "./sidebar.css"
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Sidebar