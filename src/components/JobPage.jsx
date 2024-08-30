import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import Pop from './Pop';

const JobGrid = () => {
  const [jobs, setJobs] = useState([]); // Initialize state to store job data
  const [selectedJob, setSelectedJob] = useState(null); // Initialize state to manage the selected job

  // Fetch job data from the API when the component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/jobgets/66cefe3fed570d4b4d700506');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJobs(data); // Update state with fetched job data
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJobs();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to set the selected job for details view
  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  // Function to close the pop-up
  const handleClosePop = () => {
    setSelectedJob(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            jobTitle={job.title}
            company={job.company}
            email={job.email || 'Not Provided'}
            location={job.location}
            postedBy={job.postedBy}
            onViewDetails={() => handleViewDetails(job)}
          />
        ))}
      </div>

      {selectedJob && <Pop job={selectedJob} onClose={handleClosePop} />}
    </div>
  );
};

export default JobGrid;
