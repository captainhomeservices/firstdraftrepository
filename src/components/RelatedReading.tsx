import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export interface RelatedItem {
  to: string;
  label: string;
  tag?: string;
}

interface RelatedReadingProps {
  items: RelatedItem[];
  heading?: string;
}

const RelatedReading: React.FC<RelatedReadingProps> = ({
  items,
  heading = 'Related Reading'
}) => {
  if (!items.length) return null;

  return (
    <section className="bg-gray-50 border-t border-gray-200 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{heading}</h2>
        <ul className="divide-y divide-gray-200">
          {items.map((item, i) => (
            <li key={i}>
              <Link
                to={item.to}
                onClick={scrollToTop}
                className="group flex items-center justify-between gap-4 py-3.5 text-gray-800 hover:text-teal-700 transition-colors duration-200"
              >
                <span className="flex items-center gap-3">
                  {item.tag && (
                    <span className="hidden sm:inline-block shrink-0 text-xs font-semibold text-teal-600 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  )}
                  <span className="font-medium leading-snug">{item.label}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RelatedReading;
