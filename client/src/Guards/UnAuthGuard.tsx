import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type UnAuthGuardProps = {
  children: React.ReactNode;
}

const UnAuthGuard = ({ children }: UnAuthGuardProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      navigate('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default UnAuthGuard;
