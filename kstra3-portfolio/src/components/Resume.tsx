import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award,
  Calendar,
  MapPin,
  ExternalLink
} from 'lucide-react';

const Resume: React.FC = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Senior AI Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading AI initiatives and developing machine learning solutions for enterprise clients. Specialized in computer vision and natural language processing.',
      achievements: [
        'Developed AI models that improved client efficiency by 40%',
        'Led a team of 5 developers on multiple ML projects',
        'Implemented automated testing pipelines reducing deployment time by 60%'
      ],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 2,
      type: 'work',
      title: 'Machine Learning Engineer',
      company: 'DataFlow Inc',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Built and deployed machine learning models for data analytics and business intelligence applications.',
      achievements: [
        'Created predictive models with 95% accuracy for customer behavior',
        'Reduced data processing time by 50% through optimization',
        'Mentored junior developers and conducted technical workshops'
      ],
      skills: ['Python', 'Scikit-learn', 'Pandas', 'PostgreSQL', 'Redis', 'FastAPI']
    },
    {
      id: 3,
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'WebCraft Studios',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Developed full-stack web applications using modern technologies and best practices.',
      achievements: [
        'Built responsive web applications serving 10K+ users',
        'Implemented CI/CD pipelines improving deployment efficiency',
        'Collaborated with design team to create intuitive user interfaces'
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'CSS3']
    }
  ];

  const education = [
    {
      id: 1,
      type: 'education',
      title: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2017 - 2019',
      description: 'Specialized in Artificial Intelligence and Machine Learning with focus on deep learning applications.',
      achievements: [
        'Graduated Magna Cum Laude (GPA: 3.8/4.0)',
        'Published 3 research papers in top-tier conferences',
        'Thesis: "Advanced Neural Networks for Computer Vision"'
      ],
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Research', 'Statistics']
    },
    {
      id: 2,
      type: 'education',
      title: 'Bachelor of Science in Software Engineering',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2013 - 2017',
      description: 'Comprehensive study of software engineering principles, algorithms, and data structures.',
      achievements: [
        'Dean\'s List for 6 consecutive semesters',
        'President of Computer Science Student Association',
        'Completed 15+ software projects including capstone'
      ],
      skills: ['Software Engineering', 'Algorithms', 'Data Structures', 'Java', 'C++', 'Leadership']
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Machine Learning - Specialty',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-ML-2023-001'
    },
    {
      title: 'Google Cloud Professional Machine Learning Engineer',
      issuer: 'Google Cloud',
      date: '2022',
      credential: 'GCP-ML-2022-002'
    },
    {
      title: 'Certified Data Scientist (CDS)',
      issuer: 'Data Science Council of America',
      date: '2021',
      credential: 'DASCA-CDS-2021-003'
    }
  ];

  const TimelineItem = ({ item, index, isLast }: { item: any, index: number, isLast: boolean }) => (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex gap-6 group"
    >
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-4 border-dark-700 bg-gradient-to-r from-primary-500 to-accent-500 z-10 ${
          item.type === 'work' ? 'bg-primary-500' : 'bg-accent-500'
        }`}></div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-primary-500 to-accent-500 mt-4"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:scale-[1.02]">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-primary-400 font-medium">
                {item.type === 'work' ? (
                  <Briefcase className="w-4 h-4" />
                ) : (
                  <GraduationCap className="w-4 h-4" />
                )}
                {item.company || item.institution}
              </div>
            </div>
            <div className="text-right text-sm text-gray-400">
              <div className="flex items-center gap-1 mb-1">
                <Calendar className="w-3 h-3" />
                {item.period}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {item.location}
              </div>
            </div>
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {item.description}
          </p>

          {item.achievements && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-accent-400" />
                Key Achievements
              </h4>
              <ul className="space-y-1">
                {item.achievements.map((achievement: string, idx: number) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 flex-shrink-0"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill: string) => (
              <span
                key={skill}
                className="px-3 py-1 bg-dark-700 text-gray-300 text-xs rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="resume" className="py-20 px-4 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            Resume & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey in AI development and software engineering
          </p>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.button
            className="btn-primary inline-flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"
            >
              <Briefcase className="w-6 h-6 text-primary-400" />
              Work Experience
            </motion.h3>
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={exp.id}
                  item={exp}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mb-8 mt-16 flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6 text-accent-400" />
              Education
            </motion.h3>
            <div className="space-y-0">
              {education.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  item={edu}
                  index={index}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Certifications Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-accent-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-effect p-4 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors duration-300 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-primary-400 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-400">{cert.date} • {cert.credential}</p>
                  </motion.div>
                ))}
              </div>

              {/* Skills Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Core Competencies</h3>
                <div className="space-y-3">
                  {[
                    { skill: 'Machine Learning', level: 95 },
                    { skill: 'Python Development', level: 90 },
                    { skill: 'Deep Learning', level: 88 },
                    { skill: 'Data Science', level: 85 },
                    { skill: 'Web Development', level: 80 },
                    { skill: 'Cloud Computing', level: 75 }
                  ].map((item, index) => (
                    <div key={item.skill}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{item.skill}</span>
                        <span className="text-gray-400">{item.level}%</span>
                      </div>
                      <div className="w-full bg-dark-700 rounded-full h-2">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;