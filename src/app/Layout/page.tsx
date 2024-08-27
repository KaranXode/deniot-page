'use client'
import { useEffect, useState } from "react";
import Circlecursor from "../components/cursor/page";
import Header from "../components/header/page";
import logo from "../assets/logo.svg"
import Image from "next/image";
import Footer from "../components/footer/page";
import HeroSection from "../components/heroSection/page";
import Content from "../components/content/page";
import SliderComponent from "../components/slider/page";
import City from "../components/city/page";
import ScrollIndicator from "../components/scroll/page";


export default function Layout() {

    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen opacity-[0.7]">
                    <div > <Image src={logo} width={140} height={140} alt="Logo" className="w-[48px] lg:w-[140px]" /></div>
                </div>
            ) : (
                <>
                    <Circlecursor />
                    <ScrollIndicator />
                    <Header />

                    <HeroSection />
                    <Content title="Jean-Louis Deniot" />
                    <SliderComponent />

                    <Content title="Our international interior" />
                    <City />

                    <Footer />

                </>

            )}
        </>
    )
}
