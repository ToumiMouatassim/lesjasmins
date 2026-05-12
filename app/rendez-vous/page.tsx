'use client';

import { useState } from 'react';
import NextLink from '../components/NextLink';
import { servicesList } from '@/data/data';
import {
  format,
  addDays,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameDay,
  isBefore,
} from 'date-fns';

interface CalendarProps {
  reservedDates: string[];
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  reservedDates,
  selectedDate,
  setSelectedDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const startMonth = startOfMonth(currentMonth);
  const endMonth = endOfMonth(currentMonth);

  const startDate = startOfWeek(startMonth, { weekStartsOn: 1 });
  const endDate = endOfWeek(endMonth, { weekStartsOn: 1 });

  const generateCalendar = (): Date[] => {
    const days: Date[] = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }
    return days;
  };

  const isReserved = (day: Date) =>
    reservedDates.includes(format(day, 'yyyy-MM-dd'));

  const isPast = (day: Date) => isBefore(day, new Date());

  return (
    <div className="calendar border rounded p-3 shadow-sm">
      <div className="d-flex justify-content-between mb-3">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="btn btn-sm btn-outline-primary"
        >
          &lt;
        </button>
        <h5>{format(currentMonth, 'MMMM yyyy')}</h5>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="btn btn-sm btn-outline-primary"
        >
          &gt;
        </button>
      </div>

      <div
        className="d-grid mb-2"
        style={{ gridTemplateColumns: 'repeat(7,1fr)' }}
      >
        {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
          <div key={day} className="text-center fw-bold text-primary">
            {day}
          </div>
        ))}
      </div>

      <div
        className="d-grid"
        style={{ gridTemplateColumns: 'repeat(7,1fr)' }}
      >
        {generateCalendar().map((day) => {
          const disabled = isReserved(day) || isPast(day);
          const selected = selectedDate && isSameDay(day, selectedDate);

          return (
            <div
              key={day.toString()}
              onClick={() => !disabled && setSelectedDate(day)}
              className={`
                text-center py-2 border small
                ${disabled ? 'bg-secondary text-white' : 'bg-light'}
                ${selected ? 'bg-primary text-white fw-bold' : ''}
              `}
              style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
            >
              {format(day, 'd')}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <p className="mt-3 text-primary fw-semibold">
          Date sélectionnée : {format(selectedDate, 'yyyy-MM-dd')}
        </p>
      )}
    </div>
  );
};

const AppointmentWithCalendar: React.FC = () => {
  const [reservedDates] = useState<string[]>(['2026-03-10', '2026-03-15']);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const whatsappNumber = '212668091193';

  // validation email
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // validation phone (au moins 8 chiffres)
  const isValidPhone = (phone: string) =>
    /^\d{8,15}$/.test(phone.replace(/\s/g, ''));

  const buildMessage = () => `
Nouveau rendez-vous

Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Service: ${service}
Date: ${selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''}

Message:
${message}
`;

  // popup personnalisée
  const showPopup = (text: string) => {
    const popup = document.createElement('div');
    popup.innerText = text;
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.right = '20px';
    popup.style.background = '#007bff';
    popup.style.color = '#fff';
    popup.style.padding = '15px 20px';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
    popup.style.zIndex = '9999';
    popup.style.fontSize = '14px';
    popup.style.fontWeight = 'bold';
    document.body.appendChild(popup);
    setTimeout(() => document.body.removeChild(popup), 4000);
  };

  const validate = () => {
    if (!name || !phone || !service || !selectedDate) {
      showPopup('Veuillez remplir tous les champs !');
      return false;
    }

    // if (email && !isValidEmail(email)) {
    //   showPopup('Email invalide !');
    //   return false;
    // }

    if (!isValidPhone(phone)) {
      showPopup('Téléphone invalide (au moins 8 chiffres) !');
      return false;
    }

    return true;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      buildMessage()
    )}`;

    window.open(url, '_blank');
  };

  const sendEmail = () => {
    if (!validate()) return;

    const subject = 'Nouveau rendez-vous';
    const body = buildMessage();
    window.location.href = `mailto:cliniquelesjasminss@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const sendBoth = () => {
    if (!validate()) return;
    sendWhatsApp();
    setTimeout(() => {
      sendEmail();
    }, 500);
  };

  return(
    <>
    <section
        className="breadcrumb-hero position-relative d-flex align-items-center justify-content-center"
        style={{
          height: '50vh',
          minHeight: '150px',
          backgroundImage: 'url(/img/aboutbg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 999,
          paddingTop: '120px',
        }}
      >
        <div
          className="overlay position-absolute w-100 h-100"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,123,255,0.4))',
            zIndex: 2,
            top: 0,
            bottom: 0,
          }}
        ></div>

        <div className="container text-center position-relative" style={{ zIndex: 3 }}>
          <h1 className="fs-48 text-white mb-3 animate__animated animate__fadeInDown">
            Rendez-vous
          </h1>
          <p className="mt-2 text-white fs-18 animate__animated animate__fadeInUp animate__delay-1s">
            Nous sommes là pour vous aider, contactez-nous !
          </p>
        </div>
      </section>
    <section className="wrapper bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="mb-4">Calendrier des rendez-vous</h2>

            {!selectedDate && (
              <div className="alert alert-danger py-2">
                Veuillez sélectionner une date.
              </div>
            )}

            <Calendar
              reservedDates={reservedDates}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4">Prendre Rendez-vous</h2>
            <form>
              <input
                className="form-control mb-3"
                placeholder="Nom complet"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form-control mb-3"
                placeholder="Téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <select
                className="form-control mb-3"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">Choisir un service</option>
                {servicesList.map((s) => (
                  <option key={s.id}>{s.title}</option>
                ))}
              </select>
              <textarea
                className="form-control mb-3"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="d-flex gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="btn btn-success"
                >
                  Envoyer via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={sendEmail}
                  className="btn btn-primary"
                >
                  Envoyer via Email
                </button>
                {/* <button
                  type="button"
                  onClick={sendBoth}
                  className="btn btn-dark"
                >
                  Envoyer les deux
                </button> */}
              </div>
            </form>
          </div>
          
        </div>
        <div className="text-center mt-5">
          <NextLink
            href="/"
            title="Retour à l'accueil"
            className="btn btn-outline-secondary"
          />
        </div>
      </div>
    </section>
  </>
  );
};

export default AppointmentWithCalendar;