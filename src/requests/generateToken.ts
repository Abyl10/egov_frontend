import axios from 'axios';

export interface IToken {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  'not-before-policy': number;
  session_state: string;
  scope: string;
}

export const generateToken = (): Promise<IToken> => {
  const data = new URLSearchParams();
  data.append('username', 'test-operator');
  data.append('password', 'DjrsmA9RMXRl');
  data.append('client_id', 'cw-queue-service');
  data.append('grant_type', 'password');

  return axios
    .post<IToken>(
      'http://hakaton-idp.gov4c.kz/auth/realms/con-web/protocol/openid-connect/token',
      data,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      },
    )
    .then((response) => ({
      access_token: response.data.access_token,
      expires_in: response.data.expires_in,
      refresh_expires_in: response.data.refresh_expires_in,
      refresh_token: response.data.refresh_token,
      token_type: response.data.token_type,
      'not-before-policy': response.data['not-before-policy'],
      session_state: response.data.session_state,
      scope: response.data.scope,
    }));
};
