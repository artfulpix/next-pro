// "use client";

// import React, { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";

import { sort } from "fast-sort";

import { User, UserSortBy } from "./page";
import Link from "next/link";

interface Props {
  sortBy: UserSortBy;
  users: User[];
}

const UserTable = ({ sortBy, users }: Props) => {
  const sortedUser = sort(users).asc((u) =>
    sortBy === "name"
      ? u.name
      : sortBy === "email"
      ? u.email
      : sortBy === "id"
      ? u.id
      : u
  );
  // const [sortedBy, setSortBy] = useState<UserSortBy | "">(sortBy);
  // const [sortedUsers, setSortedUsers] = useState<User[]>([]);

  // console.log(sortedBy);

  // useEffect(() => {
  //   setSortedUsers(() =>
  //     sort(users).asc((u) =>
  //       sortedBy === "name"
  //         ? u.name
  //         : sortedBy === "email"
  //         ? u.email
  //         : sortedBy === "id"
  //         ? u.id
  //         : u
  //     )
  //   );
  // }, [sortedBy]);

  // useEffect(() => {
  //   sortedBy === "name"
  //     ? setSortedUsers(() => sort(users).asc((u) => u.name))
  //     : sortedBy === "email"
  //     ? setSortedUsers(() => sort(users).asc((u) => u.email))
  //     : sortedBy === "id"
  //     ? setSortedUsers(() => sort(users).asc((u) => u.id))
  //     : setSortedUsers(users);
  // }, [sortedBy]);

  // const setSort = (sortBy: UserSortBy) =>
  //   sortBy !== sortedBy ? setSortBy(sortBy) : setSortBy("");

  return (
    <table className="tw-table tw-table-zebra-zebra">
      <thead>
        <tr>
          {/* <th onClick={() => setSort("id")}>Id</th>
          <th onClick={() => setSort("name")}>Name</th>
          <th onClick={() => setSort("email")}>Email</th> */}

          <th>
            <Link href="/users?sortBy=id">Id</Link>{" "}
          </th>
          <th>
            <Link href="/users?sortBy=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortBy=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUser.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
