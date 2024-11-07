export default function ProductDetail({ image, title, price }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <img className="" src={image} alt={title} />
      </div>
      <div style={{paddingLeft:'40px'}}>
      <h1 className="text-4xl font-bold text-gray-900">{title}           
        
       </h1>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
       <div className="">
       <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}
       </span>
        <div className="flex items-center justify-between">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div> 
      </div>
    </div>
  );
}
