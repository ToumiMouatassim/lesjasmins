'use client';

import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import NextLink from '../components/NextLink';
import PopUpAlert from '../components/PopUpAlert';
import HospitalQR from '../components/Localisation';

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

    const mailtoLink = `mailto:cliniquelesjasminss@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=cliniquelesjasminss@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        '_blank'
      );
    }, 1000);

    setPopup({
      show: true,
      type: 'success',
      message: '📧 Votre message est prêt à être envoyé.',
    });

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
      {/* HERO */}
      <section
        className="breadcrumb-hero position-relative d-flex align-items-center justify-content-center"
        style={{
          height: '50vh',
          minHeight: '150px',
          backgroundImage: 'url(/img/aboutbg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '120px',
        }}
      >
        <div
          className="overlay position-absolute w-100"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,123,255,0.4))',
            top: 0,
            bottom: 0,
          }}
        ></div>

        <div className="container text-center position-relative" style={{ zIndex: 3 }}>
          <h1 className="fs-48 text-white mb-3">Contact</h1>
          <p className="text-white">Nous sommes là pour vous aider, contactez-nous !</p>
        </div>
      </section>

      {popup.show && (
        <PopUpAlert
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup({ ...popup, show: false })}
        />
      )}

      <main className="content-wrapper pt-15">
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row gx-5">

              {/* COLONNE GAUCHE */}
              <div className="col-lg-6 mb-6 mb-lg-0">

                <h2 className="mb-4">Nos Coordonnées</h2>

                <div className="mb-4 p-4 bg-white rounded shadow-sm">
                  <p><strong>Adresse :</strong> Béni Mellal , Ouled Ayad , Lotissement Mawra Tranche 1</p>
                  <p><strong>Téléphone :</strong> +212 523425820</p>
                  <p><strong>Email :</strong> cliniquelesjasminss@gmail.com</p>
                </div>

                <h3 className="mb-3">Notre emplacement</h3>

                <div className="map-container rounded shadow-sm mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11255.591011014323!2d-6.377171630135382!3d32.32771514729731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda3870075087b93%3A0x41a4e5c5647399e0!2sH%C3%B4pital%20Priv%C3%A9%20Les%20Jasmins!5e1!3m2!1sfr!2sma!4v1772189666266!5m2!1sfr!2sma"
                    style={{ width: '100%', height: '350px', border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>

                {/* QR CODE */}
                <div className="qr-card text-center p-4 bg-white rounded shadow-sm">
                  <h3 className="mb-3">Scanner pour la localisation</h3>
                  <p className="text-muted">
                    Scannez ce QR code pour ouvrir la localisation de l'hôpital
                  </p>

                  <div className="qr-container">
                    <HospitalQR />
                  </div>
                </div>

              </div>

              {/* COLONNE DROITE */}
              <div className="col-lg-6">
                <h2 className="mb-4">Envoyez-nous un message</h2>

                <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-sm">

                  {['nom', 'email', 'telephone', 'sujet'].map((field) => (
                    <div className="mb-3" key={field}>
                      <label className="form-label text-capitalize">
                        {field === 'nom' ? 'Nom complet' : field}
                      </label>

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
                    <label className="form-label">Message</label>

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

      <style>{`
        .map-container iframe {
          border-radius: 10px;
        }

        .qr-card {
          margin-top: 20px;
          transition: 0.3s;
        }

        .qr-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .qr-container {
          display: flex;
          justify-content: center;
          margin-top: 15px;
        }

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