
import React from 'react';
import { useTrail, animated } from 'react-spring';
import './ProductList.css'; // Import the CSS file for the styles

const Thai = () => {
  const products = [
    {
      id: 1,
      name: 'Cashew Nut Chicken',
      category: 'Thai',
      imageUrl: 't1.webp',
    },
    {
      id: 2,
      name: 'Beef and Chilli',
      category: 'Thai',
      imageUrl: 't2.jpg',
    },
    {
      id: 3,
      name: 'Oyster Sauce Chicken  Fry',
      category: 'Thai',
      imageUrl: 't3.jpg',
    },
    {
      id: 4,
      name: 'Chicken Teriyaki',
      category: 'Thai',
      imageUrl: 't4.jpg',
    },
    {
      id: 5,
      name: 'Beef Teriyaki Sauce',
      category: 'Thai',
      imageUrl: 't5.jpg',
    },
    {
      id: 6,
      name: 'Chicken cheese Pita Bread',
      category: 'Thai',
      imageUrl: 't6.jpg',
    },
    {
      id: 7,
      name: 'Humas with Pita Bread',
      category:'Thai',
      imageUrl: 't7.jpg',
    },
    {
      id: 8,
      name: 'Mochaikai Chops with Tire Sauce',
      category: 'Thai',
      imageUrl: 't8.jpg',
    },
    // {
    //   id: 9,
    //   name: 'Machai Fish with Tire Sause',
    //   category: 'Thai',
    //   imageUrl: 't9.jpg',
    // },
    {
      id: 10,
      name: 'Pite fish with Skiln sauce',
      category: 'Thai',
      imageUrl: 't10.jpg',
    },
    
    
   
  ];

  // Get unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  const trail = useTrail(products.length, {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  return (
    <div className="container shadow-sm bg-dark rounded my-4 p-3">
      {categories.map((category) => (
        <div key={category} className="category-container">
          <h2 className='my-2 bg-secondary gTitlefont rounded py-2'>{category}</h2>
          <div className="row">
            {products
              .filter((product) => product.category === category)
              .map((product, index) => (
                <animated.div key={product.id} className="col-sm-6  col-md-4 col-lg-3" style={trail[index]}>
                  <div className="card bg-warning mb-3">
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

export default Thai;