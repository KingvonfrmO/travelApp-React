import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { ServiceCards } from '../components/serviceCards';
import { Destinations } from '../components/destinations';
import {SubscribeForm} from "../components/subscribeForm";
import { Footer } from "../components/footer";
import "../styles/newsletter.css";


export default function Home() {
    return (
        <div className="layout">
            <Header />
            <main>
                <Hero />
                <ServiceCards />
                <Destinations />
                <SubscribeForm/>
                <Footer />
            </main>
        </div>
    );
}