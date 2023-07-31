import React from "react";
import styles from "./LandingPage.module.css";
import bag from "./images/vecteezy_illustration-isometric-concept-safety-of-online-shopping-in_5638074.jpg";
import Navbar from "../Navbar/Navbar";

const LandingPage = () => {
    return (
        <>
            <div className="p-5">
                <Navbar/>
                <div className={styles.container}>
                    <div className={styles.spacetop}>
                        <h1>
                            Unleash The
                        </h1>
                        <h1 className={styles.textteal}>
                            Treasure of GenieCart!
                        </h1>
                        <p className="mt-5 mr-2">
                            <p className={styles.content}>
                                "Rub the lamp of GenieCart, and let your shopping wishes take flight! From trendy fashion finds to cutting-edge gadgets, We are here to grant you the ultimate shopping experience. So, go ahead and explore the magic of GenieCart - Your dreams, our command!"
                            </p>
                        </p>
                        <div className="my-3">
                            <button className="btn btn-success m-3 my-sm-0 " type="submit">Get Started!</button>
                            <button className="btn btn-outline-success my-sm-0" type="submit">Learn More</button>
                        </div>
                    </div>
                    <img src={bag} width="700" height="584" alt="shopping bag" />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
