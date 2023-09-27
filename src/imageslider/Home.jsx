


import React from 'react';


const Home = () => {

  return (
    <>
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <h2 className="rounded bg-info p-3 m-3 gTitlefont text-light">My Expertise</h2>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={3}
      aria-label="Slide 4"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={4}
      aria-label="Slide 5"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={5}
      aria-label="Slide 6"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={6}
      aria-label="Slide 7"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item  active" data-bs-interval={10000}>
      <img src={require("../components/pakistani/pakistani1.jpg")}  className="d-block  w-100" alt="this is alright..wait for loading....." />
      <div className="carousel-caption d-none d-md-block">
        <h3 className="rounded bg-danger p-3 gTitlefont text-info">Pakistani Food</h3>
        <p className="rounded bg-danger p-3 text-info">Welcome to the tantalizing world of Pakistani cuisine, a true culinary masterpiece that will delight your taste buds and captivate your senses. Bursting with an explosion of flavors, Pakistani food is a symphony of aromatic spices, tender meats, and vibrant vegetables. From the sizzling streets of Karachi to the bustling bazaars of Lahore, every dish tells a tale of rich cultural heritage and time-honored traditions. Experience the delectable magic of succulent kebabs, savory biryanis, and creamy kormas that will transport you to a realm of gastronomic bliss. So, prepare yourself for an unforgettable gastronomic journey as we embark on a delicious adventure through the heart of Pakistani cuisine. Get ready to be enchanted by the irresistible allure of the "Land of the Pure's" culinary treasures!</p>
      </div>
    </div>
    <div className="carousel-item " data-bs-interval={2000}>
      <img src={require("../images/salad/salad1.jpg")}  className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h3 className="rounded bg-danger p-3 gTitlefont text-info">Different Salad</h3>
        <p className="rounded bg-danger p-3 text-info">Crunch into a burst of freshness with our vibrant and invigorating salad, where crisp greens, juicy tomatoes, and a medley of colorful vegetables unite to create a symphony of health and flavor on your plate.</p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={require("../images/salad/salad1.jpg")}    className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h3 className="rounded bg-danger p-3 gTitlefont text-info">Different Salad</h3>
        <p className="rounded bg-danger p-3 text-info">Crunch into a burst of freshness with our vibrant and invigorating salad, where crisp greens, juicy tomatoes, and a medley of colorful vegetables unite to create a symphony of health and flavor on your plate.</p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={require("../images/thai/thai1.jpg")}   className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h3 className="rounded bg-danger p-3 gTitlefont text-info">Thai Food</h3>
        <p className="rounded bg-danger p-3 text-info">Experience Thai cuisine's tantalizing fusion of zesty spices, creamy coconut milk, and delightful herbs, transporting you to the bustling streets of Bangkok.</p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={require("../images/drinks/di1.jpg")}   className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h3 className="rounded bg-danger p-3 gTitlefont text-info">Different Desserts</h3>
        <p className="rounded bg-danger p-3 text-info">Indulge in the blissful realm of desserts, where decadent delights and sweet creations awaken your senses, leaving you enchanted by the divine symphony of flavors and textures.</p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={require("../images/drinks/dr1.jpg")}   className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h3 className="rounded bg-danger p-3 gTitlefont text-info">Different Drinks</h3>
        <p className="rounded bg-danger p-3 text-info">Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={require("../images/chinese/ch1.jpg")}   className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h3 className="rounded bg-danger p-3 gTitlefont text-info">Chinese food</h3>
        <p className="rounded bg-danger p-3 text-info">Savor the irresistible allure of Chinese cuisine, a symphony of bold flavors, tender textures, and aromatic spices that take your taste buds on an unforgettable journey.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<h3 className="p-2 my-2 text-white rounded bg-secondary">and much more...</h3>
</>
  );
};

export default Home;