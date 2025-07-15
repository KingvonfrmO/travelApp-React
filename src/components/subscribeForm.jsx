import {Buttons} from "./buttons";

export function SubscribeForm(){
    return(
        <div className='subscribeForm' id="Newsletter">
            <h1>
                Subscribe to get information, latest news and other
                interesting offers about travel
            </h1>
            <form action="..">
                <input type="email" id='subscribe-email' />
                <Buttons label={"Subscribe"} class_name={'subscribeButton'}/>
            </form>
        </div>
    );
}