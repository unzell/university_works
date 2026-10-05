export function queryParser(defaultLimit= 10, maxLimit=100) {
    return (req,res,next) => {
        const query = req.query;

        // check whether queries are available for the further operation or not
        if (!query?.page && !query?.limit) {
            req.pagination = null
            return next();
        }

        // prevent undefined value
        const rawPage = parseInt(req.query.page) || 1
        const rawLimit = parseInt(req.query.limit)  || defaultLimit

        const page = Math.max(1 , rawPage) ;
        const limit = Math.min(maxLimit, Math.max(1, rawLimit));

        const offset = (page - 1) * limit;
        req.pagination = { page, limit, offset };
        next()
    }
}