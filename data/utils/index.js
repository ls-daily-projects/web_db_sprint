const faker = require("faker")

const maxRecords = 100

const createMany = (factory, count = maxRecords) => {
    const many = []
    for (let index = 0; index < count; index++) {
        many.push(factory())
    }
    return many
}

const createProject = () => {
    return {
        name: faker.lorem.words(7),
        description: faker.lorem.text(1),
        isCompleted: faker.random.arrayElement([true, false])
    }
}

const createAction = () => {
    return {
        description: faker.lorem.words(7),
        notes: faker.lorem.text(1),
        isCompleted: faker.random.arrayElement([true, false]),
        project_id: faker.random.number({ min: 1, max: maxRecords })
    }
}

const createContext = () => {
    return {
        name: faker.lorem.words(2)
    }
}

const createActionContext = () => {
    return {
        action_id: faker.random.number({ min: 1, max: maxRecords }),
        context_id: faker.random.number({ min: 1, max: maxRecords })
    }
}

module.exports = {
    createMany,
    createProject,
    createAction,
    createContext,
    createActionContext
}
