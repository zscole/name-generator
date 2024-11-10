"use client"

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const ChineseNameGenerator = () => {
  const [generatedName, setGeneratedName] = useState('');
  const [chineseCharacters, setChineseCharacters] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const lastNames = [
    'Majongus', 'Kajongus', 'Dajongus', 'Lajongus', 'Majongi', 'Rajongus', 
    'Tajongus', 'Gajongus', 'Sajongus', 'Bajongus', 'Fajongus', 'Jajongus',
    'Vajongus', 'Zajongus', 'Najongus', 'Qajongus', 'Xajongus', 'Cajongus'
  ];

  const firstNames = [
    'Jorkin', 'Korkin', 'Dorkin', 'Lorkin', 'Morkin', 'Porkin', 'Sorkin',
    'Torkin', 'Gorkin', 'Horkin', 'Borkin', 'Forkin', 'Yorkin', 'Wokin',
    'Vorkin', 'Zorkin', 'Norkin', 'Rorkin', 'Qorkin', 'Xorkin', 'Corkin'
  ];

  const chineseChars = [
    '永', '光', '德', '明', '志', '建', '国', '华', '平', '和',
    '安', '康', '天', '文', '子', '仁', '义', '礼', '智', '信'
  ];

  const getRandomChineseChars = () => {
    const numChars = 2 + Math.floor(Math.random() * 2);
    let result = '';
    for (let i = 0; i < numChars; i++) {
      const randomChar = chineseChars[Math.floor(Math.random() * chineseChars.length)];
      result += randomChar;
    }
    return result;
  };

  const generateName = async () => {
    setIsGenerating(true);
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setGeneratedName(`${randomFirstName} ${randomLastName}`);
    setChineseCharacters(getRandomChineseChars());
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-red-700 p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white/95 rounded-xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-400 transform -translate-x-8 -translate-y-8 rotate-45" />
        <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 transform translate-x-8 -translate-y-8 rotate-45" />
        
        <div className="p-6 space-y-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-red-600">
              Amazing Chinese Name Generator!
            </h1>
            <p className="text-gray-600">
              Discover your destiny with a magical Chinese name! ✨
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <div className="text-6xl animate-bounce">🐲</div>
            <div className="text-6xl animate-bounce delay-100">🐼</div>
            <div className="text-6xl animate-bounce delay-200">🏮</div>
          </div>

          <div className="flex flex-col items-center gap-6 pt-4">
            <button 
              onClick={generateName}
              disabled={isGenerating}
              className="
                w-64 h-16 text-lg font-bold
                bg-gradient-to-r from-yellow-400 to-yellow-500 
                hover:from-yellow-500 hover:to-yellow-600
                text-red-900 rounded-lg shadow-lg
                transform hover:scale-105 transition-all
                flex items-center justify-center gap-2
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              <Sparkles className="w-6 h-6" />
              {isGenerating ? "Consulting the Ancient Scrolls..." : "Generate Your Chinese Name!"}
            </button>

            {generatedName && (
              <div className="flex flex-col items-center gap-4">
                <div className="text-center">
                  <div className="text-gray-600 mb-2">🎉 Behold your Chinese name! 🎉</div>
                  <div className="text-2xl font-bold text-red-600">
                    {generatedName}
                  </div>
                  <div className="text-4xl font-normal text-red-700 mt-2">
                    {chineseCharacters}
                  </div>
                </div>
                
                <div className="text-sm text-gray-500 text-center max-w-xs">
                  Your unique name combines ancient wisdom with modern destiny! 
                  Share it proudly with the world! 🌟
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChineseNameGenerator;