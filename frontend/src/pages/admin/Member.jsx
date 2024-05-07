import React from "react";
const MemberList = React.lazy(() =>
  import("../../components/admin/Memberlist")
);
export const Member = () => {
  return (
    <>
      <MemberList />
    </>
  );
};
