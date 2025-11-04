import Header from "../Common/Header"

const UserLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <h1>heading</h1>
      <p>paragraph here</p>

      <h1 class="text-primary text-3xl">Hello Tailwind v4</h1>
      <button class="bg-accent text-white px-4 py-2 rounded">Click Me</button>

      {/* Footer */}
    </>
  );
}

export default UserLayout