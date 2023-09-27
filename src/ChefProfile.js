import React from 'react';
import { useSpring, animated } from 'react-spring';

const ChefProfile = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  return (
    <animated.div style={animationProps} className="container p-2 my-5 bs-info-text-emphasis">
      <div className="row">
        <div className="col-md-4">
          <img
            src={require('./images/main/chef-profile-picture.jpg')}            alt="Chef Name"
            className="img-fluid  rounded-circle border border-success p-2 bg-info border-opacity-75"
          />
        </div>
        <div className="col-md-8">
          <h2 className="text-dark p-2 gTitlefont text-uppercase m-2 text-decoration-underline">Iftikhar Malik</h2>
          <h4 className="text-primary p-2 text-uppercase fw-bolder gParafont m-2 text-break ">Chef</h4>
          <p className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          Highly skilled and innovative Chef with a passion for culinary excellence and a proven track record of creating unforgettable dining experiences. With over 15 years of expertise in the culinary industry, I have honed my skills in diverse cuisines and gastronomic techniques. From fine dining establishments to bustling kitchens, my journey has been marked by a commitment to elevating the art of cooking and delighting discerning palates. 
          </p>
          <p className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">Specialties: Continental Food, Pakistani Food, Chinese Food,Tahi Food, Fast Food, Seafood</p>
          <p className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">Contact: Iftkharmalik140@gmail.com | 0304-7864563 | 0311-7864563</p>
        </div>
      </div>
    </animated.div>
  );
};

export default ChefProfile;
