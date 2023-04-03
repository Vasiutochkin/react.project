import axios from "axios";

import {baseURL} from "../config";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9' +
        '.eyJhdWQiOiJlMWY0NDEzYzEyY2Q4ZmZmY2Q4Mjk3OWY0YTdlNTZiNCIsInN1YiI6Ij' +
        'YzZWU5MTI3N2NmZmRhMDA5ZGM5MzUzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ' +
        '.jGx_ypHfHviPjqdnQwhnc2K6hzqB8xuVKxI_yMug7cI'
    return config
});

export {
    axiosService
}