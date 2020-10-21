module.exports = app => {
    const Stats = app.mongoose.model('Stats', {
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    })

    const get = (req, res) => {
        Stats.findOne({}, {}, { sort: { 'createdAt' : -1 } })
            .then(stats => {
                const defaultStats = {
                    users: 0,
                    categories: 0,
                    articles: 0
                }
                res.json(stats || defaultStats)
            })
    }

    return { Stats, get }
}