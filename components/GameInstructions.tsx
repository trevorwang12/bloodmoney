export default function GameInstructions() {
  return (
    <section className="mb-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          How to Play
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Understand the Situation
              </h3>
              <p className="text-gray-600">
                Harvey Harvington desperately needs $25,000 for life-saving surgery. You're his only hope, 
                but the method of earning money comes with moral consequences.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Start Clicking
              </h3>
              <p className="text-gray-600">
                Use simple mouse clicks or taps to begin earning money. Each interaction progresses the story 
                and brings you closer to the $25,000 goal, but at what cost?
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Monitor Your Progress
              </h3>
              <p className="text-gray-600">
                Keep track of your earnings and watch how your actions affect both Harvey and yourself. 
                The game provides constant feedback on your moral journey.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Face the Consequences
              </h3>
              <p className="text-gray-600">
                Your choices throughout the game will determine which of the three endings you receive. 
                Will you save Harvey, preserve your conscience, or find a middle ground?
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-red-700">
            <li>• Pay attention to the narrative cues and character reactions</li>
            <li>• Consider the long-term implications of your actions</li>
            <li>• There's no "right" or "wrong" way to play - it's about your moral compass</li>
            <li>• Try multiple playthroughs to experience different endings</li>
          </ul>
        </div>
      </div>
    </section>
  )
}