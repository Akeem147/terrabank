interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
  }
  
  const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
    <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
  
  export default FeatureCard;
  