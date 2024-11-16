import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const withUser: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (["/profile"]?.some((path) => pathname.startsWith(path))) {
      /**
       * * fake credentials with parameter
       */
      const userId = request.nextUrl.pathname.split("/")[2];

      if (!userId) {
        /**
         * * if not have query userId, redirect to login
         */
        const url = new URL(`/login`, request.url);
        return NextResponse.redirect(url);
      }
    }
    return next(request, _next);
  };
};
