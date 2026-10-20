
export const courses = [
  {
    id: 1,
    title: 'Complete React Developer Course',
    instructor: 'John Smith',
    category: 'Web Development',
    rating: 4.8,
    students: 2450,
    price: 499,
    originalPrice: 1999,
    duration: '32 hours',
    level: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
    badge: 'Bestseller',
  },
  {
    id: 2,
    title: 'UI/UX Design Masterclass',
    instructor: 'Sarah Johnson',
    category: 'Design',
    rating: 4.7,
    students: 1820,
    price: 399,
    originalPrice: 1499,
    duration: '24 hours',
    level: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
    badge: 'Popular',
  },
  {
    id: 3,
    title: 'Python for Data Science',
    instructor: 'Michael Brown',
    category: 'Data Science',
    rating: 4.9,
    students: 3200,
    price: 599,
    originalPrice: 2499,
    duration: '40 hours',
    level: 'Intermediate',
    image:
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600',
    badge: 'Bestseller',
  },
  {
    id: 4,
    title: 'Digital Marketing Complete Guide',
    instructor: 'Emily Davis',
    category: 'Marketing',
    rating: 4.6,
    students: 1450,
    price: 349,
    originalPrice: 1299,
    duration: '18 hours',
    level: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    badge: 'New',
  },
  
{
  id: 1,
  title: 'Complete React Developer Course',
  instructor: 'John Smith',
  category: 'Web Development',
  rating: 4.8,
  students: 2450,
  price: 499,
  originalPrice: 1999,
  duration: '32 hours',
  level: 'Beginner',
  image:
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
  badge: 'Bestseller',

  subtitle: 'Master React and build modern web applications',
  description:
    'Learn React from the fundamentals to advanced concepts. Build interactive user interfaces, manage state, work with APIs, and develop real-world applications.',
  lectures: 48,
  language: 'English',
  lastUpdated: 'September 2026',

  instructorInfo: {
    name: 'John Smith',
    title: 'Senior React Developer',
    bio: 'Experienced frontend developer passionate about teaching modern web technologies.',
    students: 12000,
    courses: 8,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
  },

  outcomes: [
    'Understand React components and JSX',
    'Build applications using React Hooks',
    'Manage application state',
    'Integrate REST APIs',
    'Build and deploy a complete React project',
  ],

  requirements: [
    'Basic knowledge of HTML and CSS',
    'Basic JavaScript knowledge',
    'A computer with internet access',
  ],

  curriculum: [
    {
      id: 1,
      title: 'Getting Started with React',
      lectures: [
        { id: 1, title: 'Introduction to React', duration: '12:30', preview: true },
        { id: 2, title: 'Setting up the development environment', duration: '18:45', preview: true },
        { id: 3, title: 'Understanding JSX', duration: '20:15', preview: false },
      ],
    },
    {
      id: 2,
      title: 'Components and Props',
      lectures: [
        { id: 4, title: 'Creating React components', duration: '16:20', preview: false },
        { id: 5, title: 'Working with props', duration: '22:10', preview: false },
        { id: 6, title: 'Component composition', duration: '19:40', preview: false },
      ],
    },
    {
      id: 3,
      title: 'React Hooks and State',
      lectures: [
        { id: 7, title: 'Introduction to useState', duration: '25:00', preview: false },
        { id: 8, title: 'Understanding useEffect', duration: '28:30', preview: false },
        { id: 9, title: 'Building custom hooks', duration: '32:15', preview: false },
      ],
    },
  ],
}
];

export const categories = [
  { name: 'Web Development', icon: 'Code', courses: 120 },
  { name: 'UI/UX Design', icon: 'Palette', courses: 85 },
  { name: 'Data Science', icon: 'Database', courses: 65 },
  { name: 'Digital Marketing', icon: 'Megaphone', courses: 50 },
];