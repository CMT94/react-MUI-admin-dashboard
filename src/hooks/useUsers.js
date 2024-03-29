import React from "react";

import { mockDataTeam } from "../data/mockData";

export const useTeamUsers = () => {
  const [users, setUsers] = React.useState([]);

  const manageUsers = React.useMemo(
    () => ({
      addNewUser: (newUser) => setUsers((prevState) => [...prevState, newUser]),
      removeUser: (userId) => {
        const slicedState = [...users];
        const updatedState = slicedState.filter((user) => user.id !== userId);
        setUsers(updatedState);
      },
    }),
    [users]
  );

  React.useEffect(() => {
    setUsers(mockDataTeam);
  }, []);

  return [users, manageUsers];
};
