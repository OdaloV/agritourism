import { Button } from "@/components/ui/button";
import { Search, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop"
          alt="Beautiful farmland landscape with rolling hills and golden sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Discover Authentic
          <span className="block text-secondary">Farm Experiences</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
          Connect with nature, learn about sustainable farming, and create
          unforgettable memories on working farms around the country.
        </p>

        {/* Search Bar */}
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-2 shadow-lg">
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-md px-3 py-2">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for farms, activities, or locations"
                className="w-full outline-none text-gray-900 placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center gap-2 rounded-md px-3 py-2 border-l md:border-l">
              <Calendar className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Select dates"
                className="w-full outline-none text-gray-900 placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center gap-2 rounded-md px-3 py-2 border-l md:border-l">
              <MapPin className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full outline-none text-gray-900 placeholder:text-gray-400"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8">
              Search
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-gray-300">Verified Farms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50k+</div>
            <div className="text-sm text-gray-300">Happy Visitors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">100+</div>
            <div className="text-sm text-gray-300">Activities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
