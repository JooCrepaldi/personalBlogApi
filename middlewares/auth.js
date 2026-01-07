export function auth(req, res, next){
    if(req.query.admin === 'true'){
        console.log('Admin access granted');
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}