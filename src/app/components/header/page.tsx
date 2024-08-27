import Image from "next/image";
import Link from "next/link";
import logo from "../.././assets//logo.svg"
import './page.module.scss'
import SidebarMenu from "./menu/page";

export default function Header() {

    return (
        <>
            <header className="fixed top-0 w-full z-[10]">
                <nav className="   flex flex-wrap items-center  max-w-[1300px] w-full h-full relative z-[2] justify-between delay-[2s] transition-opacity duration-[0.3s] ease-[cubic-bezier(.25,0.46,0.45,0.94)] mx-auto my-0 px-6 lg:px-[50px] py-[10px] top-5
">
                    <div className="z-[10]">
                        <Link href="http://">
                            <Image src={logo} alt="Logo" width={55} height={58} className="opacity-[0.7] lg:w-[55px] w-[35px] h-auto" />

                        </Link>
                    </div>
                    <div className="lg:block hidden">
                        <ul className="flex justify-center items-center">
                            <li className="ml-[20px]"><Link href="#">Interior Design</Link></li>
                            <li className="ml-[20px]"><Link href="#">Architecture</Link></li>
                            <li className="ml-[20px]"><Link href="#">Furniture Q&A with JLD</Link></li>
                            <li className="ml-[20px]"><Link href="#"> Q&A with JLD</Link></li>
                            <li className="ml-[20px]"><Link href="#"> Books</Link></li>
                            <li className="ml-[20px]" ><Link href="#"> Instagram</Link></li>
                            <li className="ml-[20px]"><Link href="#"> Contact</Link></li>


                        </ul>
                    </div>

                    <SidebarMenu />

                </nav>
            </header>
        </>
    );
}