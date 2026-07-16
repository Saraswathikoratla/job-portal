const categories: string[] = [
  "Software",
  "Data",
  "DevOps",
  "UI/UX",
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-bold">
          Categories
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="cursor-pointer rounded-lg border p-6 text-center transition hover:shadow-md"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;