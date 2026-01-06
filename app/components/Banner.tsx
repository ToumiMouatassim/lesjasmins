import { FC, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  alt: string;
  imageName: string;
  btnColor?: 'danger' | 'blue' | 'primary' | string;
  video?: boolean;
  showShape?: boolean;
}

const Banner: FC<BannerProps> = ({ alt, imageName, btnColor = 'danger', video = false, showShape = false }) => {
  return (
    <Fragment>
      {video && (
        <Link
          data-glightbox
          href="/img/hero-bg.mp4"
          className={`btn btn-circle btn-${btnColor} btn-play ripple mx-auto mb-5 position-absolute`}
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
          }}
        >
          <i className="icn-caret-right" />
        </Link>
      )}

      <figure className="rounded image position-relative mt-5 mt-lg-0">
        {showShape && (
          <div
            className="shape rounded img-bg rellax d-md-block"
            style={{
              width: '100%',
              height: '100%',
              left: '-1.5rem',
              bottom: '-1.8rem',
              position: 'absolute',
              zIndex: 1,
            }}
          />
        )}

        <Image
          src={imageName}
          alt={`${alt} | ENTrova`}
          width={500}
          height={400}
          className="position-relative z-2"
          priority
        />
      </figure>
    </Fragment>
  );
};

export default Banner;
