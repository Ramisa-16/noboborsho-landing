export interface GalleryItem {
  icon: string;
  caption: string;
  captionBn: string;
}

export interface Tradition {
  icon: string;
  title: string;
  description: string;
}

export interface FoodItem {
  icon: string;
  name: string;
  description: string;
}

export interface MapLocation {
  name: string;
  nameBn: string;
  description: string;
  mapUrl: string;
}

export interface CardGeneratorState {
  name: string;
  message: string;
  theme: 'red' | 'gold' | 'green';
}

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ThemeColors {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  accent: string;
  bg: string;
  bgAlt: string;
  text: string;
  textMuted: string;
  border: string;
  shadow: string;
  shadowHover: string;
  gradient: string;
}
