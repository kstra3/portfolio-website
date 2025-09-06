import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Database, 
  Globe, 
  Cpu, 
  Zap,
  Python,
  Java,
  GitBranch,
  BarChart3,
  Layers,
  Terminal
} from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'AI/ML', icon: Brain, level: 95, color: 'from-purple-400 to-pink-400' },
    { name: 'Python', icon: Python, level: 90, color: 'from-blue-400 to-cyan-400' },
    { name: 'Machine Learning', icon: Cpu, level: 88, color: 'from-green-400 to-emerald-400' },
    { name: 'Data Science', icon: BarChart3, level: 85, color: 'from-orange-400 to-red-400' },
    { name: 'Web Development', icon: Globe, level: 80, color: 'from-indigo-400 to-purple-400' },
    { name: 'Java', icon: Java, level: 75, color: 'from-yellow-400 to-orange-400' },
    { name: 'C/C++', icon: Code, level: 70, color: 'from-gray-400 to-blue-400' },
    { name: 'Database', icon: Database, level: 65, color: 'from-teal-400 to-cyan-400' },
  ];

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'PyTorch', category: 'AI/ML' },
    { name: 'Pandas', category: 'Data Science' },
    { name: 'Scikit-learn', category: 'AI/ML' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Git', category: 'Version Control' },
    { name: 'Linux', category: 'OS' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Passionate AI Developer & Creative Problem Solver
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a dedicated AI enthusiast with a passion for building intelligent solutions 
                that make a real difference. With expertise spanning machine learning, data science, 
                and full-stack development, I love tackling complex problems and turning them into 
                elegant, scalable solutions.
              </p>
              <p>
                My journey in technology began with a fascination for how machines can learn and 
                adapt. Today, I specialize in developing AI-powered applications, from computer 
                vision systems to natural language processing tools, always with a focus on 
                practical implementation and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest research papers, 
                contributing to open-source projects, or experimenting with cutting-edge AI 
                frameworks. I believe in continuous learning and sharing knowledge with the 
                developer community.
              </p>
            </div>
          </motion.div>

          {/* Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white text-center">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-effect p-4 rounded-lg text-center group hover:bg-white/20 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-white font-medium mb-1 group-hover:text-primary-400 transition-colors duration-300">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {tech.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '3+', label: 'Years Experience' },
            { number: '10+', label: 'Technologies Mastered' },
            { number: '∞', label: 'Cups of Coffee' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;