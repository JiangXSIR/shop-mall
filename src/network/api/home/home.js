import { request } from "network/request/request";

export function getHomeData() {
  return request({
    url: '/home/multidata'
  });
}
