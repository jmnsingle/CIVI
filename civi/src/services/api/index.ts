import HttpClient from './HttpClient';
import { MessageResponse } from './types';

class Api extends HttpClient {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  public fetchMessages = () =>
    this.instance.get<Array<MessageResponse>, Array<MessageResponse>>(
      `messages`,
    );

  public updateMessage = (id: string) =>
    this.instance.patch<MessageResponse, MessageResponse>(`messages/${id}`);
}

const ApiClient = new Api();

export default ApiClient;
