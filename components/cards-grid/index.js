const CardsGrid = ({ children }) => {
  return (
    <section className="py-10 relative px-5">
      <div className="divide-y divide-gray-200 space-y-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsGrid;
