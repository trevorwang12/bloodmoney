export default function GameInfo() {
  return (
    <section className="mb-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          About Blood Money
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              🎯 The Challenge
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              You find yourself in a desperate situation with Harvey Harvington, who needs $25,000 for life-saving surgery. 
              The only way to earn this money is through a morally questionable clicking mechanism that tests the boundaries 
              between survival and conscience.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              🎨 Unique Art Style
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Blood Money features soft pastel visuals that create a striking contrast with its dark thematic content, 
              creating an unsettling yet captivating aesthetic that enhances the moral complexity of your choices.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              ⏱️ Game Details
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                <strong>Duration:</strong> ~30 minutes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                <strong>Goal:</strong> Earn $25,000
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                <strong>Endings:</strong> 3 different outcomes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                <strong>Control:</strong> Simple one-button gameplay
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">
                <strong>Note:</strong> This game explores mature themes including moral dilemmas, 
                desperation, and the psychological effects of difficult choices. Player discretion is advised.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}