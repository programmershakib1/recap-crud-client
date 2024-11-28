import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  console.log(loadedUser);

  const handleUserUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user update successfully");
        }
      });
  };
  return (
    <div>
      <h2>Update info of {loadedUser.name}</h2>
      <form onSubmit={handleUserUpdate}>
        <input type="text" name="name" defaultValue={loadedUser?.name} />
        <br />
        <input type="email" name="email" defaultValue={loadedUser?.email} />
        <br />
        <input type="submit" name="Update" />
      </form>
    </div>
  );
};

export default Update;
