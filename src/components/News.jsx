import React, { useEffect, useState } from 'react';

function News() {
  const [newsData, setNewsData] = useState({
    headlines: [],
    linkUrls: []
  });

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3000/api/news-feed')
      .then(response => response.json())
      .then(data => {
        // Randomly select 20 news items
        const randomIndices = Array.from({ length: data.headlines.length }, (_, i) => i)
          .sort(() => 0.5 - Math.random())
          .slice(0, 20);

        setNewsData({
          headlines: randomIndices.map(index => data.headlines[index]),
          linkUrls: randomIndices.map(index => data.linkUrls[index])
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="w-full max-w-screen-lg p-5 sm:p-10 md:p-16 ">
      <div className="flex flex-col items-start space-y-6">
        <h2 className='text-3xl font-bold'>Trending</h2>
        {newsData.headlines.map((headline, index) => (
          <div key={index} className="w-80 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-500 ease-in-out">
            <a href={newsData.linkUrls[index]} className="flex flex-col">
              <div className="flex items-center mb-3">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white bg-red-500 mr-2 capitalize">
                  News
                </span>
              </div>
              <p className="text-xl font-semibold text-gray-900">{headline}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;