import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Perks from "@/components/perks";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <Hero />
            <Features />
            <Perks />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <FAQ />
            <CTA />
        </div>
    );
};

export default HomePage;
