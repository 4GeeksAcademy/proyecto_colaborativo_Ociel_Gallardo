const PREFIX = "mmp";

export const storage = {
  get(key, fallback = null) {
    const raw = localStorage.getItem(`${PREFIX}:${key}`);
    if (!raw) return fallback;
    try {
      return JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(`${PREFIX}:${key}`, JSON.stringify(value));
  }
};
