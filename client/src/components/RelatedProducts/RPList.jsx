import React, { useState } from "react";
import Modal from "react-modal";
import RPCard from "./RPCard.jsx"
import RPComparison from "./RPComparison.jsx";
import { useRPContext } from "./Context/RPProvider.jsx";
import styles from './RPCard.module.css';

function RPList () {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { rpData, rpRatings, rpStyles } = useRPContext();

  return (
    <div data-testid='rplist'>
      <h2>
      Related Products
      </h2>
      {rpData ? rpData.map((rp, index) => {
        console.log('rp.name', rp.name)
        return (
        <>
        <RPCard key={rp.id} rp={rp} rpRating={rpRatings[rp.id]} rpStyles={rpStyles[index]?.results} setModalIsOpen={setModalIsOpen}/>
        <Modal isOpen={modalIsOpen} ariaHideApp={true} className={styles.comparison}>
          <RPComparison rp={rp} setModalIsOpen={setModalIsOpen}/>
        </Modal>
        </>
        );
      }) : null}
    </div>
  );
};

export default RPList;