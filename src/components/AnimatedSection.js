import { useState } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import cn from 'classnames';

function AnimatedSection({ children, className = '' }) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (isVisible && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div
      ref={ref}
      className={cn(
        `${className}`,
        hasAnimated
          ? 'animate-fade-right animate-duration-700 animate-ease-linear'
          : '',
      )}>
      {children}
    </div>
  );
}

export default AnimatedSection;
