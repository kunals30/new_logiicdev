import React from "react"
import HeroSection from "../components/Home/HeroSection"
import WhatWeDo from "../components/Home/WhatWeDo"
import ProjectPlanning from "../components/Home/ProjectPlanning"
import Advantages from "../components/Home/Advantages"
import ProjectSection from "../components/Home/ProjectSection"
import StatsSection from "../components/Home/StatsSection"
import CallToAction from "../components/CallToAction"
import LogoCarousel from "../components/LogoCarousel"
import AdvantagesCarousel from "../components/Home/AdvantagesCarousel"
import Testimonials from "../components/Home/Testimonials"
import ProductOmnipower from "../components/Home/ProductOmnipower"

const Home = () => {
	return (
		<>
			<HeroSection />
			{/* <WhatWeDo /> */}
			<ProjectPlanning />
			<ProductOmnipower />
			<AdvantagesCarousel />
			<ProjectSection />
			<Advantages />
			<StatsSection />
			<Testimonials />
			<LogoCarousel />
			{/* <CallToAction /> */}
		</>
	)
}

export default Home
