import { Header } from '../components/header';
import { ServiceCards } from '../components/service-cards';
import { Destinations } from '../components/destinations';
import { Hero } from '../components/hero';
import { Footer } from "../components/footer";
import { SubscribeButton } from "../components/buttons";
import "../styles/newsletter.css";

export default function Home() {
    return (
        <div className="layout">
            <Header />
            <main>
                <Hero />
                <ServiceCards />
                <Destinations />
                <div className='subscribeForm' id="Newsletter">
                    <h1>
                        Subscribe to get information, latest news and other
                        interesting offers about travel
                    </h1>
                    <form action="..">
                        <input type="email" id='subscribe-email' />
                        <SubscribeButton />
                    </form>
                </div>
                <Footer />
            </main>
        </div>
    );
}