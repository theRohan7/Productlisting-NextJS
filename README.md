This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the following command in the terminal:

```bash
npm install

```

to intall all the dependencies and dev-dependencies required in the project.


Second, to run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Services

**1. Get All Products:**

Fetches a list of all products from the API and populates the home page using the ProductListing component.

**usage:**  This service is called when the home page is loaded.
Supports paginated loading with a limit and skip parameter for efficient data fetching.

The fetched data is passed to the ``ProductListing`` component, which handles the display of products in a grid layout.


**2. Get Product by ID:**

Fetches details of a specific product based on the provided ``productID`` and displays the information in the ``ProductDetails`` component.

**usage:**  This service is triggered when a user clicks on a product card to view more details.
Retrieves complete product information, including attributes like name, price, description, and other relevant details.

The fetched product data is passed to the ``ProductDetails`` component, which displays the details in an organized and user-friendly manner.


## Github Link

The above mentioned e-commerce we application buillt using NextJS can be accessed here, [Github Link](https://github.com/theRohan7/Productlisting-NextJS)
