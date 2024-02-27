import routesConfig from './routes/routesConfig';

document.addEventListener('DOMContentLoaded', () => {
    routesConfig && routesConfig.length && routesConfig.forEach((routeConfig) => {
        const {
            pages,
            callback
        } = routeConfig;

        try {
            const pathIndex = window.location.pathname.indexOf('.html');
            const pathname = window.location.pathname.substring(0, pathIndex);
            
            
            pages && pages.length && pages.forEach(( page ) => {
                page === pathname && ( callback() );
                page === '*' && ( callback() );
            });
        } catch(error) {
            console.error(error);
        }
    });
    
});
