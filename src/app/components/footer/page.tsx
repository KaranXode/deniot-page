import Image from "next/image";
import Link from "next/link";
import homepage from "../../assets/Images/homepage.jpg";


export default function Footer() {
    return (
        <>
            <footer className="p-[24px] lg:p-[90px] bg-[#8e8c8c] max-[1300px]">
                <div className="flex justify-center pb-[70px] relative">

                    <Image src={homepage} alt="logo" width={460} height={460} />
                    <h1 className= " text-white absolute z-[1] top-[70px]  lg:top-0 xl:top-0 w-screen max-w-[1100px] text-center mix-blend-overlay m-0 lg:px-[50px] py-0; ">Interior Design</h1>
                </div>
                <div className="flex justify-center">
                    <ul className="flex flex-wrap justify-center gap-5">
                        <li ><Link href="#" className="text-white">Books</Link></li>
                        <li ><Link href="#" className="text-white">Press Room</Link></li>
                        <li ><Link href="#" className="text-white">Private</Link></li>
                        <li ><Link href="#" className="text-white">Legal Notice</Link></li>
                        <li  ><Link href="#" className="text-white">Instagram</Link></li>
                        <li ><Link href="#" className="text-white">Contact</Link></li>
                    </ul>
                </div>
                <div className="text-center mt-[40px]">
                    <p className="text-white">Created by
                        <Link href={""} className="text-white">143</Link>
                    </p>
                </div>
            </footer>
        </>
    )
}
