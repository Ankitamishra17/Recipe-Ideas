
# 🍲 Recipe Ideas

A React + Tailwind app to search and explore recipes by ingredient using the [TheMealDB API](https://www.themealdb.com/).

---

## 🚀 Features
- 🔎 Search recipes by ingredient (e.g., "chicken", "egg", "rice")
- 📸 Responsive recipe card grid
- 📖 View full recipe details in a modal
- 🎬 Watch cooking tutorial on YouTube (if available)
- ⚡ Optimized with **debouncing** (faster search input)
- 💾 Uses **caching** so repeated searches load instantly

---


---

## 🛠️ Tech Stack
- **React 18** – UI library
- **Vite** – Build tool
- **Tailwind CSS** – Styling framework
- **TheMealDB API** – Recipe data source

---

## 🔗 API Usage Examples  

### 1. Search recipes by ingredient  
User input: **chicken**

```http
GET https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken



