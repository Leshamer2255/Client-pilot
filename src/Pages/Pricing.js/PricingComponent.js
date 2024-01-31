import React, { useState } from 'react';
import styles from './PricingComponent.module.css';
import Modal from '../Modal';
import BillingDetails from '../BillingDetails';

const PricingComponent = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [billingDetails, setBillingDetails] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleStart = (plan) => {
        setSelectedPlan(plan);
        createBillingDetails(plan);
    };

    const createBillingDetails = (plan) => {
        if (plan) {
            const newBillingDetails = {
                price: getPrice(plan),
                product: getProduct(plan),
                paymentMethods: ['Credit Card', 'PayPal', 'Bank Transfer'],
                cardInfo: {
                    cardNumber: '**** **** **** 1234',
                    expirationDate: '12/24',
                    cvv: '123'
                }
            };

            setBillingDetails(newBillingDetails);
            setIsModalOpen(true); // Open the modal
        } else {
            alert('Please select a pricing plan before clicking "Start".');
        }
    };

    const getPrice = (plan) => {
        switch (plan) {
            case 'Essential':
                return '$19.99';
            case 'Advanced':
            case 'Professional':
                return '$20/month';
            case 'Enterprise':
                return '$99.99';
            default:
                return '';
        }
    };

    const getProduct = (plan) => {
        switch (plan) {
            case 'Essential':
                return 'Basic Plan';
            case 'Advanced':
            case 'Professional':
                return 'Standard Plan';
            case 'Enterprise':
                return 'Premium Plan';
            default:
                return '';
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.pricingContainer}>
            <div>
                <h2>Essential</h2>
                <p>Price: $19.99</p>
                <button className={styles.startButton} onClick={() => handleStart('Essential')}>
                    Start 14 days free trial
                </button>
                <p>Lorem23</p>
            </div>
            <div>
                <h2>Advanced</h2>
                <p>Price: $20/month</p>
                <button className={styles.startButton} onClick={() => handleStart('Advanced')}>
                    Start 14 days free trial
                </button>
            </div>
            <div>
                <h2>Professional</h2>
                <p>Price: $20/month</p>
                <button className={styles.startButton} onClick={() => handleStart('Professional')}>
                    Start 14 days free trial
                </button>
            </div>
            <div>
                <h2>Enterprise</h2>
                <p>Price: $99.99</p>
                <button className={styles.startButton} onClick={() => handleStart('Enterprise')}>
                    Start 14 days free trial
                </button>
            </div>
            {isModalOpen && (
                <Modal onClose={closeModal} billingDetails={billingDetails} />
            )}
        </div>
    );
};

export default PricingComponent;
