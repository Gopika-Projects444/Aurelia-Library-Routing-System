import { useParams, useNavigate } from "react-router-dom";
import { users } from "../data/users";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find(
    (u) => u.id === Number(id)
  );

  if (!user) {
    return (
      <div className="page">
        <h2>User Not Found</h2>

        <button
          className="btn"
          onClick={() => navigate("/users")}
        >
          Back to Users
        </button>
      </div>
    );
  }

  return (
    <div className="page">
      <img
        src={user.avatar}
        alt={user.name}
        className="profile-img"
      />

      <h1>{user.name}</h1>

      <p><strong>Email:</strong> {user.email}</p>

      <p><strong>Role:</strong> {user.role}</p>

      <p><strong>Bio:</strong> {user.bio}</p>
 <br></br> <br></br>
      <button
        className="btn"
        onClick={() => navigate("/users")}
      >
        Back to Users
      </button>
    </div>
  );
}

export default UserDetail;