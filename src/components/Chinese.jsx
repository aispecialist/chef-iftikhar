
import React from 'react';
import { useTrail, animated } from 'react-spring';
import './ProductList.css'; // Import the CSS file for the styles

const Chinese = () => {
  const products = [
    {
      id: 1,
      name: 'Chicken Shasilk',
      category: 'Chinese',
      imageUrl: 'c1.jpg',
    },
    {
      id: 2,
      name: 'Chiken Almond',
      category: 'Chinese',
      imageUrl: 'c2.jpg',
    },
    {
      id: 3,
      name: 'Garlic-Brown Sugar Chicken',
      category: 'Chinese',
      imageUrl: 'c3.jpg',
    },
    {
      id: 4,
      name: 'Garlic Chiken',
      category: 'Chinese',
      imageUrl: 'c4.jpg',
    },
   
    {
      id: 6,
      name: 'Chicken Pineapple',
      category: 'Chinese',
      imageUrl: 'c6.webp',
    },
    {
      id: 7,
      name: 'Chicken Chow Mein',
      category:'Chinese',
      imageUrl: 'c7.jpg',
    },
    {
      id: 8,
      name: 'Spaghetti with Meatball',
      category: 'Chinese',
      imageUrl: 'c8.jpg',
    },
    {
      id: 9,
      name: 'Sweet and Sour Chicken',
      category: 'Chinese',
      imageUrl: 'c9.webp',
    },
    {
      id: 10,
      name: 'Chicken Manchurian',
      
      category: 'Chinese',
      imageUrl: 'c10.jpg',
    },
    {
      id: 11,
      name: 'Chicken with Chilli',
      category: 'Chinese',
      imageUrl: 'c11.jpg',
    },
    {
      id: 12,
      name: 'Fish with Chilli',
      category: 'Chinese',
      imageUrl: 'c12.jpg',
    },
    {
      id: 13,
      name: 'cottage cheese shashlik',
      category: 'Chinese',
      imageUrl: 'c13.jpg',
    },
    {
      id: 14,
      name: 'Garlic Rice',
      category: 'Chinese Rice',
      imageUrl: 'c14.jpg',
    },
    {
      id: 15,
      name: 'Egg Fried Rice',
      category: 'Chinese Rice',
      imageUrl: 'c15.jpg',
    },
    {
      id: 16,
      name: 'Vegetable Fried Rice',
      category: 'Chinese Rice',
      imageUrl: 'c16.webp',
    },
    {
      id: 17,
      name: 'Chicken Fried Rice',
      category: 'Chinese Rice',
      imageUrl: 'c17.webp',
    },
    
    {
      id: 19,
      name: 'Drum Stick',
      category: 'Chinese',
      imageUrl: 'c19.webp',
    },
    
    
   
  ];

  // Get unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  const trail = useTrail(products.length, {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  return (
    <div className="container bg-info rounded my-4 p-3">
      {categories.map((category) => (
        <div key={category} className="category-container">
          <h2 className='my-2 bg-secondary gTitlefont rounded py-2'>{category}</h2>
          <div className="row">
            {products
              .filter((product) => product.category === category)
              .map((product, index) => (
                <animated.div key={product.id} className="col-sm-6 col-md-4 col-lg-3" style={trail[index]}>
                  <div className="card mb-3">
                    <img src={product.imageUrl} className="card-img-top  m-2 imgl rounded mx-auto d-block" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.price}</p>
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

export default Chinese;