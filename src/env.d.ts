/// <reference path="../.astro/types.d.ts" />
///<reference path="../.astro/types.d.ts" />
///<reference path="astro-icon/components" />
type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}
