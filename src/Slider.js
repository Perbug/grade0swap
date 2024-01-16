// Header.js
import React from 'react';

const Slider = () => {
    return (
        <section class="top_section">
            <div class="container slider_container">
                <div class="row">
                    <div class="col-md-6 col-12 sliderLeftContainer">
                        <p class="be_our_member">Be Our Member</p>
                        <h1 className="blueColor">Grade0</h1>
                        <p>Swap Your GR0 To Your Wallet</p>
                    </div>
                    <div className="col-md-4 offset-md-2 col-12">
                    <img src="/images/wallet.png" alt="Wallet" className="walletImage"/>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slider;
