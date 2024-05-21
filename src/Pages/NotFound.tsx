import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Layout from '../components/layouts/Layout'
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  return <h1>Loading...</h1>
}
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <header style={{textAlign: "center"}} className="container">
          <h1 className="mb-5">Page Not Found</h1>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className="btn btn-tertiary"
            style={{textDecoration: "underline"}}
          >
            Go Back
          </button>
        </header>

      </Suspense>
    </Layout>
  )
}

export default NotFound;

