import React, { useState } from "react";
import { X, ZoomIn, Download } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  date: string;
  description?: string;
}

interface CategoryFilter {
  id: string;
  label: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories: CategoryFilter[] = [
    { id: "all", label: "All Events" },
    { id: "academic", label: "Academic" },
    { id: "cultural", label: "Cultural" },
    { id: "sports", label: "Sports" },
    { id: "community", label: "Community" },
  ];

  const images: GalleryImage[] = [
    {
      id: 1,
      title: "Science Innovation Contest 2024",
      category: "academic",
      imageUrl: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&auto=format&fit=crop&q=60",
      date: "2024-01-15",
      description: "Students showcasing their innovative science projects at the annual Science Fair.",
    },
    {
      id: 2,
      title: "Cultural Dance Performance",
      category: "cultural",
      imageUrl: "https://images.unsplash.com/photo-1545224144-b38cd309ef69?w=800&auto=format&fit=crop&q=60",
      date: "2024-02-20",
      description: "Traditional dance performances celebrating our rich cultural heritage.",
    },
    {
      id: 3,
      title: "Annual Sports Meet 2024",
      category: "sports",
      imageUrl: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&auto=format&fit=crop&q=60",
      date: "2024-03-10",
      description: "Students participating in various sports activities during the annual sports meet.",
    },
    {
      id: 4,
      title: "Community Service Drive",
      category: "community",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=60",
      date: "2024-01-25",
      description: "Students engaging in community service activities to make a positive impact.",
    },
    {
      id: 5,
      title: "Mathematics Olympiad",
      category: "academic",
      imageUrl: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=800&auto=format&fit=crop&q=60",
      date: "2024-02-05",
      description: "Students participating in the national level Mathematics Olympiad.",
    },
    {
      id: 6,
      title: "Art Exhibition",
      category: "cultural",
      imageUrl: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=800&auto=format&fit=crop&q=60",
      date: "2024-03-15",
      description: "Showcasing creative artworks by our talented students.",
    },
    {
      id: 7,
      title: "Cricket Tournament",
      category: "sports",
      imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop&q=60",
      date: "2024-02-28",
      description: "Inter-school cricket tournament finals.",
    },
    {
      id: 8,
      title: "Environmental Awareness",
      category: "community",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60",
      date: "2024-03-05",
      description: "Tree plantation drive organized by our students.",
    },
    {
      id: 9,
      title: "Robotics Workshop",
      category: "academic",
      imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?w=800&auto=format&fit=crop&q=60",
      date: "2024-01-30",
      description: "Hands-on robotics workshop for aspiring engineers.",
    },
    {
      id: 10,
      title: "Music Festival",
      category: "cultural",
      imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop&q=60",
      date: "2024-03-20",
      description: "Annual music festival showcasing various musical talents.",
    },
    {
      id: 11,
      title: "Yoga Day Celebration",
      category: "sports",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60",
      date: "2024-02-15",
      description: "International Yoga Day celebrations at our campus.",
    },
    {
      id: 12,
      title: "Health Camp",
      category: "community",
      imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop&q=60",
      date: "2024-03-25",
      description: "Free health checkup camp organized for the local community.",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const LightBox: React.FC<{ image: GalleryImage; onClose: () => void }> = ({
    image,
    onClose,
  }) => (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 rounded-full bg-black/50"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        <div className="relative">
          <img
            src={image.imageUrl}
            alt={image.title}
            className="max-h-[85vh] object-contain mx-auto rounded-lg"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6 backdrop-blur-sm rounded-b-lg">
            <h3 className="text-2xl font-semibold mb-2">{image.title}</h3>
            <p className="text-lg text-gray-300">{image.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-400">
                {new Date(image.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <button className="flex items-center gap-2 hover:text-indigo-400 transition-colors duration-300 bg-white/10 px-4 py-2 rounded-lg">
                <Download size={18} />
                <span>Download Image</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        

        <div className="relative py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Gallery
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-indigo-100">
              Explore the moments and memories from our various events and activities
            </p>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${
                  selectedCategory === category.id
                    ? "bg-indigo-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                <p className="text-sm text-gray-200">
                  {new Date(image.date).toLocaleDateString()}
                </p>
                <button
                  onClick={() => setSelectedImage(image)}
                  className="mt-2 flex items-center gap-2 text-sm hover:text-indigo-300 transition-colors"
                >
                  <ZoomIn size={16} />
                  <span>View Larger</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <LightBox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      <style jsx>{`
        @keyframes grid {
          0% {
            transform: rotateX(50deg) translateY(0);
          }
          100% {
            transform: rotateX(50deg) translateY(40px);
          }
        }

        .animate-grid {
          animation: grid 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Gallery;