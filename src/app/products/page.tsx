import ProductCard from "../../components/productCard";

export default async function ProductList() {
  return (
    <div className="grid grid-cols-3">
      <ProductCard
        image="https://flowbite.com/docs/images/blog/image-1.jpg"
        title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
        rating={4}
        price={599}
        link="/product/1"
      />
      <ProductCard
        image="https://flowbite.com/docs/images/blog/image-1.jpg"
        title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
        rating={4}
        price={599}
        link="/product/1"
      />
      <ProductCard
        image="https://flowbite.com/docs/images/blog/image-1.jpg"
        title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
        rating={4}
        price={599}
        link="/product/1"
      />
    </div>
  );
}
