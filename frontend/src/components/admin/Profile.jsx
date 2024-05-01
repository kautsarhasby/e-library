import PropTypes from "prop-types";

export const Profile = (props) => {
  const { username } = props;
  return (
    <main className="flex gap-2  items-center">
      <div className="rounded-full w-20 h-20 bg-slate-300"></div>
      <div>
        <span className="font-semibold text-white">{username}</span>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-green-400 w-3 h-3"></div>
          <span className="text-green-400 font-semibold">Online</span>
        </div>
      </div>
    </main>
  );
};

Profile.propTypes = {
  username: PropTypes.any,
};
