import ProductDetail from "@/components/productDetail";

export default async function ProductPage() {
  return (
    <>
      <ProductDetail
        image="https://flowbite.com/docs/images/blog/image-1.jpg"
        title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
        rating={4}
        price={599}
        link="/product/1"
      />
    </>
  );
}
