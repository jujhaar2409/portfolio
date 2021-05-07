import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function useSelected(href) {
  const [selected, setSelected] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const loc = router.pathname;
    if ((loc == '/' && href === 'home') || loc === `/${href}`) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, []);

  return selected;
}

export default useSelected;
