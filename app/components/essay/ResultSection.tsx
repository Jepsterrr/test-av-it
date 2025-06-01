'use client';

import TestCaseCard from './TestCaseCard';
import React from 'react';

export type TestDataType = {
  id: string;
  type: string;
  status: string;
  title: string;
  analysis: string[];
  chartData?: {
    performance: number;
    accessibility: number;
  };
  thresholds?: {
    performance: number;
    accessibility: number;
  };
};

interface ResultSectionProps {
  testData: TestDataType[];
  activeFilter: string;
  setActiveFilter: (type: string) => void;
  setModalData: (test: TestDataType | null) => void;
}

export default function ResultSection({ testData, activeFilter, setActiveFilter, setModalData }: ResultSectionProps) {

    const handleShowAnalysis = (test: TestDataType) => {
        setModalData(test);
    };

    const testTypes: string[] = ['Alla', ...Array.from(new Set(testData.map((t: TestDataType) => t.type)))];

    const filteredData: TestDataType[] = activeFilter === 'Alla' ? testData : testData.filter((t: TestDataType) => t.type === activeFilter);

    return (
        <section className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">Testtyper och Resultat</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Här presenteras resultaten från de olika testtyperna som genomfördes...
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {testTypes.map((type: string) => (
                        <button
                            key={type}
                            onClick={() => setActiveFilter(type)}
                            className={`filter-btn px-4 py-2 text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 ${activeFilter === type ? 'active bg-[#1e3a8a] text-white' : 'text-gray-700'}`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.map((test: TestDataType) => (
                    <TestCaseCard
                        key={test.id}
                        test={{
                            ...test,
                            // Säkerställ att thresholds alltid har ett defaultvärde om det kan vara undefined
                            thresholds: test.thresholds ?? { performance: 0, accessibility: 0 }
                        }}
                        onShowAnalysis={() => handleShowAnalysis(test)}
                    />
                ))}
            </div>
        </section>
    );
}