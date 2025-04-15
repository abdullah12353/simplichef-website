// src/data/blogPosts.js

// Example - Add 'content' field to each post
// **You need to replace the placeholder content below with your actual blog content converted to Markdown.**

const blogPosts = [
    {
      id: 1,
      title: "10 Essential Kitchen Tools Every Beginner Needs",
      slug: "essential-kitchen-tools",
      excerpt:
        "Starting your cooking journey? Here are the only tools you actually need to get started without breaking the bank.",
      date: "2025-03-15",
      category: "Kitchen Basics",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      // --- ADD CONTENT FIELD ---
      content: `
  ## Introduction
  
  Starting out in the kitchen can feel overwhelming, especially with all the gadgets available. But you don't need a professional setup to make great food! Here are the absolute essentials:
  
  ## The Must-Haves
  
  1.  **Chef's Knife (8-inch):** Your primary tool for chopping, slicing, and dicing. Invest in a decent one!
  2.  **Cutting Board:** A large wooden or plastic board protects your counters and knife.
  3.  **Mixing Bowls:** A set of various sizes for prepping ingredients.
  4.  **Measuring Cups & Spoons:** Essential for accuracy in recipes.
  5.  **Skillet/Frying Pan (10-12 inch):** A versatile pan for sautéing, frying, and searing. Non-stick is beginner-friendly.
  6.  **Saucepan (2-3 quart):** For sauces, boiling pasta or rice, and heating liquids.
  7.  **Baking Sheet:** Roasting vegetables, baking cookies, and more.
  8.  **Spatula:** For flipping and stirring. Get both a heat-resistant one and a flexible one.
  9.  **Whisk:** For mixing sauces, dressings, and batters smoothly.
  10. **Colander:** Draining pasta and washing produce.
  
  ## Conclusion
  
  With these basics, you're well-equipped to tackle most beginner recipes. Happy cooking!
      `,
      // --- END CONTENT FIELD ---
    },
    {
      id: 2,
      title: "How to Meal Prep on a Student Budget",
      slug: "meal-prep-student-budget",
      excerpt:
        "Learn how to prepare a week's worth of healthy, delicious meals for under $30 with these simple strategies.",
      date: "2025-03-10",
      category: "Meal Planning",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      // --- ADD CONTENT FIELD ---
      content: `
  ## Why Meal Prep?
  
  Meal prepping saves time, money, and helps you eat healthier, especially on a tight student budget. No more last-minute expensive takeaways!
  
  ## Strategy
  
  *   **Plan Simple Meals:** Choose recipes with overlapping ingredients (e.g., chicken used in salads and stir-fries).
  *   **Shop Smart:** Buy in bulk (rice, pasta, beans), look for sales, and stick to your list.
  *   **Cook Versatile Bases:** Prepare large batches of rice, quinoa, roasted vegetables, or shredded chicken.
  *   **Assemble, Don't Cook Everything:** Combine bases with fresh elements (sauces, greens) right before eating.
  *   **Invest in Containers:** Good containers prevent leaks and keep food fresh.
  
  ## Example Week (Under $30)
  
  *   **Base:** Large batch of brown rice, roasted sweet potatoes & broccoli.
  *   **Protein:** Baked chicken thighs.
  *   **Meals:**
      *   Chicken & veggie rice bowls
      *   Chicken salads (add greens)
      *   Veggie & rice stir-fry (add soy sauce)
  
  This approach minimizes cooking time and maximizes variety.
      `,
      // --- END CONTENT FIELD ---
    },
    // ... Add 'content' field with Markdown for ALL your other posts ...
    {
      id: 3,
      title: "5 One-Pot Recipes That Will Change Your Life",
      slug: "one-pot-recipes",
      excerpt:
        "These simple, delicious recipes require just one pot, minimal prep time, and deliver maximum flavor.",
      date: "2025-03-05",
      category: "Recipes",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      content: `
  ## Less Mess, More Flavor!
  
  One-pot meals are lifesavers for busy weeknights. Less cleanup, easy process, and often deeper flavors as ingredients cook together.
  
  *(Imagine full recipes here in Markdown format)*
  
  1.  **One-Pot Lemon Herb Roasted Chicken and Veggies:** Chicken, potatoes, carrots, lemon, herbs - all roasted together.
  2.  **One-Pot Pasta e Fagioli:** Hearty Italian soup with pasta, beans, and vegetables.
  3.  **One-Pot Sausage and Peppers Pasta:** Quick skillet pasta dish.
  4.  **One-Pot Spanish Chicken and Rice (Arroz con Pollo):** Flavorful and satisfying.
  5.  **One-Pot Vegetarian Chili:** Easy, healthy, and customizable.
  
  Give these a try and simplify your cooking routine!
      `,
    },
    {
      id: 4,
      title: "Understanding Basic Cooking Methods",
      slug: "basic-cooking-methods",
      excerpt:
        "Master these fundamental cooking techniques and you'll be able to prepare virtually any recipe with confidence.",
      date: "2025-02-28",
      category: "Cooking Skills",
      image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      content: `
  ## The Building Blocks of Cooking
  
  Understanding *how* to cook is as important as knowing *what* to cook. Master these methods:
  
  *   **Sautéing:** Cooking quickly in a hot pan with a small amount of fat. Great for vegetables and tender cuts of meat.
  *   **Roasting:** Cooking with dry heat in an oven, usually at higher temperatures. Develops browning and deep flavors.
  *   **Braising:** Searing food first, then simmering it slowly in liquid in a covered pot. Makes tougher cuts tender.
  *   **Boiling/Simmering:** Cooking food submerged in liquid. Boiling is rapid bubbles, simmering is gentle bubbles.
  *   **Steaming:** Cooking with the steam from boiling water. Healthy way to cook vegetables and fish.
  *   **Frying (Pan-frying/Deep-frying):** Cooking in hot oil. Pan-frying uses less oil than deep-frying.
  
  Practice these, and you'll unlock countless recipes!
      `,
    },
    {
      id: 5,
      title: "The Psychology of Building Cooking Confidence",
      slug: "psychology-cooking-confidence",
      excerpt:
        "Discover how mastering simple cooking skills can boost your overall confidence and wellbeing.",
      date: "2025-02-20",
      category: "Mindset",
      image: "https://images.unsplash.com/photo-1556911073-38141963c9e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      content: `
  ## More Than Just Food
  
  Learning to cook isn't just about sustenance; it's a powerful confidence booster. Here's why:
  
  *   **Sense of Accomplishment:** Turning raw ingredients into a delicious meal provides tangible proof of your ability.
  *   **Increased Independence:** Relying less on others or takeout fosters self-sufficiency.
  *   **Problem-Solving:** Adapting recipes or fixing mistakes builds resilience.
  *   **Creativity Outlet:** Experimenting with flavors and techniques can be highly rewarding.
  *   **Mindfulness:** Focusing on the task can be meditative and reduce stress.
  *   **Social Connection:** Sharing food you've made builds relationships.
  
  Start small, celebrate successes, and watch your confidence grow both in and out of the kitchen.
      `,
    },
    {
      id: 6,
      title: "How to Stock a Pantry That Actually Makes Sense",
      slug: "stock-pantry-basics",
      excerpt:
        "The essential ingredients every home cook should have on hand to whip up quick, delicious meals anytime.",
      date: "2025-02-15",
      category: "Kitchen Basics",
      image: "https://images.unsplash.com/photo-1584473457409-ce95a9573e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      content: `
  ## Your Kitchen Command Center
  
  A well-stocked pantry is key to effortless home cooking. Focus on versatile staples:
  
  **Dry Goods:**
  *   Pasta (various shapes)
  *   Rice (white, brown)
  *   Oats (rolled oats)
  *   Flour (all-purpose)
  *   Sugar (granulated, brown)
  *   Beans (canned or dried - chickpeas, black beans, kidney beans)
  *   Lentils
  
  **Oils & Vinegars:**
  *   Olive Oil (extra virgin for finishing, regular for cooking)
  *   Vegetable Oil (neutral for high heat)
  *   Vinegar (white, apple cider, balsamic)
  
  **Canned Goods:**
  *   Diced Tomatoes
  *   Tomato Paste
  *   Coconut Milk
  *   Tuna/Salmon
  
  **Spices & Seasonings:**
  *   Salt (Kosher, sea salt)
  *   Black Peppercorns (whole, with grinder)
  *   Garlic Powder
  *   Onion Powder
  *   Paprika
  *   Dried Oregano, Basil, Thyme
  *   Red Pepper Flakes
  *   Cumin
  
  **Baking:**
  *   Baking Soda
  *   Baking Powder
  
  **Other:**
  *   Broth/Stock (chicken, vegetable)
  *   Soy Sauce
  *   Honey/Maple Syrup
  *   Onions & Garlic (fresh)
  
  This foundation allows you to create countless meals with just a few fresh additions.
      `,
    },
  ];
  
  export default blogPosts;
  