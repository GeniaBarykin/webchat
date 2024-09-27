import axios, {AxiosRequestConfig} from 'axios';

const checkResponse = (response: any) => response.data;
const catchError = (error: any) => error;

interface IWrapperConfig extends AxiosRequestConfig {
    params?: any
}

export const wrapper = (
    method: "post" | "get" | "put" | "delete", url: string, data?: any, config?: IWrapperConfig
    ) => axios.request({
        method, url, data, ...config
    }).then(checkResponse).catch(catchError);
