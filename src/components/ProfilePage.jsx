import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getalumini/66cefe3fed570d4b4d700506'); // Correct the API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProfileData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profileData) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* Profile Card */}
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src={profileData.profilePicture || 'default_image_url.jpg'} // Provide a default image URL
                  alt="Profile"
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{`${profileData.firstName} ${profileData.lastName}`}</h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">{profileData.currentJob}</h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{profileData.Bio}</p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">{new Date(profileData.createdAt).toLocaleDateString()}</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full md:w-9/12 mx-2">
            {/* About Section */}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  {Object.entries(profileData).map(([key, value], index) => {
                    if (['profilePicture', 'password', '__v', 'createdAt', 'updatedAt'].includes(key)) {
                      return null; // Skip these fields
                    }
                    return (
                      <div className="grid grid-cols-2" key={index}>
                        <div className="px-4 py-2 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</div>
                        <div className="px-4 py-2">
                          {key === 'email' ? (
                            <a className="text-blue-800" href={`mailto:${value}`}>{value}</a>
                          ) : value.toString()}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Show Full Information
              </button>
            </div>

            <div className="my-4"></div>

            {/* Experience and Education Sections */}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              {/* Experience */}
              <div className="mb-5">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                  <span className="text-green-500">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 0h3m-2 0h-1m-4 0h-1m-4 0h-1m-2 0H4" />
                    </svg>
                  </span>
                  <span className="tracking-wide">Experience</span>
                </div>
                <div className="text-gray-700">
                  <ul>
                    {profileData.experience?.map((exp, index) => (
                      <li key={index} className="mb-3">
                        <div className="font-semibold">{exp.role}</div>
                        <div className="text-sm text-gray-500">{exp.period}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                  <span className="text-green-500">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v4.5a2.5 2.5 0 01-5 0V7a2.5 2.5 0 015 0zm0 0v10m0 0v-3.5m0 0v-1.5m-5 5h10" />
                    </svg>
                  </span>
                  <span className="tracking-wide">Education</span>
                </div>
                <div className="text-gray-700">
                  <ul>
                    {profileData.education?.map((edu, index) => (
                      <li key={index} className="mb-3">
                        <div className="font-semibold">{edu.institution}</div>
                        <div className="text-sm text-gray-500">{edu.period}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* End of Experience and Education Section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
