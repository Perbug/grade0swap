// Header.js
import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <a className="navbar-brand" href="/">Grade0</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" target="_blank"  href="https://explorer.grade0.com">Explorer</a>
          </li>
          <li class="nav-item">
				<a class="nav-link" target="_blank"  href="https://nft.grade0.com">NFT Marketplace</a>
			  </li>
          <li className="nav-item">
            <a className="nav-link" href="/wrapper.html">Wrap Grade0</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/how_to_connect.html">Connect</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://buy.grade0.com">Buy</a>
          </li>
          <li class="nav-item">
				<a class="nav-link" href="">Trade</a>
			  </li>
        </ul>
        <ul className="navbar-nav">
        <li class="nav-item">
			  <a class="nav-link" href="https://t.me/grade0fficialchannel"><i class="fab fa-telegram"></i></a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="https://twitter.com/grade0fficial"><i class="fab fa-twitter"></i></a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="https://github.com/perbug"><i class="fab fa-github"></i></a>
			</li>
        </ul>
      </div>
    </nav>
    );
}

export default Header;
