import { Star, CheckCircle, XCircle } from 'lucide-react';
import mfoData from '@/data/mfo.json';
import Link from 'next/link';

// Определяем тип для параметров страницы
type PageProps = {
  params: {
    mfoId: string;
  };
};

export default function MfoDetailPage({ params }: PageProps) {
  // @ts-ignore
  const mfo = mfoData.find(m => m.id === params.mfoId);

  if (!mfo) {
    return <div>МФО не найдено</div>;
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl font-bold text-blue-600">{mfo.name.charAt(0)}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">{mfo.fullName}</h1>
            <div className="flex items-center justify-center mt-2">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="ml-2 text-xl font-semibold text-gray-800">{mfo.rating}</span>
              <span className="ml-2 text-gray-600">({mfo.reviewsCount} отзывов)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Условия займа</h2>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Сумма:</strong> {mfo.minAmount.toLocaleString()} - {mfo.maxAmount.toLocaleString()} ₸</li>
                <li><strong>Срок:</strong> {mfo.minTerm} - {mfo.maxTerm} дней</li>
                <li><strong>Ставка:</strong> {mfo.rate}</li>
                <li><strong>Первый займ:</strong> {mfo.firstLoanRate}</li>
                <li><strong>Время рассмотрения:</strong> {mfo.approvalTime}</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Требования</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />{mfo.requirements.age}</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />{mfo.requirements.citizenship}</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />{mfo.requirements.income}</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />{mfo.requirements.documents}</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Описание</h2>
            <p className="text-gray-700 leading-relaxed">{mfo.description}</p>
          </div>

          <div className="text-center">
            <a
              href={mfo.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-200 shadow-lg"
            >
              Оформить займ на официальном сайте
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
