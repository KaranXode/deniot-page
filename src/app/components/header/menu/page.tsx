import Link from 'next/link';
import React, { useState } from 'react';

const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="menu-container">
            <button className="hamburger" onClick={toggleMenu}>
                &#9776;
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>
                    &times;
                </button>
                <nav>

                    <ul>
                        <li className="text-[25px] py-[25px] menu"><Link href="#">Interior Design</Link></li>
                        <li className="text-[25px] py-[25px]  menu"><Link href="#">Architecture</Link></li>
                        <li className="text-[25px] py-[25px]  menu"><Link href="#">Furniture Q&A with JLD</Link></li>
                        <li className="text-[25px] py-[25px]  menu"><Link href="#"> Q&A with JLD</Link></li>
                        <li className="text-[25px] py-[25px]  menu"><Link href="#"> Books</Link></li>
                        <li className="text-[25px] py-[25px]  menu" ><Link href="#"> Instagram</Link></li>
                        <li className="text-[25px] py-[25px]  menu"><Link href="#"> Contact</Link></li>


                    </ul>

                </nav>
            </div>
        </div>
    );
};

export default SidebarMenu;
