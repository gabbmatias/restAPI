module.exports = {
    dialect: 'sqlite',
    storage: './students.sqlite',
    define: {
        timestamps: true,
        underscored: true
    }
};