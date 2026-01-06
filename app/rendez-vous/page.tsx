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
}

const Calendar: React.FC<CalendarProps> = ({ reservedDates }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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
       <div className="d-flex justify-content-between align-items-center mb-3">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="btn btn-sm btn-outline-primary"
        >
          &lt;
        </button>

        <h5 className="mb-0">{format(currentMonth, 'MMMM yyyy')}</h5>

        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="btn btn-sm btn-outline-primary"
        >
          &gt;
        </button>
      </div>

       <div className="d-grid mb-2" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
          <div key={day} className="fw-bold text-center text-primary">
            {day}
          </div>
        ))}
      </div>

       <div className="d-grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {generateCalendar().map((day) => {
          const isDisabled = isReserved(day) || isPast(day);
          const isSelected = selectedDate && isSameDay(day, selectedDate);

          return (
            <div
              key={day.toString()}
              onClick={() => !isDisabled && setSelectedDate(day)}
              className={`
                text-center py-2 border small
                ${isDisabled ? 'bg-secondary text-white' : 'bg-light'}
                ${isSelected ? 'bg-primary text-white fw-bold' : ''}
              `}
              style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
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
  const [reservedDates] = useState<string[]>([
    '2025-11-01',
    '2025-11-03',
    '2025-11-05',
  ]);

  return (
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

       <section className="wrapper bg-light py-10">
        <div className="container">
          <div className="row">
             <div className="col-lg-6 mb-6">
              <h2 className="mb-4">Prendre Rendez-vous</h2>

              <form>
                <input className="form-control mb-3" placeholder="Nom Complet" />
                <input className="form-control mb-3" placeholder="Email" type="email" />
                <input className="form-control mb-3" placeholder="Téléphone" />

                <select className="form-control mb-3">
                  <option value="">Choisir un service</option>

                  {servicesList.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>

                <textarea className="form-control mb-3" placeholder="Message"></textarea>

                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </form>
            </div>

             <div className="col-lg-6">
              <h2 className="mb-4">Calendrier des rendez-vous</h2>

              <Calendar reservedDates={reservedDates} />
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
                  <NextLink href="/" title="Retour à l'accueil" className="btn btn-outline-secondary" />
                </div>
      </section>
      
    </>
  );
};

export default AppointmentWithCalendar;
