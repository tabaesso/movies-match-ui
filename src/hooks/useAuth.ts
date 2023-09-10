import { useContext } from 'react';
import { AuthContext, AuthContextData } from '../providers/auth';

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default useAuth;