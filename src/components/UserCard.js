import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} alt={user.name} />

      <h3>{user.name}</h3>

      <p>{user.role}</p>

      <Link to={`/users/${user.id}`} className="btn">
        View Profile
      </Link>
    </div>
  );
}

export default UserCard;