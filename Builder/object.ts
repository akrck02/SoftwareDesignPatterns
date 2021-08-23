export interface Object {
    name: string;
    description: string;
    type: string;
    id: string;
}

export class ObjectBuilder {
    private object: Object;

    constructor() {
        this.object = {
            name: '',
            description: '',
            type: '',
            id: ''
        }
    }

    withName(name: string): ObjectBuilder {
        this.object.name = name;
        return this;
    }

    withDescription(description: string): ObjectBuilder {
        this.object.description = description;
        return this;
    }

    withType(type: string): ObjectBuilder {
        this.object.type = type;
        return this;
    }

    withId(id: string): ObjectBuilder {
        this.object.id = id;
        return this;
    }

    build(): Object {
        return this.object;
    }
}