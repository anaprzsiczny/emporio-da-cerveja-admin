import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUserLogout } from '../Store/Ducks/Users/actions';

const useLogout = (token: string | null) => {

  const dispatch = useDispatch()

  useEffect(() => {

    if(token === null) {
      dispatch(loadUserLogout())
    }
  }, []);
}

export default useLogout