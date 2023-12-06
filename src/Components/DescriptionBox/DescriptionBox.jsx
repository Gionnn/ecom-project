import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>
          Lorem ipsum dolor, sit amet consectet, laborum, ea e vero ducimus cum
          omnis perspiciniti nisi veritatis exercitationem dignissimos!
        </p>
        <p>Lorem ipsum dolor sobis esse autem. Eum, minima perferendis?</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
