const getRandomSeconds = () => (Math.round(Math.random() * 5) + 1) * 250;

export const randomTimer = (func, ...args) => (resolve) => {
  setTimeout(() => resolve(func(...args)), getRandomSeconds());
};

export const dummyFetcher = (method, args) =>
  new Promise(randomTimer(method, args));

// method를 실행할건데 이 실행을 getRandomSeconds에서 실행된 값만큼
// 지연된 다음 실행할것이다 라는 게 dummyFetcher