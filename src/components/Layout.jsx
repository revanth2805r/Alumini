import React from 'react';
import { StickyNavbar } from './StickyNavbar'; // Adjust the path as needed

const Layout = ({ children }) => {
  return (
    <div>
      <StickyNavbar />
      <main className="pt-[40px]"> {/* Ensure the content is pushed down by the navbar height */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
