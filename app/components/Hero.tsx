import { FC } from 'react';
import NextLink from './NextLink';

const Hero: FC = () => {
  return (
    <section className="hero position-relative" style={{
      height: '100vh',
      minHeight: '600px',
      maxHeight: '1000px' ,
      overflow: 'hidden' ,
      paddingTop: '131.5px',
      
    }}>
      <figure className="video-container bg-gray ">
        <div className="overlay" ></div>
        <video
          autoPlay
          muted
          loop
          src="/img/herovid-bg.mp4"
          className="video"
          playsInline
          aria-hidden="true"
          
        />
      </figure>

      {/* avec image  */}
      
      {/* <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <Image
          src="/img/hero-bg.webp"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div
          className="overlay position-absolute w-100 h-100"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}
        ></div>
      </div> */}
     

      <div className="container caption position-relative z-1">
        <div className="row" style={{ height: '85vh' }}>
          <div
            className="col-lg-8 p-5 text-center text-sm-start d-flex flex-column justify-content-center rounded"
            data-cues="slideInDown"
            data-group="page-title"
            data-interval={-200}
            data-delay={500}
          >
            <h2 className="fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
              Hopital Privé Les Jasmins, spécialiste des soins de santé.
            </h2>

            <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
              Faites confiance à Les Jasmins pour des soins complets et de qualité.
            </p>

            <div className="animate__animated animate__slideInUp animate__delay-3s">
              <NextLink
                title="Rendez-vous"
                href="/rendez-vous"
                className="btn btn-lg text-white secondary-bg rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
