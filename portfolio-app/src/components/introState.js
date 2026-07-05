// Shared state for the ZineIntro boot cover, in its own module so
// component files only export components (react fast-refresh rule).
export const INTRO_SEEN_KEY = 'vb-zine-intro-seen';

// Captured at module load — before ZineIntro's effect writes the seen-key —
// so siblings (e.g. the hero's paste-up letters) can sync their timing to
// whether the cover will actually show this load.
export const INTRO_ACTIVE_ON_LOAD = (() => {
  try {
    return !sessionStorage.getItem(INTRO_SEEN_KEY);
  } catch {
    return true;
  }
})();
