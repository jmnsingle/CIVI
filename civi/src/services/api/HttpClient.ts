/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance, AxiosResponse } from 'axios';

import config from '../../utils/config';

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  protected constructor() {
    this.instance = axios.create({
      baseURL: config.apiUrl,
    });
    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );
  };

  private handleResponse = ({ data }: AxiosResponse) => data;

  protected handleError = (err: unknown): Promise<never> => {
    return Promise.reject(err);
  };
}

export default HttpClient;
