import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const ProfilePage = () => {
  const profileData = {
    name: "Jane Doe",
    role: "Owner at Her Company Inc.",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt.",
    status: "Active",
    memberSince: "Nov 07, 2016",
    similarProfiles: [
      { name: "Kojstantin", imageUrl: "https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg" },
      { name: "James", imageUrl: "https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4" },
      { name: "Natie", imageUrl: "https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" },
      { name: "Casey", imageUrl: "https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png" }
    ],
    about: {
      firstName: "Jane",
      lastName: "Doe",
      gender: "Female",
      contactNo: "+11 998001001",
      currentAddress: "Beech Creek, PA, Pennsylvania",
      permanentAddress: "Arlington Heights, IL, Illinois",
      email: "jane@example.com",
      birthday: "Feb 06, 1998"
    },
    experience: [
      { role: "Owner at Her Company Inc.", period: "March 2020 - Now" },
      { role: "Previous Role", period: "March 2019 - Feb 2020" },
      { role: "Another Role", period: "Jan 2018 - Dec 2018" }
    ],
    education: [
      { degree: "Masters Degree in Oxford", period: "March 2020 - Now" },
      { degree: "Bachelors Degree in LPU", period: "March 2015 - Feb 2019" }
    ]
  };

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
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt="Profile"
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{profileData.name}</h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">{profileData.role}</h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{profileData.bio}</p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">{profileData.status}</span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">{profileData.memberSince}</span>
                </li>
              </ul>
            </div>
            {/* End of profile card */}
            <div className="my-4"></div>
            {/* Similar Profiles card */}
            <div className="bg-white p-3 hover:shadow">
              <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span className="text-green-500">
                  <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <span>Similar Profiles</span>
              </div>
              <div className="grid grid-cols-3">
                {profileData.similarProfiles.map((profile, index) => (
                  <div className="text-center my-2" key={index}>
                    <img className="h-16 w-16 rounded-full mx-auto" src={profile.imageUrl} alt={profile.name} />
                    <a href="#" className="text-main-color">{profile.name}</a>
                  </div>
                ))}
              </div>
            </div>
            {/* End of similar profiles card */}
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
                  {Object.entries(profileData.about).map(([key, value], index) => (
                    <div className="grid grid-cols-2" key={index}>
                      <div className="px-4 py-2 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</div>
                      <div className="px-4 py-2">
                        {key === 'email' ? (
                          <a className="text-blue-800" href={`mailto:${value}`}>{value}</a>
                        ) : value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Show Full Information
              </button>
            </div>
            {/* End of about section */}

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
                    {profileData.experience.map((exp, index) => (
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
                    {profileData.education.map((edu, index) => (
                      <li key={index} className="mb-3">
                        <div className="font-semibold">{edu.degree}</div>
                        <div className="text-sm text-gray-500">{edu.period}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* End of experience and education sections */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
