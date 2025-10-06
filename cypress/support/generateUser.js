import { faker } from '@faker-js/faker';

export const generateUser = () => {
  const randomNum = Math.random().toString().slice(2, 5);
  const userName = faker.internet.userName() + randomNum;
  const userEmail = `${userName}@gmail.com`;
  const userPassword = 'Test';

  return { userName, userEmail, userPassword };
};
