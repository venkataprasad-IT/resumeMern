import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResumeBuilder = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:5000/api/resumes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setResume(res.data);
      } catch (err) {
        setError('Failed to load resume. Please try again.');
      }
    };

    fetchResume();
  }, [id]);

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  if (!resume) {
    return <div className="p-4">Loading your resume...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{resume.title}</h1>
      {/* Add form inputs or display resume data here */}
      <p>Edit your resume here...</p>
    </div>
  );
};

export default ResumeBuilder;
