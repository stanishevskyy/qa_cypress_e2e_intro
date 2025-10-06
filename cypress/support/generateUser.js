import { faker } from '@faker-js/faker';

export const generateUser = () => {
  const userName = faker.internet.userName();
  const userEmail = `${userName}@gmail.com`;
  const userPassword = 'Test';

  return { userName, userEmail, userPassword };
};
