'use client';

import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import NextLink from '../components/NextLink';

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  poste: string;
  experience: string;
  education: string;
  competences: string;
  motivation: string;
}

interface PopupState {
  show: boolean;
  type: 'success' | 'error';
  message: string;
}

const Recrutement: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    poste: '',
    experience: '',
    education: '',
    competences: '',
    motivation: '',
  });

  const [popup, setPopup] = useState<PopupState>({
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

  const subject = `Nouvelle candidature – ${formData.poste}`;

  const body = `
    Nom: ${formData.nom}
    Prénom: ${formData.prenom}
    Email: ${formData.email}
    Téléphone: ${formData.telephone}
    Poste: ${formData.poste}

    Expérience:
    ${formData.experience}

    Formation:
    ${formData.education}

    Compétences:
    ${formData.competences}

    Motivation:
    ${formData.motivation}
      `;

      const mailtoLink = `mailto:recrutement@clinique.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

       window.location.href = mailtoLink;

       setTimeout(() => {
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=recrutement@clinique.com&su=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`,
          '_blank'
        );
      }, 1000);

      setPopup({
        show: true,
        type: 'success',
        message: '✅ Votre candidature est prête à être envoyée.',
      });

      setTimeout(() => setPopup({ ...popup, show: false }), 4000);
    };


  return (
    <Fragment>
      <section className="breadcrumb-hero position-relative d-flex align-items-center justify-content-center" style={{ height: '50vh', minHeight: '150px', backgroundImage: 'url(/img/aboutbg.png)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 999, paddingTop: '120px', }}> <div className="overlay position-absolute w-100 " style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,123,255,0.4))', zIndex: 2, top: 0, bottom: 0, }}></div> <div className="container text-center position-relative pt-10" style={{ zIndex: 3 }}> <h1 className="fs-48 text-white mb-3 animate__animated animate__fadeInDown">Recrutement</h1> <p className="mt-2 text-white fs-18 animate__animated animate__fadeInUp animate__delay-1s"> Rejoignez notre équipe et soumettez votre candidature.Nous sommes là pour vous aider, contactez-nous ! </p> </div> </section>
      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="mb-6 text-center">Formulaire de candidature</h2>
                <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-sm">
                  <div className="row g-3">
                    {['nom', 'prenom', 'email', 'telephone'].map((field) => (
                    <div className="col-md-6" key={field}>
                      <label className="form-label text-capitalize">{field}</label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        className="form-control"
                        value={formData[field as keyof FormData]}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  ))} 
                  
                  <div className="col-12">
                    <label className="form-label text-capitalize">Poste</label>
                    <input
                      type="text"
                      name="poste"
                      className="form-control"
                      value={formData.poste}
                      onChange={handleChange}
                      required
                    />
                  </div>


                    {['experience', 'education', 'competences', 'motivation'].map((field) => (
                      <div className="col-12" key={field}>
                        <label className="form-label text-capitalize">{field}</label>
                        <textarea
                          name={field}
                          className="form-control"
                          rows={field === 'experience' ? 3 : 2}
                          value={formData[field as keyof FormData]}
                          onChange={handleChange}
                        />
                      </div>
                    ))}

                    <div className="col-12 text-center mt-3">
                      <button type="submit" className="btn btn-md secondary-bg text-white rounded">
                        Soumettre ma candidature
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-center mt-5">
                  <NextLink href="/" title="Retour à l'accueil" className="btn btn-outline-secondary" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {popup.show && (
        <div className={`alert ${popup.type === 'success' ? 'alert-success' : 'alert-danger'} mt-3 text-center`}>
          {popup.message}
        </div>
      )}
    </Fragment>
  );
};

export default Recrutement;
