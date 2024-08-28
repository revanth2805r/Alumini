import React from 'react';
import EmblaCarousel from './components/EmblaCarousel';
import { StickyNavbar } from './components/StickyNavbar';
import News from './components/News';
import Layout from './components/Layout';
import ProfilePage from './components/ProfilePage';
import JobPost from './components/JobPost';
import Popup from './components/Popup';

const posts = [
  {
    title: 'Can coffee make you a better developer?',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et perferendis eaque, exercitationem asjidhuas asjidhnkjasd nmasbuoidbnaskjd nasnduojas dn,mas ojd as,mdnoias dlmansodiua s,md kasljdn askm oj praesentium nihil.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaI9vFLJKXQ0nna8QBy1FBkXzagGq8h68lSA&s',
    author: 'Jonathan Reinink',
    date: 'Aug 18',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    title: 'The impact of AI on web development',
    excerpt: 'Discover how AI is revolutionizing the world of web development and what it means for developers.',
    imageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    author: 'Sarah Connor',
    date: 'Sep 12',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    title: '10 Tips for Effective Remote Work',
    excerpt: 'Explore strategies to enhance productivity and maintain work-life balance while working remotely.',
    imageUrl: 'https://img.freepik.com/free-vector/shiny-golden-number-one-star-label-design_1017-27875.jpg',
    author: 'Alex Johnson',
    date: 'Jul 22',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    title: 'Understanding JavaScript Closures',
    excerpt: 'A deep dive into JavaScript closures, how they work, and their practical uses in programming.',
    imageUrl: 'https://source.unsplash.com/featured/?javascript',
    author: 'Emily Davis',
    date: 'Jun 30',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    title: 'The Future of Web Design',
    excerpt: 'What trends and technologies are shaping the future of web design and how can designers stay ahead?',
    imageUrl: 'https://source.unsplash.com/featured/?web-design',
    author: 'Michael Brown',
    date: 'May 15',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    title: 'Mastering React Hooks',
    excerpt: 'Learn the ins and outs of React hooks and how to use them to create functional components.',
    imageUrl: 'https://source.unsplash.com/featured/?react',
    author: 'Sophia Miller',
    date: 'Apr 10',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    title: 'How to Optimize Your Web Performance',
    excerpt: 'Tips and techniques for improving the performance of your website and enhancing user experience.',
    imageUrl: 'https://source.unsplash.com/featured/?performance',
    author: 'Daniel Lee',
    date: 'Mar 5',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    title: 'Exploring New Front-End Technologies',
    excerpt: 'An overview of the latest technologies and tools in front-end development and how to leverage them.',
    author: 'Olivia Wilson',
    date: 'Feb 20',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    title: 'Introduction to Node.js',
    excerpt: 'Get started with Node.js and learn how it can help you build scalable server-side applications.',
    author: 'Ethan Harris',
    date: 'Jan 25',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    title: 'Building Mobile Apps with React Native',
    excerpt: 'Learn how to build cross-platform mobile applications using React Native and its powerful features.',
    author: 'Ava Clark',
    date: 'Dec 15',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    title: 'Cybersecurity Best Practices',
    excerpt: 'Understand essential cybersecurity practices to protect your data and maintain secure systems.',
    author: 'James Martinez',
    date: 'Nov 5',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <Layout>
      {/* <EmblaCarousel slides={posts} /> */}
      {/* <News/>  */}
      {/* <ProfilePage/> */}
      {/* <JobPost/> */}
      <Popup/>
      </Layout>
    </div>
  );
}

export default App;
