import './Hero.scss';
export default function Hero(){
 return(
    <section className="hero">
        <p className="hero__para">Our mission:</p>
        <h1 className="hero__heading">Provide photographers a space to share photos of the neighborhoods they cherish, 
            <span className="hero__heading-span"> expressed in their unique style.
            </span>
        </h1>
    </section>
 );
}