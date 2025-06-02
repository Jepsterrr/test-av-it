'use client'

import React, { useState } from 'react';

import OverviewSection from '../components/essay/OverviewSection';
import CypressDeepDiveSection from '../components/essay/CypressDeepDiveSection';
import ResultSection from '../components/essay/ResultSection';
import DiscussionSection from '../components/essay/DiscussionSection';
import { testData } from '../data/essayData';
import type { TestDataType } from '../components/essay/ResultSection';

export default function Essay() {
  const [activeSection, setActiveSection] = useState<'oversikt' | 'resultat' | 'fordjupning' | 'diskussion'>('oversikt');
  const [activeFilter, setActiveFilter] = useState<string>('Alla');
  const [modalData, setModalData] = useState<TestDataType | null>(null); // Typa modalData korrekt

  // Funktioner för att byta sektion (liknande `Maps` i HTML-exemplet)
  const handleNavClick = (sectionId: 'oversikt' | 'resultat' | 'fordjupning' | 'diskussion') => {
    setActiveSection(sectionId);
  };

  // Funktioner för att hantera filter och modal (tas från ResultatSection senare)

  return (
    <>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Rapport-specifik navigation (kan vara en del av denna sida eller en sub-layout) */}
        <nav className="mb-8 bg-white shadow-sm rounded-lg p-3">
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <button
                onClick={() => handleNavClick('oversikt')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${activeSection === 'oversikt' ? 'bg-[#1e3a8a] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Översikt
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('fordjupning')}
                className={`px-3 py-2 sm:px-4 text-sm sm:text-base rounded-md font-medium transition-colors ${activeSection === 'fordjupning' ? 'bg-[#1e3a8a] text-white shadow-lg' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                Fördjupning Cypress
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('resultat')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${activeSection === 'resultat' ? 'bg-[#1e3a8a] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Testtyper & Resultat
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('diskussion')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${activeSection === 'diskussion' ? 'bg-[#1e3a8a] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Diskussion & Slutsats
              </button>
            </li>
          </ul>
        </nav>

        {/* Rendera aktiv sektion */}
        {activeSection === 'oversikt' && <OverviewSection />}
        {activeSection === 'resultat' && (
          <ResultSection
            testData={testData}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            setModalData={setModalData}
          />
        )}
        {activeSection === 'fordjupning' && <CypressDeepDiveSection />}
        {activeSection === 'diskussion' && <DiscussionSection />}

        {/* Modal för testanalys */}
        {modalData && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.40)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setModalData(null); }}
        >
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-[#2c3e50]">{`${modalData.id}: ${modalData.title}`}</h3>
                        <button onClick={() => setModalData(null)} className="text-gray-500 hover:text-gray-800 text-4xl">&times;</button>
                    </div>
                    {Array.isArray(modalData.analysis) ? (
                    <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                        {modalData.analysis.map((point: string, index: number) => (
                        <li
                          key={index}
                          dangerouslySetInnerHTML={{
                            __html: point.replace(/\((\d+)\)/g, '<span class="text-xs text-blue-500 ml-1">($1)</span>')
                          }}
                        ></li>
                        ))}
                    </ul>
                    ) : (
                    <p className="text-gray-700 leading-relaxed">{modalData.analysis}</p>
                    )}
                </div>
            </div>
        </div>
        )}
      </div>
    </>
  );
}
