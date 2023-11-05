import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const UserPhoto = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      User id {id} || Photo id {photoId}
    </div>
  );
};

export default UserPhoto;
