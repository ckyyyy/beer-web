This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  
By the default, it will redirect to the Beer Page (http://localhost:3000/beer)

## Features & Screen Shotof the project

#### 1. Pagination API using infinite scroll  
The API will only return 25 items every time.  
When user scrolled at the bottom of the page, it will call another API to get the next 25 items.  
![image](images/infinite-scroll.gif) 
 
#### 2. Add favourite beer to My Favourite Beer section 
User can add any beer from the beer page to my favourite beer section for eaiser view.  
![image](images/add-fav-beer.gif)  

#### 3. Remove favourite beer from My Favourite Beer section
User can remove any beer from my favourite beer section for eaiser manage.  
![image](images/remove-fav-beer.gif)
