'use client'

import React, { useState } from 'react';
// Importera dina framtida komponenter
import OverviewSection from '../components/essay/OverviewSection';
import ResultSection from '../components/essay/ResultSection';
import DiscussionSection from '../components/essay/DiscussionSection'; // Exempel
import { testData } from '../data/essayData'; // Antag att du flyttar datan hit
import type { TestDataType } from '../components/essay/ResultSection'; // Importera typen

export default function Essay() {
  const [activeSection, setActiveSection] = useState<'oversikt' | 'resultat' | 'diskussion'>('oversikt');
  const [activeFilter, setActiveFilter] = useState<string>('Alla');
  const [modalData, setModalData] = useState<TestDataType | null>(null); // Typa modalData korrekt

  // Funktioner för att byta sektion (liknande `Maps` i HTML-exemplet)
  const handleNavClick = (sectionId: 'oversikt' | 'resultat' | 'diskussion') => {
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
        {activeSection === 'diskussion' && <DiscussionSection />}

        {/* Modal för testanalys */}
        {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={(e) => { if (e.target === e.currentTarget) setModalData(null); }}>
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
