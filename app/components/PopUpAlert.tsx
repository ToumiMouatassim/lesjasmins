'use client';

import { FC } from 'react';

interface PopUpAlertProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  onClose?: () => void;
}

const colors = {
  success: '#198754',
  error: '#dc3545',
  info: '#0d6efd',
  warning: '#ffc107',
};

const PopUpAlert: FC<PopUpAlertProps> = ({ message, type = 'info', onClose }) => {
  return (
    <div className="popup-alert">
      <div className="popup-content">
        <span>{message}</span>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>

      <style >{`
        .popup-alert {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 9999;
          animation: slideIn 0.3s ease-out;
        }

        .popup-content {
          background-color: ${colors[type]};
          color: white;
          padding: 16px 24px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-width: 250px;
          font-weight: 500;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
          margin-left: 12px;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PopUpAlert;
