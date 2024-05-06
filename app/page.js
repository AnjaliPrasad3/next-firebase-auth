import React, { useEffect } from 'react';
import styles from './Home.module.css';

const Home = () => {
    useEffect(() => {
        function moveCards(direction) {
            const container = document.getElementById('cardContainer');
            const cardWidth = container.querySelector('.card').offsetWidth + 20; // Width of card plus margin
            const scrollStep = cardWidth; // Scroll by one card width

            if (direction === 'left') {
                container.scrollLeft -= scrollStep;
            } else if (direction === 'right') {
                container.scrollLeft += scrollStep;
            }
        }

        // Add event listeners for buttons
        const leftButton = document.getElementById('moveLeft');
        const rightButton = document.getElementById('moveRight');

        leftButton.addEventListener('click', () => moveCards('left'));
        rightButton.addEventListener('click', () => moveCards('right'));

        // Cleanup event listeners on component unmount
        return () => {
            leftButton.removeEventListener('click', () => moveCards('left'));
            rightButton.removeEventListener('click', () => moveCards('right'));
        };
    }, []);

    return (
        <div>
            <div className={styles.navbar}>
                <img className={styles.logo} src="./images/logo.png" alt="Logo" />
                <a href="#" className={styles.signOut}><b>Sign out</b></a>
            </div>

            <div className={styles.popularTopics}>
                <h2>Popular Topics 🔥</h2>
                <div className={styles.arrowButtons}>
                    <button id="moveLeft" onClick={() => moveCards('left')}>&lt;</button>
                    <button id="moveRight" onClick={() => moveCards('right')}>&gt;</button>
                </div>
            </div>

            <div className={styles.cardContainer} id="cardContainer">
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <img src=".images/rocket.png" className={styles.cardImgTop} alt="..." />
                        <div className={styles.cardBody}>
                            <h5 className={styles.cardTitle}>Introduction to Rocket Science</h5>
                            <p className={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad! Fugiat
                                quasi deleniti</p>
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <a href="#" className="btn btn-primary">READ</a>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <img src="./images/Astro.png" className={styles.cardImgTop} alt="..." />
                        <div className={styles.cardBody}>
                            <h5 className={styles.cardTitle}>Astro Physics</h5>
                            <p className={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad! Fugiat
                                quasi deleniti</p>
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <a href="#" className="btn btn-primary">READ</a>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <img src="./images/machineLearning.png" className={styles.cardImgTop} alt="..." />
                        <div className={styles.cardBody}>
                            <h5 className={styles.cardTitle}>Artificial Intelligence</h5>
                            <p className={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad! Fugiat
                                quasi deleniti</p>
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <a href="#" className="btn btn-primary">READ</a>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <img src="./images/rocket.png" className={styles.cardImgTop} alt="..." />
                        <div className={styles.cardBody}>
                            <h5 className={styles.cardTitle}>Cyber Security</h5>
                            <p className={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad! Fugiat
                                quasi deleniti</p>
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <a href="#" className="btn btn-primary">READ</a>
                    </div>
                </div>
                {/* Add other cards similarly */}
            </div>

            <style jsx>{`
                // Additional CSS styles here
            `}</style>
        </div>
    );
};

export default Home;
