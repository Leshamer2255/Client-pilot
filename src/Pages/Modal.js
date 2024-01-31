import React from 'react';
import styles from './Modal.module.css';
import BillingDetails from './BillingDetails';

const Modal = ({ onClose, billingDetails }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>Close</button>
                {billingDetails && (
                    <BillingDetails
                        price={billingDetails.price}
                        product={billingDetails.product}
                        paymentMethods={billingDetails.paymentMethods}
                        cardInfo={billingDetails.cardInfo}
                    />
                )}
            </div>
        </div>
    );
};

export default Modal;
