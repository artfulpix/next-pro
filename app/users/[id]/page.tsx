import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
