
import React from 'react';
import { useTrail, animated } from 'react-spring';
import './ProductList.css'; // Import the CSS file for the styles

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Mutton karahi',
      category: 'Pakistani',
      imageUrl: 'p1.jpg',
    },
    {
      id: 2,
      name: 'Chiken karahi',
      category: 'Pakistani',
      imageUrl: 'p2.jpg',
    },
    {
      id: 3,
      name: 'Chiken White karahi',
      category: 'Pakistani',
      imageUrl: 'p3.jpg',
    },
    {
      id: 4,
      name: 'Murgh Musalam',
      category: 'Pakistani',
      imageUrl: 'p4.jpg',
    },
    {
      id: 5,
      name: 'Chiken Biryani',
      category: 'Pakistani',
      imageUrl: 'p5.jpg',
    },
    {
      id: 6,
      name: 'Dam Bakhat Biryani',
      category: 'Pakistani',
      imageUrl: 'p6.jpg',
    },
    {
      id: 7,
      name: 'Chiken Steem Roast',
      category:'Pakistani',
      imageUrl: 'p7.jpg',
    },
    {
      id: 8,
      name: 'Fry Roast',
      category: 'Pakistani',
      imageUrl: 'p8.jpg',
    },
    {
      id: 9,
      name: 'Tandori Chiken',
      category: 'Pakistani',
      imageUrl: 'p9.jpg',
    },
    {
      id: 10,
      name: 'Mutton Joint',
      category: 'Pakistani',
      imageUrl: 'p10.jpg',
    },
    {
      id: 11,
      name: 'Lahori Chargha',
      category: 'Pakistani',
      imageUrl: 'p11.jpg',
    },
    {
      id: 12,
      name: 'Chiken Jinjar',
      category: 'Pakistani',
      imageUrl: 'p12.jpg',
    },
    {
      id: 13,
      name: 'Mutton kunnah',
      category: 'Pakistani',
      imageUrl: 'p13.jpg',
    },
    {
      id: 14,
      name: 'Nihari',
      category: 'Pakistani',
      imageUrl: 'p14.jpg',
    },
    {
      id: 15,
      name: 'Palak Ghosht',
      category: 'Pakistani',
      imageUrl: 'p15.jpg',
    },
    {
      id: 16,
      name: 'Palak Paneer',
      category: 'Pakistani',
      imageUrl: 'p16.jpg',
    },
    {
      id: 17,
      name: 'Haleem',
      category: 'Pakistani',
      imageUrl: 'p17.jpg',
    },
    {
      id: 18,
      name: 'Nargasi Kofta',
      category: 'Pakistani',
      imageUrl: 'p18.jpg',
    },
    {
      id: 19,
      name: 'Kofta Palao',
      category: 'Pakistani',
      imageUrl: 'p19.jpg',
    },
    {
      id: 20,
      name: 'Fish Biryani',
      category: 'Pakistani',
      imageUrl: 'p20.jpg',
    },
    {
      id: 21,
      name: 'Ande Kofte',
      category: 'Pakistani',
      imageUrl: 'p21.jpg',
    },
    {
      id: 22,
      name: 'Chiken Handi',
      category: 'Pakistani',
      imageUrl: 'p22.jpg',
    },
    {
      id: 23,
      name: 'Chiken Jalfrazi',
      category: 'Pakistani',
      imageUrl: 'p23.jpg',
    },
    {
      id: 24,
      name: 'Mutton Qeema  Khara masala Bar-B Que',
      category: 'Pakistani',
      imageUrl: 'p24.jpg',
    },
    {
      id: 25,
      name: 'Afghani Pulao',
      category: 'Pakistani',
      imageUrl: 'p25.jpg',
    },
    {
      id: 26,
      name: 'Murgh Malai kofta',
      category: 'Pakistani',
      imageUrl: 'p26.jpg',
    },
    {
      id: 27,
      name: 'Dam Kabab',
      category: 'Pakistani',
      imageUrl: 'p27.jpg',
    },
    {
      id: 28,
      name: 'Shami Kabab',
      category: 'Thai',
      imageUrl: 'p28.jpg',
    },
    {
      id: 29,
      name: 'Bater-e-Roast',
      category: 'Pakistani',
      imageUrl: 'p29.jpg',
    },
    {
      id: 30,
      name: 'Maghaz',
      category: 'Pakistani',
      imageUrl: 'p30.jpg',
    },
    {
      id: 31,
      name: 'Taka Tak',
      category: 'Pakistani',
      imageUrl: 'p31.jpg',
    },
    
   
  ];

  // Get unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  const trail = useTrail(products.length, {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  return (
    <div className="container">
      {categories.map((category) => (
        <div key={category} className="category-container">
          <h2>{category}</h2>
          <div className="row">
            {products
              .filter((product) => product.category === category)
              .map((product, index) => (
                <animated.div key={product.id} className="col-sm-6 col-md-4 col-lg-3" style={trail[index]}>
                  <div className="card mb-3">
                    <img src={product.imageUrl} className="card-img-top" alt={product.name} />
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

export default ProductList;