import UserCard from "../components/UserCard";
import { users } from "../data/users";

function Users() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-5">
         <br></br>
<br></br>
      <h1 className="text-4xl font-bold text-blue-800 mb-6">
        <center>Authors</center>
      </h1>
 <br></br>
<br></br>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}

export default Users;