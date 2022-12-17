/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Facebook",
    href: "#",

    imageSrc: "https://img.icons8.com/color/480/null/facebook.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Linkedin",
    href: "#",

    imageSrc: "https://img.icons8.com/color/480/null/linkedin.png",
    imageAlt: "Linkedin",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Gmail",
    href: "#",

    imageSrc: "https://img.icons8.com/color/480/null/gmail-new.png",
    imageAlt: "Gmail",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Github",
    href: "#",

    imageSrc: "https://img.icons8.com/3d-fluency/750/null/github.png",
    imageAlt: "Github",
    price: "$35",
    color: "Black",
  },
  // More products...
];
// https://img.icons8.com/ios-filled/2x/facebook--v2.png
//tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg
{
  /* 
    https://img.icons8.com/ios-filled/500/null/facebook--v2.png
    <img src="https://img.icons8.com/3d-fluency/94/null/linkedin.png" />;
    <img src="https://img.icons8.com/color/48/null/facebook.png"/>
    <img src="https://img.icons8.com/color/480/null/linkedin.png"/>
    https://img.icons8.com/external-justicon-flat-justicon/64/null/external-gmail-social-media-justicon-flat-justicon.png
    <img src="https://img.icons8.com/color/480/null/gmail-new.png"/>
    <img src="https://img.icons8.com/sf-regular-filled/48/null/github.png"/>
     */
}

export default function ContactPage() {
  return (
    <div className="bg-transparent dark:bg-transparent dark:text-white">
      <div className="mx-auto m-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl m-auto font-bold tracking-tight">Contact</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-70 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none lg:h-70">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg ">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-md dark:text-gray-400">
                    {product.color}
                  </p>
                </div>
                <p className="text-sm font-medium ">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
