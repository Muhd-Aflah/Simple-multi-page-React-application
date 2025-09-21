import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="container">Loading user data...</p>;
  if (!user) return <p className="container" style={{ color: 'red' }}>User not found!</p>;

  return (
    <div className="container">
      <div className="avatar">{user.name.charAt(0)}</div>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <a href="/" className="btn btn-primary">Back Home</a>
    </div>
  );
}
