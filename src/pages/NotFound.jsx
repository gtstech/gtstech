import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ComingSoon from './ComingSoon';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/coming-soon', { replace: true });
  }, [navigate]);

  return <ComingSoon />;
}
