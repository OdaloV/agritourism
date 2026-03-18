import { Card } from "@/components/ui/card";
import {
  Tractor,
  Apple,
  Tent,
  Wine,
  Camera,
  Leaf,
  Wheat,
  Coffee,
} from "lucide-react";

const categories = [
  { icon: Tractor, name: "Farm Stays", count: 120, color: "text-green-600" },
  { icon: Apple, name: "Pick-Your-Own", count: 85, color: "text-red-500" },
  {
    icon: Tent,
    name: "Camping & Glamping",
    count: 64,
    color: "text-amber-600",
  },
  { icon: Wine, name: "Wine Tasting", count: 42, color: "text-purple-600" },
  { icon: Camera, name: "Workshops", count: 38, color: "text-blue-600" },
  { icon: Leaf, name: "Farm Tours", count: 156, color: "text-emerald-600" },
  {
    icon: Wheat,
    name: "Harvest Festivals",
    count: 27,
    color: "text-yellow-600",
  },
  { icon: Coffee, name: "Farm-to-Table", count: 53, color: "text-orange-600" },
];

export function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect farm experience that matches your interests
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`mb-3 p-3 rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform ${category.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.count} experiences
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
