import cookies from 'next-cookies';

export function unAuthPage(ctx) {
    return new Promise(resolve => {
        const allCookies = cookies(ctx);

        if (allCookies.token)
            return ctx.res.writeHead(302, {
                Location: '/posts'
            }).end();

        return resolve('unAuthorized');
    });
}
