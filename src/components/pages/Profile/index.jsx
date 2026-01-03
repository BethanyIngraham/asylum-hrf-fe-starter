import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from 'react-router-dom';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {
  // TODO: Replace these with functionality from Auth0
 const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect: login, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    user, // User profile
  } = useAuth0();

  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  return isAuthenticated ? (
    <>
    <div className="grid place-items-center h-screen">
        <div className="flex justify-center max-w-sm 
        bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col content-center text-center space-y-4">
            <img 
            className="mx-auto rounded-full w-24 h-24 object-cover" 
            src={user.picture} 
            alt={user.name} 
            />
            <div className="user-profile-info">
              <h2 className="text-xl font-semibold text-black-900">
                {user.name}
              </h2>
              <p className="text-sm text-black-500 truncate">
                {user.email}
              </p>
            </div>
            <button className="bg-blue-500 px-4 py-2 rounded
            text-white font-bold" 
            onClick={auth0Logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      {error && <p>Error: {error.message}</p>}

      <button onClick={signup}>Signup</button>

      <button onClick={login}>Login</button>
    </>
  );
};

export default Profile;
