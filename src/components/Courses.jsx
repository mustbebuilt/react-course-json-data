import React, { useState, useEffect } from 'react';

const Courses = () => {
  const [courseData, setCourseData] = useState(null);
  const dataUrl = './data/coursedata.json';

  useEffect(() => {
    fetch(dataUrl)
      .then(response => response.json())
      .then(data => {
        setCourseData(data);
      });
  }, []); // Adding an empty dependency array to run useEffect only once when the component mounts

  return (
    <>
      <div className="container">
        <h2>Course Loader Demo</h2>

        {/* Display course data */}
        <div className="course-list">
          {courseData ? (
            courseData.map((course, index) => (
              <div key={index} className="course-item">
                <h3>{course.CourseTitle}</h3>
                <div>
                <p>{course.CourseSummary}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading courses...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Courses;
