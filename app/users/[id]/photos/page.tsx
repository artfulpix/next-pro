import React from "react";

interface Props {
  params: { id: number };
}

const UserPhoto = ({ params: { id } }: Props) => {
  return <div>UserPhoto {id}</div>;
};

export default UserPhoto;
