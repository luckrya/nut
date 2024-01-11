import fetch, { type RequestInit } from "node-fetch";

export interface RequestParams extends RequestInit {
  url: string;
}

export function request<R = unknown>(params: RequestParams) {
  return fetch(params.url, params).then((res) => res.json()) as Promise<R>;
}
