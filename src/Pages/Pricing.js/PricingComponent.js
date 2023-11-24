import React, { useState } from 'react';
import styles from './PricingComponent.module.css';

const PricingComponent = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleStart = () => {
        if (selectedPlan) {
            console.log(`Старт тарифного плану: ${selectedPlan}`);
        } else {
            alert('Будь ласка, оберіть тарифний план перед натисканням "Старт".');
        }
    };

    return (
        <div className={styles.pricingContainer}>
            <div>
                <h2>Essential</h2>
                <p>Ціна: $19.99</p>
                <div className={styles.features}>
                    <h3>Можливості тарифного плану "Базовий"</h3>
                    <ul>
                        <li>LZlzlxzlxl</li>
                    </ul>
                </div>
                <button className={styles.startButton} onClick={handleStart}>
                Starr 14 days free trial
                </button>
            </div>
            <div>
                <h2>Advanced</h2>
                <p>Ціна: $20/міс</p>
                <div className={styles.features}>
                    <h3>Можливості тарифного плану "Стандартний"</h3>
                    <ul>
                        <li>LZlzlxzlxl</li>
                    </ul>
                </div>
                <button className={styles.startButton} onClick={handleStart}>
                Starr 14 days free trial
                </button>
            </div>
            <div>
                <h2>Professional</h2>
                <p>Ціна: $20/міс</p>
                <div className={styles.features}>
                    <h3>Можливості тарифного плану "Стандартний"</h3>
                    <ul>
                        <li>LZlzlxzlxl</li>
                    </ul>
                </div>
                <button className={styles.startButton} onClick={handleStart}>
                Starr 14 days free trial
                </button>
            </div>
            <div>
                <h2>Enterprise</h2>
                <p>Ціна: $99.99</p>
                <div className={styles.features}>
                    <h3>Можливості тарифного плану "Преміум"</h3>
                    <ul>
                        <li >LZlzlxzlxl</li>
                    </ul>
                </div>
                <button className={styles.startButton} onClick={handleStart}>
                    Starr 14 days free trial
                </button>
            </div>
        </div>
    );
};

export default PricingComponent;
