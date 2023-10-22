import React from 'react';
import "../components/App.css";

// display error message if user attempts to reach nonexistent endpoint
function ErrorPage() {
    return <h1 className="error-bar">404 Error: Page Not Found!</h1>;
}

export default ErrorPage;