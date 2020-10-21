const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('*/1 * * * *', async function () {
        const usersCount = await app.db('users').count('id').first()
        const categoriesCount = await app.db('categories').count('id').first()
        const articlesCount = await app.db('articles').count('id').first()

        const { Stats } = app.api.stats

        const lastStats = await Stats.findOne({}, {},
            { sort: { 'createdAt' : -1 } })

        const stats = new Stats({
            users: usersCount.count,
            categories: categoriesCount.count,
            articles: articlesCount.count,
            createdAt: new Date()
        })

        const changeUsers = !lastStats || stats.users !== lastStats.users
        const changeCategories = !lastStats || stats.categories !== lastStats.categories
        const changeArticles = !lastStats || stats.articles !== lastStats.articles

        if(changeUsers || changeCategories || changeArticles) {
            stats.save().then(() => console.log('[Stats] Estatíticas atualizadas!'))
        }
    })
}