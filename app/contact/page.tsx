'use client';

import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import NextLink from '../components/NextLink';
import PopUpAlert from '../components/PopUpAlert';

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });

  const [popup, setPopup] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({
    show: false,
    type: 'success',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const subject = formData.sujet || 'Message depuis le site web';

  const body = `
Nom : ${formData.nom}
Email : ${formData.email}
Téléphone : ${formData.telephone || 'Non renseigné'}

Message :
${formData.message}
  `;

  const mailtoLink = `mailto:cliniquelesjasminss@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

   window.location.href = mailtoLink;

   setTimeout(() => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=cliniquelesjasminss@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      '_blank'
    );
  }, 1000);

  setPopup({
    show: true,
    type: 'success',
    message: '📧 Votre message est prêt à être envoyé.',
  });

  // Reset formulaire
  setFormData({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });

  setTimeout(() => setPopup({ ...popup, show: false }), 4000);
};



  return (
    <Fragment> 
      <section className="breadcrumb-hero position-relative d-flex align-items-center justify-content-center" style={{
        height: '50vh',
        minHeight: '150px',
        backgroundImage: 'url(/img/aboutbg.png)',  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 999,   
        paddingTop: '120px',  
      }}>
        <div className="overlay position-absolute w-100  " style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,123,255,0.4))',   
          zIndex: 2,
          top: 0,
          bottom: 0,
        }}></div>
        <div className="container text-center position-relative pt-10" style={{ zIndex: 3 }}>
          <h1 className="fs-48 text-white mb-3 animate__animated animate__fadeInDown">Contact</h1>
          <p className="mt-2 text-white fs-18 animate__animated animate__fadeInUp animate__delay-1s">
            Nous sommes là pour vous aider, contactez-nous !
          </p>
        </div>
      </section>
 
      {popup.show && <PopUpAlert message={popup.message} type={popup.type} onClose={() => setPopup({ ...popup, show: false })} />}

      <main className="content-wrapper pt-15">
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row gx-5"> 
              <div className="col-lg-6 mb-6 mb-lg-0">
                <h2 className="mb-4">Nos Coordonnées</h2>
                <div className="mb-4 p-4 bg-white rounded shadow-sm">
                  <p><strong>Adresse :</strong> Béni Mellal , Ouled Ayad , Lotissement Mawra Tranche 1</p>
                  <p><strong>Téléphone :</strong> +212 523425820 </p>
                  <p><strong>Email :</strong> cliniquelesjasminss@gmail.com</p>
                </div>

                <h3 className="mb-3">Notre emplacement</h3>
                <div className="map-container rounded shadow-sm mb-4">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.9917217979664!2d-6.38323502526694!3d32.32469160696611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda3870044d320d7%3A0x40d303fd92d80773!2sH%C3%B4pital%20Priv%C3%A9%20Les%20Jasmins!5e1!3m2!1sfr!2sma!4v1768985951085!5m2!1sfr!2sma"                     
                  style={{ width: '100%', height: '400px', border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte LesJasmins"
                  ></iframe>
                </div>
              </div>
 
              <div className="col-lg-6">
                <h2 className="mb-4">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-sm">
                  {['nom', 'email', 'telephone', 'sujet'].map((field) => (
                    <div className="mb-3" key={field}>
                      <label className="form-label text-dark text-capitalize">{field === 'nom' ? 'Nom complet' : field}</label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        className="form-control"
                        value={formData[field as keyof FormData]}
                        onChange={handleChange}
                        required={field !== 'telephone' && field !== 'sujet'}
                      />
                    </div>
                  ))}

                  <div className="mb-3">
                    <label className="form-label text-dark">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="text-center mt-5">
              <NextLink href="/" title="Retour à l'accueil" className="btn btn-outline-secondary" />
            </div>
          </div>
        </section>
      </main>

      <style >{`
        h1.position-relative { position: relative; }
        .underline {
          display: block;
          width: 60px;
          height: 3px;
          background-color: #8bbb44;
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        .map-container iframe { border-radius: 0.5rem; }
        .btn-primary {
          background-color: #1372b2;
          border-color: #1372b2;
        }
        .btn-primary:hover {
          background-color: #8bbb44;
          border-color: #8bbb44;
        }
        
      `}</style>
    </Fragment>
  );
};

export default Contact;
