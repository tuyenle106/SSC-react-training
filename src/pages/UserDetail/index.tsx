import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

// Define types for User and Address
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user details:", err);
        setError("Failed to fetch user details. Please try again later!");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-gray-500 flex justify-center items-center h-100 text-6xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 md:px-16 py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <Link to="/users">
          <div className="text-blue-600 hover:underline text-sm mb-4 inline-block">
            ← Back to Users List
          </div>
        </Link>

        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : user ? (
          <>
            <h1 className="text-3xl font-bold text-blue-800 mb-4">
              {user.name}
            </h1>
            <p className="text-gray-700 text-base mb-4">
              Username: {user.username}
            </p>
            <p className="text-gray-700 text-base mb-4">Email: {user.email}</p>

            <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-2">
              Address
            </h2>
            <p className="text-gray-700 text-base mb-2">
              {user.address.suite}, {user.address.street}, {user.address.city},{" "}
              {user.address.zipcode}
            </p>
            <p className="text-gray-500 text-sm">
              Latitude: {user.address.geo.lat}, Longitude:{" "}
              {user.address.geo.lng}
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-2">
              Contact
            </h2>
            <p className="text-gray-700 text-base mb-4">Phone: {user.phone}</p>
            <p className="text-gray-700 text-base mb-4">
              Website:{" "}
              <a
                href={`http://${user.website}`}
                className="text-blue-600 hover:underline"
              >
                {user.website}
              </a>
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-2">
              Company
            </h2>
            <p className="text-gray-700 text-base mb-2">
              Company Name: {user.company.name}
            </p>
            <p className="text-gray-700 text-base mb-2">
              Catchphrase: {user.company.catchPhrase}
            </p>
            <p className="text-gray-700 text-base mb-4">
              BS: {user.company.bs}
            </p>
          </>
        ) : (
          <p className="text-gray-500">User not found with this ID.</p>
        )}
      </div>
    </div>
  );
};

export default UserDetailPage;
