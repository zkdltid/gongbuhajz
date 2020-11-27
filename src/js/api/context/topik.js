import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'https://57124rq2ka.execute-api.ap-northeast-1.amazonaws.com/dev'
  });

export const fetchTopik2Vocabulary = data => apiRequest.get('',{params: data});
// export const responseData = data => articleRequest.post('/path', data);
