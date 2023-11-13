import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthGuardProps = {
  children: React.ReactNode
}
const AuthGuard = ({ children }: AuthGuardProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
      navigate('/auth/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default AuthGuard;
