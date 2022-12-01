export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(hero) {
        this.members.add(hero);
    }

    addAll(...hero) {
        this.members.add(...hero);
    }

    toArray() {
        const membersArr = [];

        this.members.forEach(member => {
            membersArr.push(member);
        });

        return this.members = membersArr;
    }
}