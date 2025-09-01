import { motion } from 'framer-motion';
import { 
  Code, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Globe, 
  Award 
} from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter 
} from './ui/card';
import { Badge } from './ui/badge';

const courses = [
  {
    title: 'Web Development Bootcamp',
    description: 'Master HTML, CSS, JavaScript, React, and Node.js in this comprehensive bootcamp for beginners.',
    icon: <Code size={24} />,
    level: 'Beginner',
    duration: '12 weeks',
    students: '2,546'
  },
  {
    title: 'Advanced JavaScript',
    description: 'Deep dive into JavaScript concepts like closures, prototypes, async programming, and modern ES6+ features.',
    icon: <BookOpen size={24} />,
    level: 'Intermediate',
    duration: '8 weeks',
    students: '1,872'
  },
  {
    title: 'React & Redux Masterclass',
    description: 'Build complex front-end applications with React, Redux, and modern state management techniques.',
    icon: <Globe size={24} />,
    level: 'Intermediate',
    duration: '10 weeks',
    students: '1,943'
  },
  {
    title: 'Full Stack Development',
    description: 'Learn to build complete applications from frontend to backend using the MERN stack.',
    icon: <GraduationCap size={24} />,
    level: 'Advanced',
    duration: '16 weeks',
    students: '1,245'
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Master the core computer science concepts essential for technical interviews and efficient coding.',
    icon: <Award size={24} />,
    level: 'Intermediate',
    duration: '10 weeks',
    students: '2,103'
  },
  {
    title: 'Collaborative Coding',
    description: 'Learn to work effectively in teams using Git, GitHub, code reviews, and agile development practices.',
    icon: <Users size={24} />,
    level: 'All Levels',
    duration: '6 weeks',
    students: '1,587'
  }
];

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-3 py-1 text-sm text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400">
            Expert-Led Curriculum
          </Badge>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            Popular Coding Courses
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 mx-auto"
          >
            Learn from industry experts and build projects that will help you stand out in the job market
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg w-fit text-indigo-600 dark:text-indigo-400">
                      {course.icon}
                    </div>
                    <Badge className="bg-indigo-100 hover:bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/30">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                    {course.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-gray-500 dark:text-gray-400 border-t pt-4">
                  <span>{course.duration}</span>
                  <span>{course.students} students</span>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
          >
            Browse All Courses
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Features;