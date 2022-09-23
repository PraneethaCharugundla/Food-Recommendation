import { useState } from "react";
import "./styles.css";
import { ItemCard } from "../ItemCard";
const itemList = [
  {
    name: "Pulihora",
    image:
      "https://aahaaramonline.com/wp-content/uploads/2014/04/Gongura_Pulihora_Gongura_Annam.jpg",
    about:
      "An exotic version of tamarind rice, also known as Chitrannam, is enriched with spicy flavours to give it a sour and salty taste at the same time. One of the main ingredients is tamarind along with curry leaves, tomatoes, and mustard seeds. Pulihora finds its place in kitchens often during festivities and special gatherings. Try the authentic tamarind rice to get a taste of real Andhra cuisine.",
    stars: "4.5/5",
    state: "Andhra Pradesh"
  },
  {
    name: "Gutti Vankaya Koora",
    image:
      "https://www.holidify.com/blog/wp-content/uploads/2016/08/Vonkaya-kurry-final.jpg",
    about:
      "Prepared by using stuffed eggplant, this curry is a special Andhra dish cooked in every other house in Andhra. The tender eggplants are stuffed with roasted spicy herbs and seasonings to give to a perfect delicious taste. The curry is thick and gives a fresh smell of tamarind and mustard seeds, that will lure you from even a distance. It can be served with aromatic rice or ghee Rotis.",
    stars: "4/5",
    state: "Andhra Pradesh"
  },
  {
    name: "Punugulu",
    image:
      "https://www.holidify.com/blog/wp-content/uploads/2016/08/IMG_0344.jpg",
    about:
      "Who isn’t fond of a crunchy crispy snack during rainy evenings? Next time when you crave for a delicious snack to eat with your cup of coffee, try the popular yet simple Andhra snack, Punugulu. Prepared with Idli batter and deep fried till golden brown, the mouth-watering snack is served with coconut ginger chutney for a perfect lip-smacking taste.",
    stars: "5/5",
    state: "Andhra Pradesh"
  },

  {
    name: "Sarva Pindi",
    image:
      "https://cdn.aahaaramonline.com/wp-content/uploads/2021/04/Sarva_Pindi_Snack_Telangana.png",
    about:
      "It is cooked with at least one component of each stage of the food pyramid. It is a savoury pancake made of rice flour, Chana Dal, peanuts and chilli. In Nalgonda district, the food item is known as “Tappala Chekka”. It is a healthy breakfast snack alternative specially cooked in a copper utensil with butter.",
    stars: "3.5/5",
    state: "Telangana"
  },
  {
    name: "Hyderabadi Biryani",
    image:
      "https://assets.cntraveller.in/photos/62b1c39925a409c7e0f2d342/master/pass/Hyderabadi%20Biryani.jpg",

    about:
      "Cooked with either mutton or chicken, and laced with rich ingredients, this recipe is the stairway to heaven. Believe it or not, this dish is such a favourite that people don’t mind having it for breakfast, lunch or dinner.",
    stars: "4/5",
    state: "Telangana"
  },
  {
    name: "Haleem",
    image:
      "https://vismaifood.com/storage/app/uploads/public/55d/d08/075/thumb__700_0_0_0_auto.jpg",
    about:
      "Haleem is snack food specially prepared during the Ramzan month. It is a delicious festive food in Hyderabad. It is a special staple food famous throughout the world in the holy month of Ramzan. It is dish made of wheat, barley, meat, lentils and spices.",
    stars: "3.5/5",
    state: "Telangana"
  },
  {
    name: "Pav Bhaji",
    image: "https://esperienza.in/wp-content/uploads/2020/07/Pav-Bhaji.jpg",
    about:
      "Today you can find different versions Pav Bhaji in every corner of Mumbai. It has gone under tremendous modifications. You will find Paneer Pav Bhaji, Mushroom Pav Bhaji (My favorite), butter Pav Bhaji, Cheese Paav Bhaji, etc.Bhaji is made up of mixed vegetables like carrot, cauliflower, tomato, onion, etc. and it is served with Pav. It is definitely one of the nutrients rich and tasty foods of Maharashtra.",
    stars: "5/5",
    state: " Maharastra"
  },
  {
    name: "Pohe",
    image:
      "https://esperienza.in/wp-content/uploads/2020/07/kanda-poha-recipe.jpg",
    about:
      "Pohe is a typical Maharashtrian dish that is served in breakfast along with tea. It is prepared by pounded rice. Pounded rice is first soaked in water and then some green vegetables are roasted in oil. And then soaked pounded rice is mixed in that.",
    stars: "5/5",
    state: " Maharastra"
  },
  {
    name: "Puran Poli",
    image: "https://esperienza.in/wp-content/uploads/2020/07/puran-poli.jpg",
    about:
      "Puran Poli is the sweet dish of Maharashtra. I call it sweet paratha because of its look. It is made up of Chana dal, cardamom, wheat, and sugar.Puran Poli is famous in many parts of India. You will find different varieties of Puran Poli depending upon the place.",

    stars: "4/5",
    state: " Maharastra"
  }
];

export function App() {
  const states = itemList.map((item) => {
    return item.state;
  });

  const stateCategories = new Set(states); // do watch the video

  console.log(stateCategories);

  const mainCategories = ["All", ...stateCategories];

  console.log(mainCategories);

  const [category, setCategory] = useState("All");

  let filteredItems;
  if (category === "All") {
    filteredItems = itemList;
  } else {
    filteredItems = itemList.filter((item) => item.state === category);
  }
  function handleCategory(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1>Food recommendation App</h1>
      <div className="category"></div>
      <div>
        {mainCategories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleCategory(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="items-container">
        {filteredItems.map((item) => {
          return <ItemCard key={item.name} {...item} />;
        })}
      </div>
      <ul></ul>
    </div>
  );
}
