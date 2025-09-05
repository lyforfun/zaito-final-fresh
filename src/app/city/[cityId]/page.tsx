import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import mfoData from '@/data/mfo.json';
import { Star } from 'lucide-react';

// Определяем тип для параметров страницы
type PageProps = {
  params: {
    cityId: string;
  };
};

export default function CityPage({ params }: PageProps) {
  const cityName = decodeURIComponent(params.cityId);
  // @ts-ignore
  const filteredMfos = mfoData.filter(mfo => mfo.cities.includes(cityName));

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
          Микрокредиты в городе {cityName}
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Лучшие предложения по микрокредитам в вашем городе.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMfos.map((mfo) => (
            <div key={mfo.id} className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100 flex flex-col">
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-blue-600">{mfo.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{mfo.name}</h2>
                    <div className="flex items-center mt-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-2 text-gray-800 font-semibold">{mfo.rating}</span>
                      <span className="ml-2 text-gray-600">({mfo.reviewsCount} отзывов)</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{mfo.description}</p>
                <div className="text-sm space-y-2">
                  <p><strong>Сумма:</strong> до {mfo.maxAmount.toLocaleString()} ₸</p>
                  <p><strong>Ставка:</strong> {mfo.rate}</p>
                  <p><strong>Срок:</strong> до {mfo.maxTerm} дней</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href={`/mfo/${mfo.id}`}
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-200 shadow-md"
                >
                  Подробнее
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
