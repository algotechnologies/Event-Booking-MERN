module.exports = {
    mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${
        process.env.MONGO_PASSWORD
    }@cluster0-cxivd.mongodb.net/${
        process.env.MONGO_DB
    }?retryWrites=true&w=majority`
}