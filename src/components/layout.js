import {Header} from './header';
import {ServiceCards} from './service-cards';
import {Destinations} from './destinations';
import {Hero} from './hero';
import {Footer} from "./footer";
import {SubscribeButton} from "./buttons";
import  "../styles/newsletter.css"

export default function Layout() {
    return (
        <div className="layout">
            <Header/>
            <main>
                <Hero/>
                <ServiceCards/>
                <Destinations/>
                <div className='subscribeForm'>
                    <h1>
                        Subscribe to get information, latest news and other
                        interesting offers about travel
                    </h1>
                    <form action="../">
                        <input type="email" id='subscribe-email'/>
                        <SubscribeButton/>
                    </form>
                </div>
                <Footer/>
            </main>
        </div>
    );
}