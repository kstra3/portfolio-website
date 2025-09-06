import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Brain, 
  Database, 
  Globe, 
  Zap,
  Eye,
  BarChart3
} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Sentiment Analysis Platform',
      description: 'A comprehensive sentiment analysis tool using advanced NLP models to analyze social media data and customer feedback in real-time.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      category: 'AI/ML',
      icon: Brain,
      github: 'https://github.com/kstra3/sentiment-analysis',
      demo: 'https://sentiment-demo.kstra3.dev',
      featured: true
    },
    {
      id: 2,
      title: 'Smart Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with machine learning insights and predictive analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python', 'Pandas', 'FastAPI'],
      category: 'Data Science',
      icon: BarChart3,
      github: 'https://github.com/kstra3/data-dashboard',
      demo: 'https://dashboard.kstra3.dev',
      featured: true
    },
    {
      id: 3,
      title: 'Neural Network Image Classifier',
      description: 'Deep learning model for image classification with 95% accuracy, built with PyTorch and deployed as a web service.',
      image: '/api/placeholder/600/400',
      technologies: ['PyTorch', 'Python', 'Flask', 'Docker', 'AWS'],
      category: 'Computer Vision',
      icon: Eye,
      github: 'https://github.com/kstra3/image-classifier',
      demo: 'https://classifier.kstra3.dev',
      featured: false
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: 'Modern chat application with real-time messaging, file sharing, and AI-powered message suggestions.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'PostgreSQL'],
      category: 'Web Development',
      icon: Globe,
      github: 'https://github.com/kstra3/chat-app',
      demo: 'https://chat.kstra3.dev',
      featured: false
    },
    {
      id: 5,
      title: 'Automated Trading Bot',
      description: 'AI-powered trading bot that uses machine learning to analyze market trends and execute trades automatically.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Binance API', 'Docker'],
      category: 'FinTech',
      icon: Zap,
      github: 'https://github.com/kstra3/trading-bot',
      demo: null,
      featured: false
    },
    {
      id: 6,
      title: 'Blockchain Analytics Tool',
      description: 'Comprehensive tool for analyzing blockchain transactions and detecting suspicious activities using ML algorithms.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Web3.py', 'React', 'GraphQL', 'Redis'],
      category: 'Blockchain',
      icon: Database,
      github: 'https://github.com/kstra3/blockchain-analytics',
      demo: 'https://analytics.kstra3.dev',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in AI, machine learning, 
            and full-stack development.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-dark-800 rounded-xl overflow-hidden card-hover ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-primary-400 font-medium">{project.category}</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">2024</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-700 text-gray-300 text-xs rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300 group/link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 group/link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/kstra3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;