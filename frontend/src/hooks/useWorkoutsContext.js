import { WorkoutContext } from '../context/WorkoutContect.jsx';
import { useContext } from 'react';

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
};
