import { useEffect, useState } from 'react';

// Hash routes for the session views: #/s/<id> participant, #/f/<id> facilitator, #/f facilitator overview.
// Plain anchors on the home page (#overview, #sessions) are not routes and leave the home page in place.
function parse() {
  const h = window.location.hash || '';
  if (!h.startsWith('#/')) return { view: 'home' };
  const [, kind, id] = h.slice(1).split('/');
  if (kind === 's' && id) return { view: 'participant', id };
  if (kind === 'f' && id) return { view: 'facilitator', id };
  if (kind === 'f') return { view: 'overview' };
  return { view: 'home' };
}

export default function useRoute() {
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const onHash = () => {
      const next = parse();
      setRoute(prev => {
        if (prev.view !== next.view || prev.id !== next.id) window.scrollTo(0, 0);
        return next;
      });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

// Prototype link relative to the research page, so it works on GitHub Pages and Netlify alike.
export const prototypeHref = start => `../${start ? `?start=${start}` : ''}`;
