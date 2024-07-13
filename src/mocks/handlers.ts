import { http } from 'msw';

export const handlers = [
  http.post('api/login', (_, res) => {
    return res({ msg: 'test' });
  }),
];
