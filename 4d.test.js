app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

//Middleware
function performanceMiddleware(req, res, next) {
    const start = process.hrtime();

    res.on('finish', () => {
        const end = process.hrtime(start);
        const duration = (end[0] * 1000) + (end[1] / 1000000);

        console.log(`Endpoint '${req.method} ${req.url}' completed in ${duration.toFixed(2)} ms`);
    });

    next();
}


app.get('/users/:userId/posts', performanceMiddleware, async (req, res) => {
});

app.post('/users/:userId/posts', performanceMiddleware, async (req, res) => {

});
