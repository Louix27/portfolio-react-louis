// components/BackgroundSection.jsx
import Fade from "react-reveal/Fade";

const BackgroundSection = ({ language }) => {
    const timelineData = [
        {
            year: "2024-2025",
            text: language === "fr" ? "IUT de Lens (62300) Deuxième année de BUT Informatique" : "Second year of Computer Science",
        },
        {
            year: "2023-2024",
            text: language === "fr" ? "IUT de Lens (62300) Première année de BUT Informatique" : "Second year of Computer Science",
        },
        {
            year: "2020-2023",
            text: language === "fr" ? "Lycée Arthur Rimbaud (59450) Baccalauréat général Spécialités: Mathématiques | NSI" : "High School Diploma Specialties: Mathematics | NSI",
        },
    ];

    return (
        <section id="parcours" className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                <Fade bottom>
                    <h2 className="text-5xl py-3 text-teal-400 font-medium">
                        {language === "fr" ? "Mon Parcours" : "My Background"}
                    </h2>
                    <div className="relative mt-10">
                        <div className="border-l-4 border-teal-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                        {timelineData.map((item, index) => (
                            <div key={index} className="mb-12 flex justify-between items-center w-full">
                                <div className={`order-1 w-5/12 ${index % 2 === 1 ? 'order-2' : ''}`}></div>
                                <div className={`order-1 w-5/12 px-4 py-6 text-${index % 2 === 1 ? 'left' : 'right'} border-2 border-teal-400 rounded-lg`}>
                                    <p className="mb-3 text-base text-teal-400">{item.year}</p>
                                    <p className="text-lg leading-snug text-gray-200">{item.text}</p>
                                </div>
                                <div className="absolute w-6 h-6 bg-teal-400 rounded-full left-1/2 transform -translate-x-1/2"></div>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default BackgroundSection;