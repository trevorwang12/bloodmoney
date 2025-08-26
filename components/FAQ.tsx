'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "Is Blood Money suitable for all audiences?",
      answer: "No, Blood Money contains mature themes including moral dilemmas, dark humor, and psychological elements. It's recommended for mature audiences who can handle complex ethical questions and darker narrative content."
    },
    {
      question: "How long does it take to complete the game?",
      answer: "The average playthrough takes approximately 30 minutes. However, you may want to replay it multiple times to experience all three different endings and fully explore the moral complexities."
    },
    {
      question: "What makes Blood Money different from other clicker games?",
      answer: "Unlike traditional clicker games focused on endless progression, Blood Money has a specific narrative goal ($25,000), multiple endings, and incorporates serious moral themes that challenge players to think about their choices and their consequences."
    },
    {
      question: "Can I play Blood Money on mobile devices?",
      answer: "Yes, the game is browser-based and works on mobile devices. The simple one-button control scheme makes it perfectly suited for touch interfaces on smartphones and tablets."
    },
    {
      question: "Are there any similar games you'd recommend?",
      answer: "If you enjoy games that blend dark themes with moral choices, you might also like Amanda The Adventurer, Baldi's Basics, or Buckshot Roulette. These games similarly challenge conventional gaming expectations."
    },
    {
      question: "Do my choices really affect the ending?",
      answer: "Absolutely! Blood Money features three distinct endings based on how you approach the moral dilemmas throughout the game. Your decisions and the pace at which you make them directly influence which conclusion you'll experience."
    },
    {
      question: "Is there a way to save my progress?",
      answer: "The game is designed to be completed in a single session (approximately 30 minutes), so there's no traditional save system. Each playthrough is a complete narrative experience from start to finish."
    },
    {
      question: "What's the significance of the pastel art style?",
      answer: "The soft, pastel visuals create an intentional contrast with the dark narrative themes. This artistic choice enhances the unsettling nature of the game by presenting serious content in a deceptively gentle visual package."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="mb-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>
                <span className={`text-2xl text-red-500 transition-transform ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg text-center">
          <p className="text-gray-600">
            Have more questions? This game explores complex themes that may raise additional questions about morality, choice, and consequence. 
            Consider discussing your experience with others to gain different perspectives on the narrative.
          </p>
        </div>
      </div>
    </section>
  )
}