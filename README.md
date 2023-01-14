# Product Listing

It's a simple product listing page containing products that are just fetched from a static JSON file.
It includes the the following features :

- Sort products from price High-to-Low and Low-to-High.
- Create Filters based on:
  - Size(S, M, L, XL)
  - Brand
  - Ideal for (Men, Women, Kids)

### Approach

Used gird for Product Listing layout and created a Filter context which would have the `state(s)` and `setState(s)` for each parameter and it's provider is kept on Product Layout i.e. App Layout(`./src/App.jsx`) enclosing the products rendering and filter inputs.

## 🔗 Links - [Live Demo]()

## Usage

## Run Locally

Clone the repository

```bash
  git clone https://github.com/guptavarun619/Product-Listing.git
```

Go to the project directory

```bash
  cd Product-Listing
```

Install dependencies

```bash
  npm install
```

Start the react app

```bash
  npm run dev
```

## Tech Stack

**Client:** React, TailwindCSS
