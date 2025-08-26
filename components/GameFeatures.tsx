export default function GameFeatures() {
  const features = [
    {
      icon: '🎭',
      title: 'Dark Comedy Elements',
      description: 'Experience a unique blend of humor and serious themes that challenge your perspective on morality and desperation.'
    },
    {
      icon: '🎯',
      title: 'Multiple Endings',
      description: 'Your choices matter. Three different endings await based on how you navigate the moral complexities of the game.'
    },
    {
      icon: '🎨',
      title: 'Contrasting Visuals',
      description: 'Soft pastel art style creates an intentional disconnect with the dark narrative, enhancing the unsettling atmosphere.'
    },
    {
      icon: '⚡',
      title: 'Simple Controls',
      description: 'Easy-to-learn one-button gameplay that focuses your attention on the moral weight of each decision.'
    },
    {
      icon: '🧠',
      title: 'Psychological Exploration',
      description: 'Delve into themes of greed, conscience, and the lengths people will go to for survival and money.'
    },
    {
      icon: '⏰',
      title: 'Quick Experience',
      description: 'Complete the full narrative arc in approximately 30 minutes, perfect for a thought-provoking gaming session.'
    }
  ]

  return (
    <section className="mb-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Game Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}