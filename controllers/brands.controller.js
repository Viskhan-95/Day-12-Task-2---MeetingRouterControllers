module.exports.brandsController = {
    getBrands: (reg, res) => {
        res.send('Эврика')
    },

    postBrands: (reg, res) => {
        res.send('Еще раз эврика')
    },

    deleteBrands: (reg, res) => {
        res.send('Удалена эврика')
    }
}