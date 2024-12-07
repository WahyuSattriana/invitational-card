let targetDate = new Date("Dec 13, 2024 00:00:00").getTime();
let now = new Date().getTime();
let timeDif = targetDate - now;

export const days = Math.floor(timeDif / (1000 * 60 * 60 * 24));
export const hours = Math.floor((timeDif - (1000 * 60 * 60)) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
export const minutes = Math.floor((timeDif % (1000 * 60 * 60)) / (1000 * 60));