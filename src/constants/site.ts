export const siteConfig = {
  name: "Love Bakery",
  tagline: "Sourdough Bread Cafe",
  description:
    "A cinematic artisan cafe platform for slow-fermented bread, coffee rituals, reservations, and warm European bakery storytelling.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address: "12 Rue Artisan, Pondicherry Quarter",
  hours: "Mon-Sun 8:00 AM - 9:30 PM",
  mapUrl: "https://maps.google.com/?q=Love%20Bakery%20Sourdough%20Bread%20Cafe",
  nav: [
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Story", href: "#story" },
    { label: "Reserve", href: "#reserve" },
  ],
};

export const featuredMenu = [
  {
    name: "Garlic Cheese Toast",
    category: "House-made sourdough toast",
    price: "Rs 145",
    note: "A warm cafe signature built on house-made sourdough bread.",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Cheese & Tomato Pizza",
    category: "Sourdough pizza",
    price: "Rs 285",
    note: "House-made sourdough base, mozzarella cheese, oven-dried tomatoes.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Home Brewed Kombucha",
    category: "Seasonal drink",
    price: "Rs 120",
    note: "Flavoured with seasonal fruits and flowers.",
    image:
      "https://images.unsplash.com/photo-1606914469633-bd39206ea739?auto=format&fit=crop&w=1200&q=85",
  },
];

export const menuCategories = [
  {
    name: "Drinks",
    items: [
      { name: "Black Coffee", price: "Rs 80", description: "" },
      { name: "Cappuccino", price: "Rs 100", description: "" },
      { name: "Hot Chocolate", price: "Rs 120", description: "" },
      { name: "Cold Brew", price: "Rs 100", description: "" },
      { name: "Lemon Juice", price: "Rs 70", description: "" },
      {
        name: "Home Brewed Kombucha",
        price: "Rs 120",
        description: "Flavoured with seasonal fruits and flowers.",
      },
    ],
  },
  {
    name: "Salads",
    items: [
      {
        name: "Veg Protein Salad",
        price: "Rs 150",
        marker: "veg",
        description:
          "Fresh lettuce, veggies, herbs, olives, chickpeas and paneer in special house-made vinaigrette.",
      },
      {
        name: "Baked Chicken Salad",
        price: "Rs 180",
        marker: "non-veg",
        description:
          "Fresh lettuce, diced chicken, herbs and olives in special house-made vinaigrette.",
      },
      {
        name: "Fruit Salad",
        price: "Rs 150",
        marker: "veg",
        description: "Bowl of fresh seasonal fruits topped with honey.",
      },
    ],
  },
  {
    name: "Toasts",
    note: "All toasts use house-made sourdough bread.",
    items: [
      { name: "Garlic Cheese Toast", price: "Rs 145", marker: "veg", description: "" },
      {
        name: "Hummus & Olives Toast",
        price: "Rs 170",
        marker: "veg",
        description: "",
      },
      {
        name: "Mushroom & Spinach Toast",
        price: "Rs 180",
        marker: "veg",
        description: "",
      },
      {
        name: "Fried Egg with Crispy Chilly Oil",
        price: "Rs 160",
        marker: "egg",
        description: "",
      },
      {
        name: "Roasted Chicken & Herbs",
        price: "Rs 190",
        marker: "non-veg",
        description: "",
      },
      {
        name: "French Toast on Brioche Bread",
        price: "Rs 200",
        marker: "non-veg",
        description: "With honey and whipped cream.",
      },
    ],
  },
  {
    name: "From The Fryer",
    items: [
      {
        name: "French Fries",
        price: "Rs 150",
        marker: "veg",
        description: "House-made fries with our house-made dip.",
      },
      {
        name: "French Fries with Cheese",
        price: "Rs 170",
        marker: "veg",
        description: "House-made fries with cheddar cheese.",
      },
      {
        name: "Jalapeno Cheese Poppers",
        price: "Rs 180",
        marker: "veg",
        description:
          "Classic chilly cheese fried balls served with a special house-made dip.",
      },
      {
        name: "Chicken Cheese Poppers",
        price: "Rs 250",
        marker: "non-veg",
        description:
          "Classic chilly cheese fried balls served with a special house-made dip.",
      },
      {
        name: "Chicken Popcorn",
        price: "Rs 200",
        marker: "non-veg",
        description: "Bite-sized pieces of fried chicken in peri peri powder.",
      },
      {
        name: "Honey Chilly Chicken Strips",
        price: "Rs 220",
        marker: "non-veg",
        description:
          "Fried chicken strips coated in sourdough bread crumbs sauteed with honey chilly sauce.",
      },
    ],
  },
  {
    name: "Pizza - Veg",
    note: "9 inches",
    items: [
      {
        name: "Cheese & Tomato Pizza",
        price: "Rs 285",
        marker: "veg",
        description:
          "House-made sourdough base, mozzarella cheese and oven-dried tomatoes.",
      },
      {
        name: "Exotic Veggie Pizza",
        price: "Rs 295",
        marker: "veg",
        description:
          "House-made sourdough base, broccoli, zucchini, black olives, gherkins, peppers, onions and cheese.",
      },
      {
        name: "Forest Pizza",
        price: "Rs 295",
        marker: "veg",
        description:
          "House-made sourdough base, mozzarella cheese, broccoli, zucchini, mushrooms, black olives and gherkins.",
      },
      {
        name: "Spicy Paneer & Pickle Pizza",
        price: "Rs 300",
        marker: "veg",
        description:
          "House-made sourdough base, paneer tossed in peri peri marinade and mozzarella cheese.",
      },
      {
        name: "Bechamel Mushroom & Spinach Pizza",
        price: "Rs 320",
        marker: "veg",
        description:
          "House-made sourdough base, sauteed paneer, pickles and cheese.",
      },
      {
        name: "Exotic Veg Pizza on Ragi Base",
        price: "Rs 295",
        marker: "veg",
        description: "Gluten-free base with veggies, pickles and mozzarella cheese.",
      },
    ],
  },
  {
    name: "Pizza - Non Veg",
    note: "9 inches",
    items: [
      {
        name: "Barbecue Chicken Pizza",
        price: "Rs 330",
        marker: "non-veg",
        description:
          "House-made sourdough base, Italian sauce, chicken tossed in barbecue marinade, black olives and mozzarella cheese.",
      },
      {
        name: "Spicy Chicken Pizza",
        price: "Rs 330",
        marker: "non-veg",
        description:
          "House-made sourdough base, chicken tossed in peri peri marinade, pickles and mozzarella cheese.",
      },
      {
        name: "Chicken 65 Pizza",
        price: "Rs 330",
        marker: "non-veg",
        description: "House-made sourdough base, chicken 65 and mozzarella cheese.",
      },
      {
        name: "Bechamel Chicken & Broccoli",
        price: "Rs 350",
        marker: "non-veg",
        description:
          "House-made sourdough base, chicken sauteed in black pepper and salt, rich white French bechamel sauce, broccoli and mozzarella cheese.",
      },
      {
        name: "Roasted Chicken Pizza on Ragi Base",
        price: "Rs 320",
        marker: "non-veg",
        description: "Gluten-free base with roasted chicken, pickles and mozzarella cheese.",
      },
    ],
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
];

export const testimonials = [
  {
    quote:
      "The kind of cafe that makes bread feel ceremonial. Quietly luxurious, never loud.",
    name: "Mira K.",
    role: "Food stylist",
  },
  {
    quote:
      "Every detail feels handcrafted, from the crumb to the candlelit reservation table.",
    name: "Arjun S.",
    role: "Weekend regular",
  },
];
