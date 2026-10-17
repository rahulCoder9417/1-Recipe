# 🥘 Recipe Finder

A React-based recipe finder app that uses the [Spoonacular API](https://spoonacular.com/food-api) to suggest recipes based on ingredients you have — or want to exclude.

---

## 🔑 API Key Requirement

To use this app, you **must provide your own Spoonacular API key**.

### 🛸 Setup

1. Get a free API key from [Spoonacular Developer Portal](https://spoonacular.com/food-api/console#Dashboard).
2. Create a `.env` file in the root of the project:
    ```env
    VITE_API_KEY_SPOON=your_api_key_here
    ```
3. Restart the dev server after adding the `.env` file:
    ```bash
    npm run dev
    ```

> **Note:** Your API key will be visible in the browser — don't use this for production without a backend proxy.

---

<!-- test -->
