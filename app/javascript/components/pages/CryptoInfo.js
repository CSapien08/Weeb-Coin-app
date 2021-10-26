import React, { Component } from "react";

import ModalVideo from "react-modal-video";
// import "react-modal-video/scss/modal-video.scss";
// yarn add react-modal-video

class CryptoInfo extends Component {
  constructor() {
    super();
    this.state = {
      blockchainModal: false,
      cryptoModal: false,
      smartContractModal: false,
      nftModal: false,
      gameModal: false,
    };
  }

  toggleBlockchainModal = () => {
    let newOpenModal = !this.state.blockchainModal;
    this.setState({
      blockchainModal: newOpenModal,
    });
  };
  toggleCryptoModal = () => {
    let newOpenModal = !this.state.cryptoModal;
    this.setState({
      cryptoModal: newOpenModal,
    });
  };
  toggleSmartContractModal = () => {
    let newOpenModal = !this.state.smartContractModal;
    this.setState({
      smartContractModal: newOpenModal,
    });
  };
  toggleNftModal = () => {
    let newOpenModal = !this.state.nftModal;
    this.setState({
      nftModal: newOpenModal,
    });
  };
  toggleGameModal = () => {
    let newOpenModal = !this.state.gameModal;
    this.setState({
      gameModal: newOpenModal,
    });
  };
  render() {
    return (
      <div className="crypto-info-container">
        {/* blockchain modal */}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={this.state.blockchainModal}
          videoId="SSo_EIwHSd4"
          onClose={this.toggleBlockchainModal}
        />

        {/* currency modal */}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={this.state.cryptoModal}
          videoId="6Gu2QMTAkEU"
          onClose={this.toggleCryptoModal}
        />
        {/* Smart Contract */}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={this.state.smartContractModal}
          videoId="ZE2HxTmxfrI"
          onClose={this.toggleSmartContractModal}
        />
        {/* NFT */}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={this.state.nftModal}
          videoId="FkUn86bH34M"
          onClose={this.toggleNftModal}
        />
        {/* gaming modal */}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={this.state.gameModal}
          videoId="ywvTIM_eOVI"
          onClose={this.toggleGameModal}
        />
        {/* modal end*/}
        <div className="crypto-info-header">
          <h1>What is Crypto?</h1>
        </div>

        <div className="crypto-info-section">
          <h1>Blockchain</h1>
          <p>
            The blockchain is just a chain of blocks containing information. In
            crypto the bloackchain acts as a digital ledger that records every
            transaction and is open for anyone to see. Each block contains a
            hash, the previous hash and data that varies depending on the type
            of blockchain. Blockchains are peer to peer, meaning they're
            controlled by a community and not an individual. Each new block
            needs to be approved and this is done through hashing. Hashing on
            the blockchain refers to taking and input of any length and
            returning an output of fixed length which is done through hashing
            functions. Hashes are key to the blockchain because this is how we
            can tell if the chain has been tampered with in anyway because it
            will produce a different hash. Once a hash is changed, it
            invalidates the hashes that followed it rendering the chain invalid
            and this is why the blockchain is so secure and easy to verify. The
            blockchain as a whole works through series of verifications from a
            community or different individual "nodes" thus the blockchain is
            decentralized so you don't have to trust any one person or entity to
            manage everything. Through this system of consesnsus there is
            actually monetary incentive to help keep the network secure through
            concepts like proof of work and proof of stake.
          </p>
          <div className="crypto-info-button">
            <button onClick={this.toggleBlockchainModal}>
              Learn about the Blockchain
            </button>
          </div>
        </div>

        <div className="crypto-info-section">
          <h1>Crypto Currencies</h1>
          <p>
            Crypto currencies are digital payment systems that don't rely on
            banks to verify transactions. The main goal of crypto currencies is
            to decentralized finance and combat issues like government currency
            inflation and over printing. With crypto anyone anywhere can send
            and recieve payment, and because crypto currencies exists on the
            blockchain transactions can be tracked on the digital ledger. This
            can help avoid things like money laundering, and make theft easier
            to track. Different crypto currencies have different goals in mind,
            some aim to be purely transactional, some serve as a currency for
            voting/governance rights, and some exists to pay for things in-game
            or inside their specific ecosystem.
          </p>
          <div className="crypto-info-button">
            <button onClick={this.toggleCryptoModal}>
              Learn more about crypto currency
            </button>
          </div>
        </div>

        <div className="crypto-info-section">
          <h1>Smart Contracts</h1>
          <p>
            A smart contract is just like a real world contract with the
            difference that it is completely digital and stored in a blockchain.
            Smart contracts execute automatically once the agreed upon
            conditions are met. Think of this like an "if statement", if this
            condition is met, do this. Once a smart contract is created it can
            never be changed so it greatly reduces the risk of scams. In essence
            smart contracts remove the middle man. For example, consider a
            crowdfunding project, with a smart contract the community could send
            funds with the understanding and agreement that a promise/product
            will be delivered but if it does not get delivered the smart
            contract is negated and refunds are issued. Smart contracts can be
            anything from loans to insurance claims, etc.
          </p>
          <div className="crypto-info-button">
            <button onClick={this.toggleSmartContractModal}>
              Learn more about smart contracts
            </button>
          </div>
        </div>

        <div className="crypto-info-section">
          <h1>NFT</h1>
          <p>
            What is an NFT? Why is there a jpeg of a rock that sold for millions
            of dollars? NFT or non fungable token, solves the issue of
            original/true ownership even when copies exist. When you own an NFT
            it represents your ownership on the blockchain so that you can
            verify you are the true owner of this thing, this is key when it
            coems to things like 1 of 1 original artworks and the like.However
            it is import to note that with NFTs the creator retains copyright
            and reproduction rights, the same as physical art. The possibilities
            for NFTs going forward are endless, they can be event tickets,
            deeds, or really anything that could be unique and require proof of
            ownership.
          </p>
          <div className="crypto-info-button">
            <button onClick={this.toggleNftModal}>Learn more about NFT </button>
          </div>
        </div>

        <div className="crypto-info-section">
          <h1>Crypto Gaming</h1>
          <p>
            Crypto gaming is innovating the essence of gaming, because with the
            blockchain gamers can have true ownership. Crypto gaming is gearing
            to introduce the play to earn model to mainstream gaming. Play to
            earn means, literally earning assets through playing, whether this
            is in the form of crypto currencies, NFTs, or even virtual real
            estate. Traditionally when a player makes achievements, gains items,
            land, status, all those things only exist encapsulated in that game.
            With blockchain gaming, ingame can be brought to the outside world
            for entertaining or even monetary purposes.
          </p>
          <div className="crypto-info-button">
            <button onClick={this.toggleGameModal}>
              Learn more about crypto gaming
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CryptoInfo;
