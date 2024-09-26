# 🚀 Shopify Metafield Middleware

A middleware solution for interacting with Shopify Admin API and storefront using Node.js. This project helps you update customer metafields in Shopify via a simple backend setup. It’s built with modularity, allowing you to extend it for other Shopify admin functionalities in the future. ✨

## 🛠 Features

- Update Shopify Customer Metafields with ease.
- Built-in CORS support for local development and Shopify stores.
-  Scalable and modular architecture.
- Open-source and contribution-friendly. 🌟

## 🛒 Prerequisites

Before you begin, you need to set up a Shopify app and obtain API credentials.

### Step 1: Create a Shopify App
1. Navigate to your Shopify Admin.
2. Go to Settings -> Apps/Sales-Channel -> Develop apps -> Create an app
3. Enter your app name and choose a development store.
4. From the Configuration tab, add required scopes:
   - Customer Read (**read_customers**)
   - Customer Write (**write_customers**)

5. Generate Admin API Access Token, API Key, and note the API Version.\

### Step 2: Example `.env` Configuration

In the root of the project, there’s an `.env-example` file. You will need to update this file with your Shopify Admin API details, and then rename it to `.env`.

```bash
SHOPIFY_API_KEY=your_shopify_api_key
SHOPIFY_PASSWORD=your_shopify_access_token
SHOPIFY_STORE_URL=your-store-name.myshopify.com
API_VERSION=2024-07
PORT=3000
```

- **SHOPIFY_API_KEY**: Your Shopify API key.
- **SHOPIFY_PASSWORD**: Your Admin API access token (password).
- **SHOPIFY_STORE_URL**: Your Shopify store’s full URL (**e.g., your-store-name.myshopify.com**).
- **API_VERSION**: The version of Shopify API you're using.

### Step 3: CORS Configuration

In `app.js`, you can configure the allowed origins for CORS. If you are using Ngrok or any other public tunneling tool, you’ll need to add that URL to the `allowedOrigins` array.

```bash
const allowedOrigins = [
  'http://localhost:3000',
  'https://your-store-name.myshopify.com',
  'https://your-ngrok-url.ngrok.io',
];
```

## 📦 Installation
**1. Clone the repository:**
```bash
git clone https://github.com/yourusername/shopify-metafield-middleware.git
```
**2. Navigate into the project directory:**
```bash
cd shopify-customers-metafield-middleware
```
**3. Install Node.js dependencies:**
```bash
npm install
```
**4. Set up environment variables:**
- Rename `.env-example` to `.env`.
- Paste the values you obtained from Shopify (API key, password, store URL, and API version) into the `.env` file.

**5. Run the server:**
```bash
npm start
```
**6. Expose your local server using Ngrok (optional for local development) So depending upon you:**
```bash
ngrok http 3000
```
## 🔥 Usage
1. Start your server and expose it using Ngrok if needed.
2. Use the provided API endpoint to update customer metafields.

### Example Payload:
```bash
{
  "customerId": "123456789",
  "metafieldId": "987654321",
  "value": "Updated Value",
  "type": "single_line_text_field"
}
```
- **customerId**: Shopify customer ID.
- **metafieldId**: Metafield ID you want to update.
- **value**: New value for the metafield.
- **type**: The metafield type (defaults to `single_line_text_field`).

### Endpoint:
```bash
POST https://<ngrok-url>/api/customers/update-customer-metafield
```

## 🤝 Contributions

We welcome contributions! If you want to improve the project or add more features, feel free to fork the repository and submit a pull request.

**1. Fork the repository.**

**2. Create a new feature branch:**
```bash
git checkout -b feature/new-feature
```
**3. Make your changes and commit them:**
```bash
git commit -m 'Add new feature'
```
**4. Push your branch:**
```bash
git push origin feature/new-feature
```
**5. Open a pull request.**

## ⚠️ Issues

If you encounter any issues, feel free to open a [GitHub issue](https://github.com/yourusername/your-repository/issues). We are here to help! 😄


## 📜 License

This project is open source and available under the [MIT License.](https://choosealicense.com/licenses/mit/)

## 🎉 Happy Coding!

Feel free to reach out if you have any questions or ideas for further improvements!w

## 🌐 Contact

**Website:** [https://www.saadullahsajid.com.](https://www.saadullahsajid.com) 