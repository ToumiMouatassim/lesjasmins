'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import PopUpAlert from './PopUpAlert';

interface FormData {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
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

    Message :
    ${formData.message}
      `;

      const mailtoLink = `mailto:contact@hopitallesjasmins.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

       window.location.href = mailtoLink;

       setTimeout(() => {
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=contact@hopitallesjasmins.com&su=${encodeURIComponent(
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

       setFormData({
        nom: '',
        email: '',
        sujet: '',
        message: '',
      });

      setTimeout(() => setPopup({ ...popup, show: false }), 4000);
  };


  return (
    <section className="wrapper bg-light py-10 py-md-14">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-6 mb-lg-0">
            <h2
              className="fw-bold position-relative d-inline-block pb-2 mb-4"
              style={{
                fontSize: '4rem',
                color: '#1372B2',
              }}
            >
              Contactez-nous
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '3px',
                  backgroundColor: '#8BBB44',
                  borderRadius: '2px',
                }}
              ></span>
            </h2>

            <p className="mb-5">
              Vous avez une question, besoin d’un rendez-vous ou d’un renseignement ?
              Remplissez le formulaire et notre équipe vous répondra dans les plus brefs délais.
            </p>

            {popup.show && <PopUpAlert message={popup.message} type={popup.type} onClose={() => setPopup({ ...popup, show: false })} />}

            <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-sm">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="nom"
                    className="form-control"
                    placeholder="Nom complet"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Adresse e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="sujet"
                    className="form-control"
                    placeholder="Sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={4}
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-md-12 text-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-lg text-white"
                    style={{
                      backgroundColor: '#8BBB44',
                      borderRadius: '3px',
                      padding: '10px 40px',
                    }}
                  >
                    Envoyer le message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Carte Google Maps */}
          <div className="col-lg-6">
            <div className="ratio ratio-16x9 shadow-sm rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11255.591011014323!2d-6.377171630135382!3d32.32771514729731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda3870075087b93%3A0x41a4e5c5647399e0!2sH%C3%B4pital%20Priv%C3%A9%20Les%20Jasmins!5e1!3m2!1sfr!2sma!4v1772189666266!5m2!1sfr!2sma"                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
