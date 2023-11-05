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

  return (
    <table className="tw-table tw-table-zebra-zebra">
      <thead>
        <tr>
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
