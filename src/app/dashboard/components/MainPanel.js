import MyProfile from "./MyProfile";

export default function MainPanel({ user }) {
  return (
    <div className="flex items-center justify-center w-full">
      <MyProfile user={user} />
    </div>
  );
}



