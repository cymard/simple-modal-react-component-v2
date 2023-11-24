import React, { useRef } from 'react';
import './modal.css';

/**
 * Composant Modal utilisé pour afficher un message.
 * @component
 * @param {boolean} isOpen - Indique si la modal est ouverte ou fermée.
 * @param {Function} onClose - Fonction appelé pour fermer la modale.
 * @param {Function} onExternalClick - Fonction appelée lors d'un clic en dehors de la modal.
 * @param {React.ReactNode} children - Contenu de la modal.
 * @returns {JSX.Element} - Élément React représentant la modal.
 */
const Modal = ({isOpen, onClose, onExternalClick, children}) => {
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);

    /**
     * Gère la fermeture de la modal.
     * @function
     * @private
     */
    const handleClose = () => {
        if (typeof onClose !== 'function') {
            console.error('onClose must be a function');
            return ;
        }

        onClose();
    }

    /**
     * Gère les clics en dehors de la modal.
     * @function
     * @private
     * @param {MouseEvent} e - Objet d'événement représentant le clic de la souris.
     */
    const handleExternalClick = e => {
        if(e.target === paragraphRef.current || e.target === buttonRef.current) {
            return;
        }

        if (typeof onExternalClick !== 'function') {
            console.error('onExternalClick must be a function');
            return ;
        }

        onExternalClick();
    }

    return (
        <>
            { isOpen &&
                <div onClick={e => handleExternalClick(e)} className="modalContent">
                    <p ref={paragraphRef}>{children}</p>
                    <button ref={buttonRef} onClick={handleClose}></button>
                </div>
            }
        </>
    );
};

export default Modal;
