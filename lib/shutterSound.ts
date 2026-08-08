const STORAGE_ENABLED = "ptp_sound_enabled";
const STORAGE_VOLUME = "ptp_sound_volume";

let audio: HTMLAudioElement | null = null;

function getAudio(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!audio) audio = new Audio("/audio/shutter.wav");
  return audio;
}

export function isSoundEnabled(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_ENABLED) === "1";
}

export function setSoundEnabled(enabled: boolean): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_ENABLED, enabled ? "1" : "0");
}

export function getSoundVolume(): number {
  if (typeof window === "undefined") return 50;
  const raw = window.localStorage.getItem(STORAGE_VOLUME);
  return raw ? parseInt(raw, 10) : 50;
}

export function setSoundVolume(volume: number): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_VOLUME, String(volume));
}

export function playShutter(): void {
  if (!isSoundEnabled()) return;
  const volume = getSoundVolume();
  if (volume === 0) return;
  const base = getAudio();
  if (!base) return;
  try {
    const clone = base.cloneNode() as HTMLAudioElement;
    clone.volume = volume / 100;
    void clone.play().catch(() => {});
  } catch {
    // ignore playback errors (e.g. autoplay restrictions)
  }
}
