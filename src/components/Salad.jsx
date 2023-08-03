

import React from 'react';
import { useTrail, animated } from 'react-spring';
import './ProductList.css'; // Import the CSS file for the styles

const Salad = () => {
  const products = [
    {
      id: 1,
      name: 'Apple Kitchen Salad',
      category: 'Salad',
      imageUrl: 's1.jpg',
    },
    {
      id: 2,
      name: 'Mix Fruit Salad',
      category: 'Salad',
      imageUrl: 's2.jpg',
    },
    {
      id: 3,
      name: 'Dry Fruit Salad',
      category: 'Salad',
      imageUrl: 's3.jpg',
    },
    {
      id: 4,
      name: 'Chicken Pineapple Salad',
      category: 'Salad',
      imageUrl: 's4.webp',
    },
    {
      id: 5,
      name: 'Apple and Vegetable Salad',
      category: 'Salad',
      imageUrl: 's5.webp',
    },
    {
      id: 6,
      name: 'Cheese Salad',
      category: 'Salad',
      imageUrl: 's6.jpg',
    },
    {
      id: 7,
      name: 'Mix Veg Salad',
      category:'Salad',
      imageUrl: 's7.webp',
    },
    
    
   
  ];

  // Get unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  const trail = useTrail(products.length, {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  return (
    <div className="container bg-success  bg-opacity-10 rounded my-4 p-3">
      {categories.map((category) => (
        <div key={category} className="category-container">
          <h2 className='my-2 shadow-sm gTitlefont bg-success   rounded py-2'>{category}</h2>
          <div className="row">
            {products
              .filter((product) => product.category === category)
              .map((product, index) => (
                <animated.div key={product.id} className="col-sm-6  col-md-4 col-lg-3" style={trail[index]}>
                  <div className="card bg-success-subtle mb-3">
                    <img src={product.imageUrl} className="card-img-top  m-2 imgl rounded mx-auto d-block" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                    
                    </div>
                  </div>
                </animated.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Salad;