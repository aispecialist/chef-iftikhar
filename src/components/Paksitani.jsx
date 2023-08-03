
import React from "react";
import { useTrail, animated } from 'react-spring';
// import { OverlayTrigger, Popover, Button } from 'react-bootstrap';

import './ProductList.css'; // Import the CSS file for the styles

const ProductList = () => {




  const products = [

    {
      id: 1,
      name: 'Mutton karahi',
      category: 'Pakistani',
      imageUrl: 'p1.jpg',

      recipe: "Mutton Karahi is a popular South Asian dish known for its rich and flavorful taste. To prepare this delicious recipe, you will need 500 grams of mutton, cut into pieces. Start by heating 3 tablespoons of cooking oil or ghee in a large, heavy-bottomed pan or karahi over medium heat. Add finely sliced onions and sauté them until they turn golden brown. Then, add 1 tablespoon of ginger-garlic paste and sauté for a minute until the raw smell disappears.Next, include 2 chopped tomatoes and 2-3 slit green chilies to the pan. Cook until the tomatoes become soft and the oil starts to separate from the mixture. Now, add the mutton pieces and mix them well with the masala. Cook for 5-7 minutes, stirring occasionally until the mutton changes color.Add the spices: 1 teaspoon of red chili powder (adjust to your spice preference), 1/2 teaspoon of turmeric powder, 1 teaspoon of cumin powder, 1 teaspoon of coriander powder, and salt to taste. Mix everything thoroughly to coat the mutton with the spices. Cover the pan with a lid and let the mutton cook on low heat until it becomes tender. Stir occasionally to avoid sticking to the bottom.Once the mutton is cooked and tender, remove the lid and increase the heat to evaporate any excess water if there is any. Sprinkle 1 teaspoon of garam masala over the mutton and give it a final mix. Garnish with fresh coriander leaves and ginger slices.Serve the delicious Mutton Karahi hot with naan or roti, and don't forget to add lemon wedges on the side for an extra tangy touch. Enjoy the flavorful and aromatic Mutton Karahi that will surely delight your taste buds! You can always adjust the spices and ingredients according to your personal taste preferences.",
    },
    {
      id: 2,
      name: 'Chiken karahi',
      category: 'Pakistani',
      imageUrl: 'p2.jpg',

      recipe: "Chicken Karahi is a popular Pakistani dish bursting with rich flavors. To prepare this dish, you'll need bone-in chicken pieces, onions, tomatoes, ginger, garlic, green chilies, and a blend of spices like red chili powder, turmeric powder, cumin powder, coriander powder, and garam masala. Sauté the onions, ginger, and garlic until golden brown. Add tomatoes and green chilies, cooking until the oil separates. Toss in the chicken pieces and mix well with the masala. Cook until the chicken changes color. Sprinkle the spices, adjust according to your preference, and let the chicken simmer until tender. Garnish with fresh coriander leaves and ginger slices. Serve hot with naan or roti for a delightful Chicken Karahi experience!",
    },
    {
      id: 3,
      name: 'Chiken White karahi',
      category: 'Pakistani',
      imageUrl: 'p3.jpg',

      recipe: "Chicken White Karahi, also known as Chicken Karahi with a creamy white gravy, is a delicious and creamy variation of the traditional Chicken Karahi. To prepare this dish, you'll need bone-in chicken pieces, onions, ginger, garlic, green chilies, yogurt, cream, and a blend of aromatic spices. Sauté onions, ginger, and garlic until golden. Add chicken and cook until it changes color. Add green chilies and spices, adjusting to taste. Mix in yogurt and cook until chicken is tender. Finally, add cream for the creamy texture. Garnish with fresh coriander leaves and serve hot with naan or roti for a delightful and creamy Chicken White Karahi experience!",
    },
    {
      id: 4,
      name: 'Murgh Musalam',
      category: 'Pakistani',
      imageUrl: 'p4.jpg',

      recipe: "Murgh Musallam is a traditional Mughlai dish that features a whole chicken marinated with aromatic spices and cooked in a rich gravy. To prepare this regal dish, you'll need a whole chicken, yogurt, ghee or oil, onions, ginger-garlic paste, green chilies, tomatoes, cinnamon, cloves, cardamom, red chili powder, turmeric powder, garam masala, saffron, milk, and a variety of ground spices. Marinate the chicken with yogurt and spices, then sauté onions, green chilies, and ginger-garlic paste. Add tomatoes and spices, cooking until the oil separates. Stuff the marinated chicken with boiled eggs and cook it in the gravy. Infuse saffron in milk and pour it over the chicken. Simmer until the chicken is tender and the gravy thickens. Serve the magnificent Murgh Musallam with naan or rice for a royal dining experience!",
    },
    {
      id: 5,
      name: 'Chiken Biryani',
      category: 'Pakistani',
      imageUrl: 'p5.jpg',

      recipe: "Chicken Biryani is a flavorful and aromatic rice dish that combines succulent chicken pieces with fragrant basmati rice and a blend of spices. To prepare this classic dish, marinate chicken with yogurt and spices. Sauté onions until golden brown, add ginger-garlic paste, tomatoes, and spices. Cook the chicken until tender. Meanwhile, parboil basmati rice with whole spices. Layer the cooked chicken and rice in a pot, drizzle saffron milk and ghee over the layers. Seal the pot with dough and cook on low heat until the rice is fully cooked. Garnish with fried onions, mint, and coriander leaves. Serve this delightful Chicken Biryani with raita or salad for a satisfying meal!",

    },
    {
      id: 6,
      name: 'Dum Pukht Biryani',
      category: 'Pakistani',
      imageUrl: 'p6.jpg',

      recipe: "Dum Pukht Biryani is a royal and slow-cooked rice dish known for its rich flavors and tender meat. To prepare this exquisite dish, marinate the meat (chicken or mutton) with yogurt and a blend of spices. Sauté onions until golden, add ginger-garlic paste, tomatoes, and spices. Cook the meat until it's partially cooked. Meanwhile, parboil the basmati rice with whole spices. Layer the partially cooked meat and rice in a large pot. Drizzle saffron milk and ghee over the layers. Seal the pot with dough to trap the steam. Cook the biryani on low heat for an extended period, allowing the flavors to meld together. Once cooked, open the pot to reveal the aromatic and flavorful Dum Pukht Biryani. Serve it with raita and enjoy the regal dining experience it offers!",
    },
    {
      id: 7,
      name: 'Chiken Steem Roast',
      category: 'Pakistani',
      imageUrl: 'p7.jpg',

      recipe: "Chicken Steam Roast is a delicious and healthy dish that involves steaming marinated chicken to perfection. To prepare this dish, marinate chicken pieces with a mixture of yogurt, ginger-garlic paste, lemon juice, and an array of spices. Let the chicken marinate for some time to absorb the flavors. Then, steam the marinated chicken until it is tender and fully cooked. The steaming process ensures that the chicken remains moist and retains its natural juices. Once done, you can serve the Chicken Steam Roast as a wholesome and flavorful main course. It pairs well with a fresh salad or raita on the side, making it a delightful and nutritious meal for any occasion.",
    },
    {
      id: 8,
      name: 'Fry Roast',
      category: 'Pakistani',
      imageUrl: 'p8.jpg',

      recipe: "Fry Roast is a mouthwatering dish that involves marinating chicken or meat with a blend of spices and then frying it to achieve a crispy and flavorful exterior. To prepare this dish, marinate the chicken or meat with a mixture of yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, and other spices. Allow the meat to marinate for some time to absorb the flavors fully. Then, heat oil in a pan or deep fryer and fry the marinated chicken or meat until it turns golden brown and crispy. The result is a delectable Fry Roast with a perfect balance of spices and a crispy texture. Serve it hot with naan, roti, or rice, along with a side of mint chutney for a delightful and satisfying meal.",
    },
    {
      id: 9,
      name: 'Tandori Chiken',
      category: 'Pakistani',
      imageUrl: 'p9.jpg',

      recipe: "Tandoori Chicken is a popular Indian dish known for its vibrant red color and smoky flavor. To prepare Tandoori Chicken, start by making a marinade with yogurt, ginger-garlic paste, lemon juice, red chili powder, turmeric powder, garam masala, and a pinch of orange-red food coloring (optional). Coat the chicken pieces with the marinade and let them marinate for a few hours or overnight to enhance the flavors.Next, preheat the oven to the highest temperature or use a tandoor (traditional clay oven). If using an oven, place the marinated chicken on a baking tray and cook until it is cooked through and slightly charred.If you have access to a tandoor, skewer the marinated chicken pieces and place them inside the tandoor. Cook the chicken until it is tender and has a smoky flavor.Once cooked, serve the Tandoori Chicken hot, garnished with lemon wedges, onion rings, and fresh coriander leaves. This delicious and spicy dish pairs well with mint chutney or yogurt-based raita. Enjoy the authentic flavors of Tandoori Chicken!",
    },
    {
      id: 10,
      name: 'Mutton Joint',
      category: 'Pakistani',
      imageUrl: 'p10.jpg',

      recipe: "Mutton Joint is a flavorful and succulent cut of meat that comes from various parts of the lamb or sheep. It is a popular choice for slow-cooking methods like roasting or braising to achieve tender and juicy results. Mutton Joint can be seasoned with a variety of spices and herbs to enhance its natural flavors. It's commonly used in stews, curries, and roasts, making it a versatile and delicious option for meat lovers. When cooked properly, Mutton Joint becomes a tender and delectable dish that can be enjoyed with rice, naan, or other accompaniments of your choice.",
    },
    {
      id: 11,
      name: 'Lahori Chargha',
      category: 'Pakistani',
      imageUrl: 'p11.jpg',

      recipe: "Lahori Chargha is a famous Pakistani dish known for its bold and spicy flavors. It is essentially a deep-fried whole chicken that is marinated in a mixture of yogurt and a blend of aromatic spices. The chicken is first marinated for several hours to allow the flavors to penetrate the meat fully. The traditional spices used in the marinade include ginger-garlic paste, red chili powder, turmeric, garam masala, and other secret ingredients that vary from one recipe to another.Once the marination process is complete, the chicken is deep-fried until it becomes crispy and golden on the outside while remaining juicy and tender on the inside. Lahori Chargha is usually served with naan or a side of mint chutney, making it a delightful and indulgent dish loved by many. The rich and intense flavors of Lahori Chargha are a true reflection of Lahore's culinary heritage and are sure to leave a lasting impression on your taste buds.",
    },
    {
      id: 12,
      name: 'Ginger Chicken',
      category: 'Pakistani',
      imageUrl: 'p12.jpg',

      recipe: "Ginger Chicken is a flavorful and aromatic dish that combines tender chicken pieces with the pungent and zesty taste of ginger. To prepare this dish, chicken is marinated with a mixture of ginger-garlic paste, soy sauce, and other seasonings. The marination process allows the chicken to absorb the flavors, resulting in a more delicious and tender outcome.Once marinated, the chicken is cooked in a pan or wok with a little oil until it is fully cooked and infused with the ginger's distinct taste. The dish is often garnished with fresh ginger slices and green onions to enhance its flavor and presentation.Ginger Chicken is a quick and easy recipe that can be served with steamed rice or noodles for a delightful and satisfying meal. Its unique blend of flavors makes it a favorite among many and is sure to impress your family and guests.",
    },
    {
      id: 13,
      name: 'Mutton kunnah',
      category: 'Pakistani',
      imageUrl: 'p13.jpg',

      recipe: "Mutton Kunna is a traditional Pakistani dish known for its rich and hearty flavors. It is a slow-cooked mutton stew that is typically prepared in a large earthenware pot called kunna. The mutton is cooked with a blend of aromatic spices, including ginger, garlic, and a variety of whole and ground spices like cumin, coriander, and garam masala.To make Mutton Kunna, the meat is first marinated with yogurt and spices to tenderize and infuse it with flavors. The marinated mutton is then cooked on low heat for several hours in the earthenware pot, allowing the flavors to meld together and the meat to become tender and succulent. The slow-cooking process also enhances the richness and depth of the dish.Mutton Kunna is usually served with naan or tandoori roti, and it is a favorite choice for special occasions and gatherings due to its delightful taste and heartwarming nature. It's a dish that brings families and friends together to savor the joys of traditional Pakistani cuisine.",
    },
    {
      id: 14,
      name: 'Nihari',
      category: 'Pakistani',
      imageUrl: 'p14.jpeg',

      recipe: "Nihari is a flavorful and rich stew that is a popular dish in Pakistani and North Indian cuisine. It is traditionally cooked overnight and served as a hearty breakfast or a special meal during festivals and gatherings. The dish typically features slow-cooked tender pieces of meat, often beef or lamb, simmered in a flavorful broth made with a blend of aromatic spices, including ginger, garlic, and whole spices like cinnamon, cardamom, and cloves.To prepare Nihari, the meat is first marinated with yogurt and spices to enhance its taste and tenderness. The marinated meat is then cooked on low heat for several hours until it becomes incredibly tender and falls off the bone. The slow-cooking process allows the flavors to develop and gives Nihari its distinct taste and aroma.Nihari is usually served with naan or tandoori roti, and it is garnished with fresh ginger slices, chopped green chilies, and cilantro for added flavor and presentation. Some versions of Nihari also include bone marrow, which adds richness and depth to the stew.Nihari is a beloved dish that is enjoyed by people of all ages and is often considered a comfort food due to its satisfying and flavorful nature. It's a dish that reflects the culinary heritage of the Indian subcontinent and is a must-try for anyone looking to savor the traditional flavors of the region.",
    },
    {
      id: 15,
      name: 'Palak Ghosht',
      category: 'Pakistani',
      imageUrl: 'p15.jpg',

      recipe: "Heat oil or ghee in a large, heavy-bottomed pan over medium heat. Add cumin seeds and let them splutter. Add chopped onions and sauté until they turn golden brown. Add ginger-garlic paste and sauté for a minute until the raw smell disappears. Stir in the chopped tomatoes and cook until they become soft and the oil starts to separate from the mixture. Add the mutton pieces to the pan and mix well with the masala. Cook for 5-7 minutes, stirring occasionally until the mutton changes color. Lower the heat and add turmeric powder, red chili powder, coriander powder, and salt. Mix everything thoroughly to coat the mutton with the spices. Cover the pan with a lid and let the mutton cook on low heat until it becomes tender. You may need to add a little water if the mixture becomes too dry. In a separate pot, blanch the chopped spinach leaves in boiling water for 2-3 minutes. Drain the water and puree the spinach. Once the mutton is cooked and tender, add the spinach puree to the pan. Stir well to combine and cook for another 5 minutes on low heat. Add slit green chilies and garam masala. Mix everything together and let the curry simmer for a few more minutes to allow the flavors to meld. Finally, stir in the plain yogurt, and cook for another 2-3 minutes until everything is well incorporated. Garnish the Palak Gosht with fresh coriander leaves.Serve the delicious and nutritious Palak Gosht with steamed rice, naan, or roti for a wholesome and satisfying meal. Enjoy the flavors of tender meat combined with the goodness of spinach in this traditional Indian curry",
    },
    {
      id: 16,
      name: 'Palak Paneer',
      category: 'Pakistani',
      imageUrl: 'p16.jpg',

      recipe: "Palak Paneer is a classic Indian dish that combines creamy paneer (Indian cottage cheese) with a flavorful spinach-based curry. To prepare this delicious dish, heat ghee or cooking oil in a pan and add cumin seeds. Sauté chopped onions until golden brown, then add ginger-garlic paste and sauté for a minute. Stir in chopped tomatoes and cook until they soften and the oil separates. Add chopped spinach leaves and cook until wilted, then blend the mixture into a smooth puree.Return the puree to the pan and add turmeric powder, red chili powder, coriander powder, and salt. Mix well, stir in plain yogurt, and cook the spinach curry for 5-7 minutes on low heat. Add paneer cubes and green chilies to the curry, and optionally, add fresh cream for a creamier texture.Simmer the Palak Paneer for a few more minutes until the paneer is heated through and fully absorbs the flavors. Garnish with fresh coriander leaves. Serve this delightful dish with steamed rice, naan, or roti for a wholesome and satisfying vegetarian meal. Enjoy the creamy paneer combined with the richness of the spinach curry in this classic Indian dish!",
    },
    {
      id: 17,
      name: 'Haleem',
      category: 'Pakistani',
      imageUrl: 'p17.jpg',

      recipe: "Palak Paneer is a classic Indian dish that combines creamy paneer (Indian cottage cheese) with a flavorful spinach-based curry. To prepare this delicious dish, heat ghee or cooking oil in a pan and add cumin seeds. Sauté chopped onions until golden brown, then add ginger-garlic paste and sauté for a minute. Stir in chopped tomatoes and cook until they soften and the oil separates. Add chopped spinach leaves and cook until wilted, then blend the mixture into a smooth puree. Return the puree to the pan and add turmeric powder, red chili powder, coriander powder, and salt. Mix well, stir in plain yogurt, and cook the spinach curry for 5-7 minutes on low heat. Add paneer cubes and green chilies to the curry, and optionally, add fresh cream for a creamier texture. Simmer the Palak Paneer for a few more minutes until the paneer is heated through and fully absorbs the flavors. Garnish with fresh coriander leaves. Serve this delightful dish with steamed rice, naan, or roti for a wholesome and satisfying vegetarian meal. Enjoy the creamy paneer combined with the richness of the spinach curry in this classic Indian dish!",
    },
    {
      id: 18,
      name: 'Nargisi Kofta',
      category: 'Pakistani',
      imageUrl: 'p18.jpg',

      recipe: "Nargisi Kofta is a mouthwatering and indulgent Mughlai dish that consists of flavorful koftas (meatballs) stuffed with boiled eggs. Here's the recipe to prepare this delightful dish: For the Koftas:Take minced mutton or lamb in a bowl.Add finely chopped onions, green chilies, ginger-garlic paste, garam masala, red chili powder, turmeric powder, and salt.Mix everything thoroughly and let the mixture rest for some time.Divide the mixture into equal-sized portions and flatten each portion in your palm.Place a boiled egg in the center of each portion and carefully shape the kofta around the egg.Deep-fry the koftas until they turn golden brown and crispy. Set them aside.For the Gravy:In a separate pan, heat ghee or oil.Add cumin seeds, cinnamon, cloves, and cardamom to the hot oil.Stir in finely chopped onions and sauté until they become golden brown.Add ginger-garlic paste and cook for a minute until the raw smell disappears.Mix in chopped tomatoes, red chili powder, turmeric powder, coriander powder, and salt.Cook the mixture until the tomatoes become soft and the oil starts to separate.Blend the cooked mixture into a smooth paste.To Assemble:In a deep pan, pour the blended gravy and add water to achieve the desired consistency.Let the gravy simmer for a few minutes.Carefully place the fried koftas in the gravy and simmer for a few more minutes.Garnish with fresh coriander leaves and a drizzle of cream (optional).Serve the delectable Nargisi Kofta with naan, roti, or steamed rice.",
    },
    {
      id: 19,
      name: 'Kofta Palao',
      category: 'Pakistani',
      imageUrl: 'p19.jpeg',

      recipe: "Kofta Pulao is a flavorful and delicious dish that combines spiced meatballs (koftas) with aromatic rice. Here's the recipe to prepare this delightful Kofta Pulao:For the Koftas:Take minced mutton or chicken in a bow.Add finely chopped onions, green chilies, ginger-garlic paste, garam masala, red chili powder, turmeric powder, coriander powder, and salt.Mix everything thoroughly and let the mixture rest for some time.Shape the mixture into small meatballs (koftas).For the Rice:Wash and soak basmati rice for 30 minutes.In a separate pot, heat ghee or oil.Add cumin seeds, cinnamon, cloves, and cardamom to the hot oil.Stir in finely chopped onions and sauté until they become golden brown.Add ginger-garlic paste and cook for a minute until the raw smell disappears.Mix in chopped tomatoes, green chilies, red chili powder, turmeric powder, and salt.Cook the mixture until the tomatoes become soft and the oil starts to separate.Add the koftas to the pot and let them cook for a few minutes.In a separate pan, bring water to a boil and add soaked rice.Cook the rice until it's 70% done and drain any excess water.To Assemble:Layer the partially cooked rice over the koftas in the pot.Drizzle saffron milk over the rice and sprinkle some garam masala.Cover the pot with a lid and let the Kofta Pulao cook on low heat until the rice and koftas are fully cooked.Garnish with fried onions, fresh coriander leaves, and mint leaves.Serve the delightful Kofta Pulao with raita or a side salad for a satisfying and flavorful meal. Enjoy the tender koftas and fragrant rice combined in this delectable dish!"
    },
    {
      id: 20,
      name: 'Fish Biryani',
      category: 'Pakistani',
      imageUrl: 'p20.jpg',

      recipe: "Fish Biryani is a delicious and aromatic rice dish that combines flavorful fish with fragrant basmati rice and a blend of spices. Here's the recipe to prepare this delightful Fish Biryani:For the Marination:Take fish pieces and marinate them with ginger-garlic paste, red chili powder, turmeric powder, and lemon juice.Let the fish marinate for at least 30 minutes to absorb the flavors.For the Rice:Wash and soak basmati rice for 30 minutes.In a large pot, bring water to a boil and add the soaked rice.Cook the rice until it's 70% done and drain any excess water.For the Biryani Masala:In a separate pan, heat oil or ghee.Add cumin seeds, cinnamon, cloves, and cardamom to the hot oil.Stir in finely chopped onions and sauté until they become golden brown.Add ginger-garlic paste and cook for a minute until the raw smell disappears.Mix in chopped tomatoes, green chilies, red chili powder, turmeric powder, and salt.Cook the mixture until the tomatoes become soft and the oil starts to separate.To Assemble:In a large, heavy-bottomed pot or handi, layer the partially cooked rice and the marinated fish.Sprinkle biryani masala over the layers and garnish with fresh coriander leaves and mint leaves.Drizzle saffron milk or rose water over the top.Cover the pot with a lid or seal it with dough to trap the steam.Cook the Fish Biryani on low heat for about 20-25 minutes until the rice and fish are fully cooked and infused with the flavors.Serve the delectable Fish Biryani hot with raita or a side salad for a delightful and satisfying meal. Enjoy the succulent fish and fragrant rice combined in this flavorful biryani!",
    },
    {
      id: 21,
      name: 'Anda Kofta',
      category: 'Pakistani',
      imageUrl: 'p21.jpg',

      recipe: "Anda Kofta is a flavorful and unique dish that features boiled eggs coated with a spiced minced meat mixture. Here's the recipe to prepare this delightful Anda Kofta:For the Koftas:Boil eggs until they are hard-boiled and peel them.Take minced mutton or chicken in a bowl.Add finely chopped onions, green chilies, ginger-garlic paste, garam masala, red chili powder, turmeric powder, coriander powder, and salt.Mix everything thoroughly and divide the mixture into equal-sized portions.Take each boiled egg and coat it with the minced meat mixture to form a kofta.For the Gravy:In a separate pan, heat ghee or oil.Add cumin seeds, cinnamon, cloves, and cardamom to the hot oil.Stir in finely chopped onions and sauté until they become golden brown.Add ginger-garlic paste and cook for a minute until the raw smell disappears.Mix in chopped tomatoes, green chilies, red chili powder, turmeric powder, and salt.Cook the mixture until the tomatoes become soft and the oil starts to separate.To Assemble:In a deep pan, pour the prepared gravy and add water to achieve the desired consistency.Let the gravy simmer for a few minutes.Carefully place the koftas in the gravy and let them cook for a few more minutes.Garnish with fresh coriander leaves.Serve the delectable Anda Kofta with naan, roti, or steamed rice for a flavorful and satisfying meal. Enjoy the unique combination of boiled eggs and spiced meat in this delightful kofta dish!",
    },
    {
      id: 22,
      name: 'Chiken Handi',
      category: 'Pakistani',
      imageUrl: 'p22.jpg',

      recipe: "Chicken Handi is a delicious and creamy Pakistani and North Indian dish made with tender pieces of chicken cooked in a spiced tomato-based gravy. Here's the recipe to prepare this flavorful Chicken Handi:Ingredients:500 grams boneless chicken, cut into bite-sized pieces2 large onions, finely sliced2 tomatoes, chopped,1 tablespoon ginger-garlic paste,2-3 green chilies, finely chopped,1 teaspoon cumin seeds,1 teaspoon red chili powder,1/2 teaspoon turmeric powder,1 teaspoon garam masala,1 teaspoon coriander powder,1/2 cup plain yogurt,1/4 cup fresh cream (optional),2 tablespoons cooking oil or ghee,Fresh coriander leaves for garnish,Salt to taste.Instructions:In a large, deep pan or handi, heat oil or ghee over medium heat.Add cumin seeds and let them splutter.Add finely sliced onions and sauté until they become golden brown.Stir in ginger-garlic paste and cook for a minute until the raw smell disappears.Add chopped tomatoes and green chilies. Cook until the tomatoes become soft and the oil starts to separate from the mixture.Add the chicken pieces to the pan and mix well with the masala. Cook for a few minutes until the chicken changes color.Mix in red chili powder, turmeric powder, coriander powder, garam masala, and salt. Stir well to coat the chicken with the spices.Lower the heat and let the chicken cook until it becomes tender and fully cooked.Stir in plain yogurt and fresh cream (optional) to make the gravy rich and creamy. Cook for a few more minutes until everything is well incorporated.Garnish the Chicken Handi with fresh coriander leaves.Serve the creamy and flavorful Chicken Handi hot with naan, roti, or steamed rice. This classic dish is a favorite among chicken lovers and is perfect for special occasions or a comforting family dinner. Enjoy the delightful taste of Chicken Handi!",
    },
    {
      id: 23,
      name: 'Chicken Jalfrezi',
      category: 'Pakistani',
      imageUrl: 'p23.jpg',

      recipe: "",
    },

    {
      id: 25,
      name: 'Afghani Pulao',
      category: 'Pakistani',
      imageUrl: 'p25.jpg',

      recipe: "",
    },
    {
      id: 26,
      name: 'Murgh Malai kofta',
      category: 'Pakistani',
      imageUrl: 'p26.jpg',

      recipe: "Murgh Malai Kofta is a delectable Indian dish that features tender chicken meatballs cooked in a creamy and aromatic gravy. Here's the recipe to prepare this delightful Murgh Malai Kofta:Ingredients:For the Chicken Koftas:500 grams ground chicken,1/4 cup grated paneer (Indian cottage cheese),2 tablespoons fresh cream,1 tablespoon ginger-garlic paste,1/2 teaspoon garam masala,1/2 teaspoon white pepper powder,2 tablespoons chopped coriander leaves,Salt to taste,Cooking oil for frying.For the Gravy:2 large onions, finely sliced,2 tomatoes, chopped,1 tablespoon ginger-garlic paste,1/4 cup cashew nuts, soaked in water for 30 minutes,1/4 cup fresh cream,1/2 teaspoon turmeric powder,1 teaspoon red chili powder,1/2 teaspoon cumin powder,1/2 teaspoon coriander powder,1/2 teaspoon garam masala,1/4 cup grated paneer (Indian cottage cheese),2 tablespoons ghee or cooking oil,Fresh coriander leaves for garnish,Salt to taste.Instructions:For the Chicken Koftas:In a bowl, combine ground chicken, grated paneer, fresh cream, inger-garlic paste paste, garam masala, white pepper powder, chopped coriander leaves, and salt.Mix well until all the ingredients are combined and form small round koftas (meatballs) from the mixture.In a frying pan, heat cooking oil and shallow fry the koftas until they turn golden brown. Set aside.For the Gravy:In a blender, blend soaked cashew nuts into a smooth paste.In aseparate pan, heat ghee or cooking oil ansauté the finely sliced onions until they become golden brown.Add ginger-garlic paste and cook for a minute until the raw smell disappears.Stir in chopped tomatoes and cook until they become soft and the oil starts to separate.Mix in turmeric powder, red chili powder, cumin powder, coriander powder, garam masala, and salt. Cook the spices for a few minutes.Add the cashew nut paste and grated paneer to the pan. Mix well with the masala.Stir in fresh cream and let the gravsimmer for a few minutes until it thickens and becomes creamy.To Assemble:Add the fried chicken koftas to the gravy and gently coat them with the creamy sauce.Garnish with fresh coriander leaves.Serve the delicious Murgh Malai Kofta with naan, roti, or steamed rce for a sumptuous and flavorful meal. Enjoy the tender chicken koftas immersed in the rich and creamy gravy!",
    },
    {
      id: 27,
      name: 'Dam Kabab',
      category: 'Pakistani',
      imageUrl: 'p27.jpg',

      recipe: "Dam Kabab, also known as Dum Kabab, is a mouthwatering and aromatic Pakistani and North Indian dish. It is made from succulent pieces of marinated meat that are cooked on low heat (dum) to perfection. Here's the recipe to prepare this delightful Dam Kabab:Ingredients,500 grams boneless mutton or chicken, cut into bite-sized pieces,1 cup plain yogurt,2 tablespoons ginger-garlic paste,2 green chilies, finely chopped,1 teaspoon cumin powder,1 teaspoon coriander powder,1/2 teaspoon garam masala,1/2 teaspoon turmeric powder,1/2 teaspoon red chili powder,1 tablespoon lemon juice,2 tablespoons cooking oil,Fresh coriander leaves and mint leaves for garnish,Salt to taste,Skewers for grilling.Instructions:In a bowl, mix yogurt, ginger-garlic paste, green chilies, cumin powder, coriander powder, garam masala, turmeric powder, red chili powder, lemon juice, and salt.Add the mutton or chicken pieces to the marinade and coat them thoroughly. Let the meat marinate for at least 4 hours, preferably overnight, in the refrigerator.Soak wooden skewers in water for about 30 minutes to prevent them from burning during grilling.Preheat the grill or oven to medium-high heat.Thread the marinated meat onto the soaked skewers.Grease the grill grates with cooking oil or line a baking tray with parchment paper..Grill the kababs on medium-high heat or bake them in the oven at 180°C (350°F) for about 20-25 minutes, turning them occasionally to ensure even cooking.Once the kababs are cooked and slightly charred, remove them from the grill or oven..Garnish the Dam Kababs with fresh coriander leaves and mint leaves.Serve the hot and succulent Dam Kababs with green chutney, sliced onions, and lemon wedges. These flavorful kababs are a delightful addition to any meal and are sure to impress your family and friends with their rich aroma and tender texture. Enjoy the mouthwatering taste of Dam Kababs!",
    },
    {
      id: 28,
      name: 'Shami Kabab',
      category: 'Pakistani',
      imageUrl: 'p28.jpg',

      recipe: "Shami Kabab is a popular Pakistani and Indian snack made from minced meat and lentils. Here's the recipe to prepare this delicious and flavorful dish.Ingredients:500 grams minced mutton or beef,1 cup chana dal (split Bengal gram), soaked for 2 hours,2 large onions, roughly chopped,4-5 green chilies, roughly chopped,1-inch piece of ginger, roughly chopped,6-7 cloves of garlic,1 teaspoon cumin seed,1 teaspoon coriander seeds,1 teaspoon red chili powder,1/2 teaspoon turmeric powder,1 teaspoon garam masala,1/2 cup fresh coriander leaves, chopped,1/2 cup fresh mint leaves, chopped,1 egg, beaten,Salt to taste,Cooking oil for frying.Instructions:In a pot, add the soaked chana dal and enough water to cover it. Cook the dal until it becomes soft and tender. Drain any excess water and let the dal cool.In a separate pan, dry roast cumin seeds and coriander seeds until fragrant. Let them cool and then grind them into a fine powder.In a food processor, add the minced meat, cooked chana dal, chopped onions, green chilies, ginger, garlic, red chili powder, turmeric powder, garam masala, ground cumin-coriander powder, fresh coriander leaves, fresh mint leaves, and salt.Blend all the ingredients together in the food processor until you get a smooth and well-mixed mixture.Take a small portion of the mixture and shape it into a flat round kebab.In a frying pan, heat cooking oil over medium heat.Dip each kebab into the beaten egg and shallow fry them in the hot oil until they turn golden brown and crispy on both sides.Place the fried Shami Kababs on paper towels to remove excess oil.Serve the delicious and flavorful Shami Kababs hot with green chutney or raita. These kababs make for a perfect appetizer or snack and are loved by people of all ages. Enjoy the savory taste and unique texture of this classic South Asian delicacy!",
    },
    {
      id: 29,
      name: 'Bater-a-Roast',
      category: 'Pakistani',
      imageUrl: 'p29.jpg',

      recipe: "Bater-a-Roast is a delicious and aromatic dish made from quail, known for its unique flavors and succulent taste. Here's the recipe to prepare this delightful Bater-a-Roast:Ingredients:6 quails, cleaned and washed thoroughly,2 large onions, finely sliced,2 tomatoes, chopped,1 tablespoon ginger-garlic paste,2-3 green chilies, finely chopped,1 teaspoon cumin seed,1 teaspoon red chili powder,1/2 teaspoon turmeric powder,1 teaspoon garam masala,1 teaspoon coriander powder,1/4 cup yogurt,1/4 cup cooking oil,Fresh coriander leaves for garnish,Salt to taste.Instructions:In a large pot, heat oil over medium heat.Add cumin seeds and let them splutter.Add finely sliced onions and sauté until they become golden brown.Stir in ginger-garlic paste and cook for a minute until the raw smell disappears.Add chopped tomatoes and green chilies. Cook until the tomatoes become soft and the oil starts to separate.Add the quails to the pot and mix well with the masala. Cook for a few minutes until the quails are coated with the spices.Mix in red chili powder, turmeric powder, coriander powder, garam masala, and salt. Stir well to coat the quails with the spices.Lower the heat and let the quails cook until they become tender and fully cooked.Stir in yogurt to add creaminess to the dish. Cook for a few more minutes until the flavors meld together.Serve the delectable Bater-a-Roast hot, garnished with fresh coriander leaves. This dish is typically enjoyed with naan, roti, or steamed rice, and it offers a delightful and unique taste that will surely impress your guests. Enjoy the succulent quail in this flavorful and aromatic roast!",
    },
    {
      id: 30,
      name: 'Maghaz',
      category: 'Pakistani',
      imageUrl: 'p30.jpg',

      recipe: "Maghaz Masala is a flavorful and spicy Pakistani dish made from goat or lamb brain. Here's the recipe to prepare this unique and delicious dish:Ingredients:500 grams goat or lamb brain,2 large onions, finely sliced,2 tomatoes, chopped,1 tablespoon ginger-garlic paste,2-3 green chilies, finely chopped,1 teaspoon cumin seeds,1 teaspoon red chili powder,1/2 teaspoon turmeric powder,1 teaspoon garam masala,1 teaspoon coriander powder,1/4 cup cooking oil,Fresh coriander leaves for garnish,Salt to taste.Instructions:Clean the goat or lamb brain thoroughly under running water.In a pot, add enough water to cover the brain and bring it to a boil. Add a pinch of salt and boil the brain for about 5 minutes. Drain the water and let the brain cool.Once the brain is cool, peel off the outer membrane and cut it into small pieces. Set aside.In a large wok or pan, heat oil over medium heat.Add cumin seeds and let them splutter.Add finely sliced onions and sauté until they become golden brown.Stir in ginger-garlic paste and cook for a minute until the raw smell disappears.Add chopped tomatoes and green chilies. Cook until the tomatoes become soft and the oil starts to separate.Add the brain pieces to the pan and mix well with the masala. Cook for a few minutes until the brain is coated with the spices.Mix in red chili powder, turmeric powder, coriander powder, garam masala, and salt. Stir well to coat the brain with the spices.Lower the heat and let the brain cook until it becomes tender and fully cooked.Serve the delicious and spicy Maghaz Masala hot, garnished with fresh coriander leaves. This unique dish is typically enjoyed with naan, roti, or paratha, and it offers a rich and satisfying flavor that is sure to tantalize your taste buds. Enjoy the delightful taste of goat or lamb brain in this classic Pakistani dish!",
    },
    {
      id: 31,
      name: 'Taka Tak',
      category: 'Pakistani',
      imageUrl: 'p31.jpg',

      recipe: "Taka Tak is a popular and spicy street food dish from the Indian subcontinent, especially in Punjab and North India. It is a delicious stir-fry that typically includes a mix of meat (often mutton or chicken) and various organs like liver, kidneys, and heart. Here's the recipe to prepare this flavorful Taka Tak:Ingredients:,500 grams mutton or chicken, cut into small piece,150 grams organ meat (liver, kidney, heart, etc.), finely chopped,2 large onions, finely sliced,2 tomatoes, chopped,1 tablespoon ginger-garlic paste,2-3 green chilies, finely chopped,1 teaspoon cumin seeds,1 teaspoon red chili powder,1/2 teaspoon turmeric powder,1 teaspoon garam masala,1 teaspoon coriander powder,1/2 cup yogurt,1/4 cup cooking oil,Salt to taste,Fresh coriander leaves for garnish.Instructions:In a large wok or pan, heat oil over medium heat.Add cumin seeds and let them splutter.Add finely sliced onions and sauté until they become golden brown.Stir in ginger- garlic paste and cook for a minute until the raw smell disappears.Add chopped tomatoes and green chilies.Cook until the tomatoes become soft and the oil starts to separate.Add the mutton or chicken pieces to the pan and mix well with the masala.Cook for a few minutes until the meat changes color.Add the finely chopped organ meat(liver, kidney, heart, etc.) and mix thoroughly with the rest of the ingredients.Mix in red chili powder, turmeric powder, coriander powder, garam masala, and salt.Stir well to coat the meat and organs with the spices.Lower the heat and let the meat cook until it becomes tender and fully cooked.Add yogurt to the mixture and mix it in gently to add creaminess to the dish.Let the Taka Tak simmer for a few more minutes, allowing the flavors to meld together.Serve the spicy and flavorful Taka Tak hot, garnished with fresh coriander leaves.This delicious stir - fry pairs well with naan, roti, or steamed rice, making it a satisfying and aromatic dish loved by many.Enjoy the unique combination of meats and spices in this delightful Taka Tak!",
    },
    {
      id: 24,
      name: 'Mutton Qeema | Khara masala | Bar-B Que',
      category: 'Pakistani',
      imageUrl: 'p24.jpg',

      recipe: "",
    },

  ];
  // const alerti = () => {
  //   alert(products.recipe);
  // };
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
          <h2 className='my-2 shadow-sm gTitlefont bg-secondary rounded py-2'>Pakistani</h2>
          <div className="row ">
            {products
              .filter((product) => product.category === category)
              .map((product, index) => (

                <animated.div key={product.id} className="col-sm-6 col-md-4 col-lg-3" style={trail[index]}>
                  <div className="card bg-info mb-3">
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

export default ProductList;