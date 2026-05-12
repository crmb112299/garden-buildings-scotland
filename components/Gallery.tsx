type Props = {
  images: string[];
  heading?: string;
  subheading?: string;
};

export default function Gallery({ images, heading, subheading }: Props) {
  // Use up to 6 images in a 3-column responsive grid
  const shots = images.slice(0, 6);
  if (shots.length === 0) return null;
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-container mx-auto px-4">
        {heading && (
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold">{heading}</h2>
            {subheading && <p className="mt-2 text-ink-500">{subheading}</p>}
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {shots.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-lg aspect-[4/3] ${i === 0 ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-[16/10]" : ""}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: `url(${src})` }}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
