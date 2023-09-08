import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import PropTypes from 'prop-types';

function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.object,
};

export default ThemeProvider;
