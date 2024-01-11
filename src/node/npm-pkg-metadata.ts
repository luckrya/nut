import { LRUCache } from "lru-cache";
import { DAYS_MILLISECONDS } from "../common";
import { PackageManagerBin, getNpmRegistry } from "./pm";
import { request } from "./fetch";

const cache = new LRUCache({
  max: 500,
  ttl: DAYS_MILLISECONDS, // 过期时间一天
});

/**
 * @summary 获取 npm 包源数据信息
 * @see https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md
 */
export async function getNpmPkgMetadata(options: {
  name: string;
  bin: PackageManagerBin;
  full?: boolean;
}) {
  const registry = await getNpmRegistry(options.bin);
  const packageUrl = `${registry}/${options.name}`;

  // 缓存逻辑
  const cacheKey = `${options.bin}:::${packageUrl}`;
  if (cache.get(cacheKey)) return cache.get(cacheKey);

  const res = await request<NpmPackageMetadata>({
    url: packageUrl,
    headers: {
      Accept: options.full
        ? ""
        : "application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*",
    },
  });

  cache.set(cacheKey, res);

  return res;
}

export type NpmPackageMetadata = Partial<PackageMetadata>;

interface PackageMetadata extends Record<string, unknown> {
  _id: string;
  _rev: string;
  name: string;
  description: string;
  readme: string;
  author: {
    name: string;
  };
  repository: {
    type: string;
    url: string;
  };
  readmeFilename: string;
  homepage: string;
  keywords: string[];
  bugs: {
    url: string;
  };
  license: string;
  users: Record<string, boolean>;
  maintainers: {
    name: string;
    email: string;
  }[];
  time: {
    modified: string;
    created: string;
    [key: string]: string;
  };
  modified: string;
  "dist-tags": {
    alpha: string;
    beta: string;
    legacy: string;
    next: string;
    latest: string;
    csp: string;
    [key: string]: string;
  };
  versions: Record<
    string,
    {
      name: string;
      version: string;
      description: string;
      main: string;
      license: string;
      _id: string;
      _from: string;
      _npmVersion: string;
      directories: Record<string, unknown>;
      author: {
        name: string;

        [key: string]: unknown;
      };
      dist: {
        shasum: string;
        tarball: string;
        integrity: string;
        signatures: {
          keyid: string;
          sig: string;

          [key: string]: unknown;
        }[];

        [key: string]: unknown;
      };
      _npmUser: {
        name: string;
        email: string;

        [key: string]: unknown;
      };
      maintainers: {
        name: string;
        email: string;

        [key: string]: unknown;
      }[];

      [key: string]: unknown;
    }
  >;
}
