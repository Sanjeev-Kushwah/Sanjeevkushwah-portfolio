export const profile = {
  name: 'Sanjeev Kushwah',
  role: 'Backend Developer',
  location: 'Pune, Maharashtra, India',
  phone: '+91 8698996728',
  email: 'kushwahsanjeev487@gmail.com',
  linkedin: 'https://linkedin.com/in/sanjeev-kushwah',
  github: 'https://github.com/Sanjeev-Kushwah',
  summary:
    'Backend Developer with hands-on experience building Java and Spring Boot applications, RESTful APIs, and relational database integrations. Skilled in Java 8+, Spring Data JPA, Hibernate, MySQL, and API testing with Postman, with practical experience in CRUD application design, input validation, exception handling, and debugging production issues. Gained backend development experience at Bajaj General Insurance, collaborating with technical teams to troubleshoot, test, and deliver reliable backend systems. Seeking a Backend Developer role to apply strong Java fundamentals and problem-solving skills to build scalable, maintainable software.',
}

export const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Java', 'Java 8+', 'Object-Oriented Programming (OOP)', 'Collections Framework', 'Exception Handling', 'Stream API', 'Lambda Expressions'],
  },
  {
    title: 'Backend Development',
    items: ['Spring Boot', 'Spring Framework', 'RESTful APIs', 'Spring Data JPA', 'Hibernate', 'CRUD Operations', 'Microservices Fundamentals'],
  },
  {
    title: 'Database',
    items: ['SQL', 'MySQL', 'JDBC', 'Database Design', 'Entity Relationships'],
  },
  {
    title: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'Maven', 'Postman', 'IntelliJ IDEA', 'Eclipse'],
  },
  {
    title: 'Development Practices',
    items: ['API Development', 'API Testing', 'Input Validation', 'Functional Testing', 'Debugging', 'Troubleshooting', 'Technical Documentation', 'Agile Collaboration'],
  },
]

export const experience = [
  {
    role: 'Java Development Intern',
    company: 'Bajaj General Insurance',
    location: 'Pune, Maharashtra',
    period: 'Jul 2025 – May 2026',
    points: [
      'Developed and maintained backend applications using Java, object-oriented design, and Spring Boot, delivering RESTful APIs and CRUD operations for core business workflows.',
      'Integrated applications with MySQL using Spring Data JPA and Hibernate to support reliable data persistence and management.',
      'Implemented input validation and application-level exception handling to improve API reliability and reduce runtime errors.',
      'Tested and validated REST API endpoints using Postman and performed functional testing across application workflows.',
      'Investigated and debugged application issues by analyzing error logs, application behavior, and underlying database data.',
      'Maintained version control and technical documentation using Git and GitHub throughout the development lifecycle.',
      'Collaborated with cross-functional technical teams to troubleshoot defects, validate fixes, and support release readiness.',
    ],
  },
]

export const projects = [
  {
    title: 'Insurance Management System',
    stack: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'Spring Data JPA', 'Hibernate', 'Maven', 'Postman', 'Git'],
    points: [
      'Built a backend system for managing insurance customers, policies, premiums, and claims across a multi-module workflow (Customer → Policy → Premium → Claim → Claim Processing).',
      'Developed RESTful APIs for customer registration, policy management, and claims processing, implementing CRUD operations with Spring Boot and Spring Data JPA.',
      'Designed MySQL database tables and entity relationships using JPA/Hibernate, and implemented input validation and exception handling for reliable API responses.',
      'Tested API endpoints with Postman to validate application workflows and database operations, and managed source code with Git/GitHub.',
    ],
  },
  {
    title: 'Support Ticket Management System',
    stack: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'Spring Data JPA', 'Hibernate', 'Postman', 'Git'],
    points: [
      'Developed a backend system for creating, assigning, tracking, and resolving technical support tickets.',
      'Built REST APIs for ticket creation, assignment, status updates, priority management, and resolution tracking using Spring Boot and Spring Data JPA/Hibernate.',
      'Designed MySQL database entities and relationships for users, tickets, comments, and resolutions.',
      'Implemented input validation and exception handling, and performed functional testing of ticket workflows using Postman.',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Programming & Software Applications',
    institution: 'Vikrant University, Gwalior',
    period: 'Jul 2025 – Jul 2027',
    grade: '8.5 CGPA',
    status: 'Currently Pursuing',
    details:
      'Focusing on Java, Data Structures & Algorithms, Backend Development, Spring Boot, REST APIs, and Relational Database Systems.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Applications',
    institution: 'Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal',
    period: 'Jul 2022 – Jul 2025',
    grade: '7.5 CGPA',
    status: 'Graduated',
    details:
      'Gained strong foundation in Computer Science, Object-Oriented Programming, Core Java, Database Management, and Web Technologies.',
  },
]

export const certifications = [
  {
    title: 'Alpha – Data Structures & Algorithms with Java',
    issuer: 'Apna College',
    credentialId: '692e610a5f6fe6375d0de2a9',
    detail: 'Complete Data Structures & Algorithms in Java (Arrays, Linked Lists, Trees, Graphs, Dynamic Programming, and Problem Solving)',
    image: '/certificate-dsa-java.jpg',
  },
]
