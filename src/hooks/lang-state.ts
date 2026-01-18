import { create } from 'zustand'

export enum trans {
  ru = "ru",
  en = "en",
}

interface LangStore {
  lng: trans
  setRu: () => void
  setEn: () => void
}

// Функция для определения языка браузера
const getBrowserLanguage = (): trans => {
  if (typeof window === 'undefined') return trans.en;
  
  const browserLang = navigator.language || (navigator as any).userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  return langCode === 'ru' ? trans.ru : trans.en;
};

// Функция для получения начального языка
const getInitialLanguage = (): trans => {
  if (typeof window === 'undefined') return trans.en;
  
  const savedLang = localStorage.getItem('cv-language');
  if (savedLang === 'ru' || savedLang === 'en') {
    return savedLang as trans;
  }
  
  return getBrowserLanguage();
};

export const useLangStore = create<LangStore>((set) => ({
  lng: getInitialLanguage(),
  setRu: () => {
    localStorage.setItem('cv-language', 'ru');
    set(() => ({ lng: trans.ru }));
  },
  setEn: () => {
    localStorage.setItem('cv-language', 'en');
    set(() => ({ lng: trans.en }));
  },
}))