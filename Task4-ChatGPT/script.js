document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('#theme-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-adjust');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-adjust');
    }
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('nav ul').classList.remove('show');
    });
});

document.getElementById('chatbot-toggle').addEventListener('click', function() {
    document.getElementById('chatbot').style.display = 'flex';
});

document.getElementById('close-chatbot').addEventListener('click', function() {
    document.getElementById('chatbot').style.display = 'none';
});

document.getElementById('send-message').addEventListener('click', sendMessage);
document.getElementById('chatbot-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return 'Hello! How can I assist you today?';
    } else if (lowerCaseMessage.includes('how are you')) {
        return 'I am just a bot, but I am here to help you! How can I assist you today?';
    } else if (lowerCaseMessage.includes('what is your name')) {
        return 'I am your friendly chatbot, here to assist you with any questions you may have!';
    } else if (lowerCaseMessage.includes('bye')) {
        return 'Goodbye! Have a great day! If you have any more questions, feel free to ask.';
    } else if (lowerCaseMessage.includes('ok') || lowerCaseMessage.includes('okay')) {
        return 'Alright! Let me know if you need anything else.';
    } else if (lowerCaseMessage.includes('google')) {
        return 'Google is a search engine that helps you find information on the internet. It was founded in 1998 by Larry Page and Sergey Brin. Is there something specific you want to know about Google?';
    } else if (lowerCaseMessage.includes('coding') || lowerCaseMessage.includes('programming') || lowerCaseMessage.includes('code') || lowerCaseMessage.includes('developer') || lowerCaseMessage.includes('software')) {
        return 'Coding is the process of writing instructions for computers to perform tasks. Popular programming languages include Python, JavaScript, and Java. Do you have any specific questions about coding?';
    } else if (lowerCaseMessage.includes('website') || lowerCaseMessage.includes('site') || lowerCaseMessage.includes('platform')) {
        return 'This website is an E-Learning Platform where you can find the best courses online to enhance your skills and knowledge. Is there a specific course you are interested in?';
    } else if (lowerCaseMessage.includes('thank you') || lowerCaseMessage.includes('thanks')) {
        return 'You\'re welcome! If you have any more questions, feel free to ask.';
    } else if (lowerCaseMessage.includes('help') || lowerCaseMessage.includes('assist')) {
        return 'Sure, I am here to help! What do you need assistance with?';
    } else if (lowerCaseMessage.includes('ai') || lowerCaseMessage.includes('artificial intelligence')) {
        return 'Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn like humans. AI is used in various applications such as natural language processing, robotics, and machine learning.';
    } else if (lowerCaseMessage.includes('machine learning')) {
        return 'Machine Learning is a subset of AI that involves training algorithms to learn from data and make predictions or decisions without being explicitly programmed. It is widely used in applications such as recommendation systems, image recognition, and autonomous vehicles.';
    } else if (lowerCaseMessage.includes('data science')) {
        return 'Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It involves techniques from statistics, computer science, and domain expertise.';
    } else if (lowerCaseMessage.includes('cloud computing')) {
        return 'Cloud Computing is the delivery of computing services over the internet, including storage, processing, and networking. It allows for scalable and flexible resource management, and is used by businesses to reduce costs and improve efficiency.';
    } else if (lowerCaseMessage.includes('blockchain')) {
        return 'Blockchain is a decentralized digital ledger that records transactions across many computers in a way that ensures the security and transparency of the data. It is the underlying technology behind cryptocurrencies like Bitcoin.';
    } else if (lowerCaseMessage.includes('cybersecurity')) {
        return 'Cybersecurity involves protecting computer systems, networks, and data from digital attacks, unauthorized access, and damage. It includes practices like encryption, firewalls, and secure coding to safeguard information.';
    } else if (lowerCaseMessage.includes('big data')) {
        return 'Big Data refers to extremely large datasets that can be analyzed computationally to reveal patterns, trends, and associations, especially relating to human behavior and interactions. It is used in various fields such as marketing, healthcare, and finance.';
    } else if (lowerCaseMessage.includes('internet of things') || lowerCaseMessage.includes('iot')) {
        return 'The Internet of Things (IoT) refers to the network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity to exchange data with other devices and systems over the internet.';
    } else if (lowerCaseMessage.includes('quantum computing')) {
        return 'Quantum Computing is a type of computing that uses quantum bits (qubits) to perform calculations at incredibly high speeds. It has the potential to solve complex problems that are currently intractable for classical computers.';
    } else if (lowerCaseMessage.includes('virtual reality') || lowerCaseMessage.includes('vr')) {
        return 'Virtual Reality (VR) is a simulated experience that can be similar to or completely different from the real world. It is used in various applications such as gaming, training, and therapy.';
    } else if (lowerCaseMessage.includes('augmented reality') || lowerCaseMessage.includes('ar')) {
        return 'Augmented Reality (AR) is an interactive experience where digital information is overlaid onto the real world. It is used in applications such as gaming, education, and retail.';
    } else if (lowerCaseMessage.includes('robotics')) {
        return 'Robotics is the branch of technology that deals with the design, construction, operation, and application of robots. Robots are used in various industries such as manufacturing, healthcare, and space exploration.';
    } else if (lowerCaseMessage.includes('natural language processing') || lowerCaseMessage.includes('nlp')) {
        return 'Natural Language Processing (NLP) is a field of AI that focuses on the interaction between computers and humans through natural language. It is used in applications such as chatbots, translation, and sentiment analysis.';
    } else if (lowerCaseMessage.includes('deep learning')) {
        return 'Deep Learning is a subset of machine learning that uses neural networks with many layers to learn from large amounts of data. It is used in applications such as image recognition, speech recognition, and autonomous driving.';
    } else if (lowerCaseMessage.includes('neural networks')) {
        return 'Neural Networks are a series of algorithms that attempt to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates. They are used in various AI applications.';
    } else if (lowerCaseMessage.includes('automation')) {
        return 'Automation involves using technology to perform tasks with minimal human intervention. It is used in various industries to improve efficiency, reduce costs, and increase productivity.';
    } else if (lowerCaseMessage.includes('ethics in ai')) {
        return 'Ethics in AI involves the study of moral issues and decisions related to the development and use of artificial intelligence. It includes topics such as bias, fairness, transparency, and accountability.';
    } else if (lowerCaseMessage.includes('digital transformation')) {
        return 'Digital Transformation is the integration of digital technology into all areas of a business, fundamentally changing how it operates and delivers value to customers. It involves the use of technologies such as AI, IoT, and cloud computing.';
    } else if (lowerCaseMessage.includes('5g technology')) {
        return '5G Technology is the fifth generation of mobile network technology, offering faster speeds, lower latency, and more reliable connections. It enables new applications such as autonomous vehicles, smart cities, and remote surgery.';
    } else if (lowerCaseMessage.includes('edge computing')) {
        return 'Edge Computing involves processing data closer to the source of data generation rather than in a centralized data center. It reduces latency and bandwidth usage, and is used in applications such as IoT and autonomous vehicles.';
    } else if (lowerCaseMessage.includes('digital twins')) {
        return 'Digital Twins are virtual replicas of physical objects, systems, or processes that are used to simulate, predict, and optimize performance. They are used in industries such as manufacturing, healthcare, and smart cities.';
    } else if (lowerCaseMessage.includes('smart cities')) {
        return 'Smart Cities use digital technology to improve the quality of life for residents, enhance urban services, and reduce environmental impact. They involve the use of IoT, AI, and data analytics to manage resources and infrastructure.';
    } else if (lowerCaseMessage.includes('renewable energy')) {
        return 'Renewable Energy comes from natural sources that are constantly replenished, such as solar, wind, and hydroelectric power. It is used to reduce greenhouse gas emissions and combat climate change.';
    } else if (lowerCaseMessage.includes('sustainable development')) {
        return 'Sustainable Development involves meeting the needs of the present without compromising the ability of future generations to meet their own needs. It includes practices such as resource conservation, renewable energy, and social equity.';
    } else if (lowerCaseMessage.includes('fintech')) {
        return 'Fintech, or financial technology, refers to the use of technology to improve and automate financial services. It includes applications such as mobile banking, digital payments, and blockchain-based solutions.';
    } else if (lowerCaseMessage.includes('biotechnology')) {
        return 'Biotechnology involves using living organisms or their components to develop products and technologies for various applications, such as medicine, agriculture, and environmental protection.';
    } else if (lowerCaseMessage.includes('genomics')) {
        return 'Genomics is the study of the complete set of DNA (genome) in an organism. It involves analyzing the structure, function, and evolution of genes, and is used in fields such as medicine, agriculture, and biotechnology.';
    } else if (lowerCaseMessage.includes('telemedicine')) {
        return 'Telemedicine involves using telecommunications technology to provide healthcare services remotely. It includes applications such as virtual consultations, remote monitoring, and telehealth platforms.';
    } else if (lowerCaseMessage.includes('wearable technology')) {
        return 'Wearable Technology includes devices that can be worn on the body, such as smartwatches, fitness trackers, and health monitors. They are used to track health metrics, provide notifications, and enhance user experiences.';
    } else if (lowerCaseMessage.includes('3d printing')) {
        return '3D Printing, or additive manufacturing, involves creating three-dimensional objects by adding material layer by layer. It is used in various industries such as manufacturing, healthcare, and aerospace.';
    } else if (lowerCaseMessage.includes('virtual assistants')) {
        return 'Virtual Assistants are AI-powered software programs that can perform tasks or provide services based on user commands or questions. Examples include Siri, Alexa, and Google Assistant.';
    } else if (lowerCaseMessage.includes('chatbots')) {
        return 'Chatbots are AI-powered programs that can simulate human conversation through text or voice interactions. They are used in customer service, marketing, and information retrieval.';
    } else if (lowerCaseMessage.includes('digital marketing')) {
        return 'Digital Marketing involves using digital channels such as social media, search engines, and email to promote products and services. It includes strategies such as SEO, content marketing, and pay-per-click advertising.';
    } else if (lowerCaseMessage.includes('e-commerce')) {
        return 'E-commerce, or electronic commerce, refers to buying and selling goods and services over the internet. It includes online retail, digital marketplaces, and electronic transactions.';
    } else if (lowerCaseMessage.includes('supply chain management')) {
        return 'Supply Chain Management involves overseeing the flow of goods and services from production to delivery. It includes processes such as procurement, logistics, and inventory management.';
    } else if (lowerCaseMessage.includes('project management')) {
        return 'Project Management involves planning, executing, and closing projects to achieve specific goals within a defined timeline and budget. It includes methodologies such as Agile, Scrum, and Waterfall.';
    } else if (lowerCaseMessage.includes('business intelligence')) {
        return 'Business Intelligence (BI) involves using data analysis tools and techniques to make informed business decisions. It includes processes such as data mining, reporting, and performance measurement.';
    } else if (lowerCaseMessage.includes('customer relationship management') || lowerCaseMessage.includes('crm')) {
        return 'Customer Relationship Management (CRM) involves managing interactions with current and potential customers. It includes strategies and technologies to improve customer service, sales, and marketing.';
    } else if (lowerCaseMessage.includes('enterprise resource planning') || lowerCaseMessage.includes('erp')) {
        return 'Enterprise Resource Planning (ERP) involves integrating and managing core business processes through a centralized system. It includes modules for finance, human resources, supply chain, and more.';
    } else if (lowerCaseMessage.includes('human resources')) {
        return 'Human Resources (HR) involves managing employee-related processes such as recruitment, training, performance evaluation, and compensation. It aims to improve employee satisfaction and organizational effectiveness.';
    } else if (lowerCaseMessage.includes('leadership')) {
        return 'Leadership involves guiding and motivating individuals or teams to achieve organizational goals. It includes skills such as communication, decision-making, and conflict resolution.';
    } else if (lowerCaseMessage.includes('entrepreneurship')) {
        return 'Entrepreneurship involves creating and managing new business ventures to achieve financial and personal goals. It includes activities such as identifying opportunities, securing funding, and developing business plans.';
    } else if (lowerCaseMessage.includes('innovation')) {
        return 'Innovation involves creating new ideas, products, or processes that provide value to customers or improve existing solutions. It includes activities such as research and development, prototyping, and market testing.';
    } else if (lowerCaseMessage.includes('design thinking')) {
        return 'Design Thinking is a problem-solving approach that involves understanding user needs, brainstorming ideas, prototyping solutions, and testing them. It is used in fields such as product design, software development, and business strategy.';
    } else if (lowerCaseMessage.includes('agile methodology')) {
        return 'Agile Methodology is an iterative approach to project management and software development that focuses on collaboration, flexibility, and customer feedback. It includes frameworks such as Scrum and Kanban.';
    } else if (lowerCaseMessage.includes('scrum')) {
        return 'Scrum is an Agile framework for managing and completing complex projects. It involves roles such as Scrum Master and Product Owner, and practices such as sprints, daily stand-ups, and retrospectives.';
    } else if (lowerCaseMessage.includes('kanban')) {
        return 'Kanban is an Agile framework that uses visual boards to manage work and improve efficiency. It involves practices such as limiting work in progress, visualizing workflow, and continuous improvement.';
    } else if (lowerCaseMessage.includes('lean methodology')) {
        return 'Lean Methodology involves maximizing value and minimizing waste in processes. It includes principles such as continuous improvement, respect for people, and delivering value to customers.';
    } else if (lowerCaseMessage.includes('six sigma')) {
        return 'Six Sigma is a data-driven methodology for improving processes and reducing defects. It involves tools and techniques such as DMAIC (Define, Measure, Analyze, Improve, Control) and statistical analysis.';
    } else if (lowerCaseMessage.includes('quality management')) {
        return 'Quality Management involves ensuring that products and services meet customer expectations and regulatory requirements. It includes practices such as quality control, quality assurance, and continuous improvement.';
    } else if (lowerCaseMessage.includes('risk management')) {
        return 'Risk Management involves identifying, assessing, and mitigating risks that could impact an organization\'s objectives. It includes processes such as risk assessment, risk mitigation, and risk monitoring.';
    } else if (lowerCaseMessage.includes('change management')) {
        return 'Change Management involves guiding individuals and organizations through transitions to achieve desired outcomes. It includes activities such as communication, training, and stakeholder engagement.';
    } else if (lowerCaseMessage.includes('strategic planning')) {
        return 'Strategic Planning involves defining an organization\'s direction and making decisions on allocating resources to achieve its goals. It includes activities such as SWOT analysis, goal setting, and action planning.';
    } else if (lowerCaseMessage.includes('financial management')) {
        return 'Financial Management involves managing an organization\'s financial resources to achieve its objectives. It includes activities such as budgeting, financial analysis, and investment management.';
    } else if (lowerCaseMessage.includes('marketing strategy')) {
        return 'Marketing Strategy involves planning and executing activities to promote products and services to target customers. It includes activities such as market research, branding, and advertising.';
    } else if (lowerCaseMessage.includes('sales strategy')) {
        return 'Sales Strategy involves planning and executing activities to achieve sales goals and increase revenue. It includes activities such as lead generation, sales forecasting, and customer relationship management.';
    } else if (lowerCaseMessage.includes('customer service')) {
        return 'Customer Service involves providing support and assistance to customers before, during, and after a purchase. It includes activities such as handling inquiries, resolving issues, and ensuring customer satisfaction.';
    } else if (lowerCaseMessage.includes('supply chain logistics')) {
        return 'Supply Chain Logistics involves managing the flow of goods and services from suppliers to customers. It includes activities such as transportation, warehousing, and inventory management.';
    } else if (lowerCaseMessage.includes('procurement')) {
        return 'Procurement involves acquiring goods and services from external suppliers to meet an organization\'s needs. It includes activities such as supplier selection, contract negotiation, and purchase order management.';
    } else if (lowerCaseMessage.includes('inventory management')) {
        return 'Inventory Management involves overseeing the storage, ordering, and tracking of inventory to ensure optimal stock levels. It includes practices such as demand forecasting, stock replenishment, and inventory control.';
    } else {
        return 'I am sorry, I do not understand. Can you please rephrase or ask something else? Here are some example questions you can ask: "What is AI?", "Tell me about machine learning", "How does blockchain work?", "What is cloud computing?"';
    }
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    if (message) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('user-message');
        messageContainer.innerHTML = `<i class="fas fa-user"></i> ${message}`;
        document.getElementById('chatbot-messages').appendChild(messageContainer);
        input.value = '';

        // Get bot response
        const botResponse = getBotResponse(message);
        const botMessageContainer = document.createElement('div');
        botMessageContainer.classList.add('bot-message');
        botMessageContainer.innerHTML = `<i class="fas fa-robot"></i> ${botResponse}`;
        document.getElementById('chatbot-messages').appendChild(botMessageContainer);
    }
}
