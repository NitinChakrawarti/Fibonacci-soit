import React, { useState } from 'react';

const problemStatements = [
    {
        category: "Women's Safety",
        items: [
            {
                title: 'Real-Time Safety Alerts System',
                description: 'Develop a web and mobile application that allows women to send real-time alerts to trusted contacts or local authorities when they feel unsafe, incorporating geolocation and audio-visual recording features.'
            },
            {
                title: 'Emergency Response Dashboard',
                description: 'Build a centralized dashboard for emergency services that aggregates data from various sources, enabling quicker response times to incidents involving women in distress.'
            }
        ]
    },
    {
        category: 'Education',
        items: [
            {
                title: 'Interactive Learning Management System',
                description: 'Design an interactive web and mobile application that incorporates gamification elements to enhance student engagement and allows teachers to customize lessons based on individual learning styles while also providing quality education to underserved communities.'
            }
        ]
    },
    {
        category: 'Sustainability',
        items: [
            {
                title: 'Carbon Footprint Tracker',
                description: 'Create a web and mobile application that helps users track their carbon footprint through daily activities, offering personalized tips and local resources for reducing their environmental impact, with a focus on mitigating global warming and promoting nature conservation at both global and community levels.'
            }
        ]
    },
    {
        category: 'Food, Fitness, and Nutrition',
        items: [
            {
                title: 'Meal Planning Application',
                description: 'Build a web and mobile application that helps users plan meals based on dietary restrictions and preferences, providing recipes, nutritional information, and shopping lists that can integrate with local grocery delivery services.'
            },
            {
                title: 'Fitness Community Platform',
                description: 'Create a fitness community web and mobile platform that connects users with workout partners, tracks fitness goals, and offers personalized workout plans based on user data and preferences.'
            }
        ]
    },
    {
        category: 'Local Events and Community Engagement',
        items: [
            {
                title: 'Local Events Discovery Platform',
                description: 'Create a web and mobile platform for discovering and promoting local events, integrating features for user-generated content, RSVP management, and social media sharing to enhance community involvement.'
            },
            {
                title: 'Community Volunteer Connection',
                description: 'Build a community-driven web and mobile platform that connects residents with local volunteer opportunities, featuring event calendars, skill matching tools, and social features to promote civic engagement.'
            }
        ]
    },
    {
        category: 'Climate Change Impact Simulation',
        items: [
            {
                title: 'Climate Change Impact Simulator',
                description: 'Design an interactive web and mobile application that simulates the potential impacts of climate change on local ecosystems, allowing youth to explore scenarios and understand the importance of conservation efforts.'
            },
            {
                title: 'Youth Environmental Engagement Platform',
                description: 'Build a web and mobile platform that connects youth with local environmental organizations for volunteer opportunities, promoting hands-on involvement in conservation and sustainability initiatives.'
            }
        ]
    },
    {
        category: 'Youth Civic Engagement Portal',
        items: [
            {
                title: 'Civic Engagement Portal for Youth',
                description: 'Develop an interactive web and mobile site that encourages young people to engage in civic activities, offering resources on local issues, volunteer opportunities, and tools for organizing community events.'
            }
        ]
    }
];


const ProblemStatements = () => {
    const [selectedCategory, setSelectedCategory] = useState(problemStatements[0]);

    return (
        <div className="pt-20 lg:px-36 px-8" id='problem_statements'>
            <h1 className="text-[3vmax] font-bold text-primary mb-8">Problem Statements</h1>
            <div className="flex flex-wrap gap-4 pb-4">
                {problemStatements.map((category, index) => (
                    <button
                        key={index}
                        className={`px-2 w-fit  font-semibold rounded-md ${selectedCategory === category ? 'bg-green-600 text-white' : 'bg_gradient text-gray-800'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.category}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-6 pt-8">
                {selectedCategory.items.map((item, idx) => (
                    <div key={idx} className="p-6 bg_gradient rounded-lg shadow-lg transition-transform hover:scale-105">
                        <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                        <p className="text-justify text-gray-800">{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center pt-8">
                <h1 className="text-red-500 font-semibold">Note:</h1>
                <p className="text-white pl-2">Select a category to view related problem statements.</p>
            </div>
        </div>
    );
};

export default ProblemStatements;
