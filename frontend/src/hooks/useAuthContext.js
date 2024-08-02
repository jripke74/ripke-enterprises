import { AuthContext } from '../context/AuthContext.jsx';
import { useContext } from 'react';

export const useWorkoutsContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error(
      'useWorkoutsContext must be used inside an AuthContextProvider'
    );
  }

  return context;
};
