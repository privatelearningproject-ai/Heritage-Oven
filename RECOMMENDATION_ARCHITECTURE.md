# Heritage Oven AI Recommendation Architecture

This document outlines the logic and flow for the AI-assisted product discovery and recommendation system.

## 1. Core Recommendation Logic (The "Brain")

The engine uses the `product_intelligence.json` as the primary lookup table, filtering by the following dimensions:

| Dimension | Attribute Mapping |
| :--- | :--- |
| **Occasion** | `occasion_tags` (e.g., Birthday, Tea Time, Anniversary) |
| **Budget** | `classification` (Premium vs Budget) + `price` threshold |
| **Product Type** | `category` (Cakes, Savory Snacks, etc.) |
| **Health** | `category` == "Healthy Snacks" or `tags` containing "Health-conscious" |
| **Audience** | `tags` containing "Kids" or "Traditional" (for Adults/Elders) |
| **Intent** | `tags` containing "Gifting" or "Celebration" |

---

## 2. Conversational Discovery Flow ("Need Help Choosing?")

### **Step 1: Intent Discovery**
*   **Assistant:** "Welcome to Heritage Oven! ✨ What can I help you find today?"
*   **User Options:**
    *   🎂 "I'm planning a celebration."
    *   ☕ "Just looking for some snacks with my tea."
    *   🥗 "I want something healthy to munch on."
    *   🎁 "I'm looking for a gift."

### **Step 2: Refining Preferences (Dynamic)**
*   **If Celebration:** "How many people are we celebrating with? And any flavor preferences (Chocolate, Fruity, or Nutty)?"
*   **If Snacks:** "Are you in the mood for something Spicy, Salty, or Sweet?"
*   **If Gifting:** "What's your preferred budget range? (Under ₹500, ₹500 - ₹1000, or Premium Selection)"

### **Step 3: The Recommendation**
*   **Assistant:** "Based on that, I think you'll love our **Signature [Premium Title]**. It's a crowd favorite for [Occasion]!"

---

## 3. Product Matching & Upsell/Cross-sell Logic

### **A. Smart Cross-sell (Add-on)**
*   **Rule:** If `category` == "Cakes", suggest `cross_sell` from `product_intelligence.json` (e.g., Party Poppers, Candles).
*   **Rule:** If `category` == "Savory Snacks", suggest a Beverage from the "Beverages" category.

### **B. Strategic Upsell (The Upgrade)**
*   **Rule:** If a user selects a "Budget" cake, show: *"People also loved our **Signature [Premium Cake]** for just ₹[Difference] more!"*
*   **Rule:** For snacks, suggest a "Family Pack" or "Assorted Box" instead of a single unit.

### **C. Combo Suggestions**
*   Directly pull from the `combos` array in `product_intelligence.json`.
*   *Example:* "Why not try the **Healthy Munchie Box**? It includes [Product] + 4 other best-selling healthy snacks."

---

## 4. UX & Widget Implementations

### **A. Homepage "Quick Match" Widget**
*   **Visual:** A 3-button toggle card.
*   **Row 1:** [Occasion Dropdown]
*   **Row 2:** [Budget Slider]
*   **Action:** "Show My Matches" (Dynamically updates a product carousel below).

### **B. Mobile "Tinder" for Snacks**
*   A swipe-left/swipe-right interface for quick snack discovery.
*   "Yes" adds to a "Shortlist" for easy checkout.

### **C. "Complete the Celebration" Modal**
*   Triggered when a Cake is added to the cart.
*   Shows a "Party Kit" (Balloons + Poppers + Candles) with a 1-click "Add All to Cart" button.

---

## 5. Implementation Roadmap (Technical Summary)

1.  **Tag Search:** Use a fuzzy search library (like Fuse.js) to match user input against `clean_name`, `tags`, and `keywords`.
2.  **Collection Routing:** If a user's intent matches a collection in `website_collections.json` (e.g., "Kids favorites"), route them to that collection page.
3.  **Real-time Analytics:** Track which "Recommendations" are clicked to boost the `is_best_seller` flag dynamically.
