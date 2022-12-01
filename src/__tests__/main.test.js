import Team from "../main";
import ErrorRepository from "../error";

test ('check team function', () => {
    const team = new Team();
    const membersArr = ['Alex', 'John', 'Mich', 'Evgeny', 'Ivan'];

    membersArr.forEach(member => {
        team.add(member);
    });

    team.toArray();

    const expected = ['Alex', 'John', 'Mich', 'Evgeny', 'Ivan'];
    const required = team.members;
    expect(required).toStrictEqual(expected);
});

test ('check toArray in team class', () => {
    const team = new Team();
    const membersArr = ['Alex', 'John', 'Mich', 'Evgeny', 'Ivan', 'Egor', 'Igor', 'Stepan'];

    membersArr.forEach(member => {
        team.addAll(member);
    });

    team.toArray();

    const expected = ['Alex', 'John', 'Mich', 'Evgeny', 'Ivan'];
    const required = team.members;
    expect(required).toStrictEqual(expected);
});

test ('check err return', () => {
    const err = new ErrorRepository();
    const expected = 'Unknown error';
    const required = err.translate(534);
    expect(required).toBe(expected);
});

test ('check err return for work', () => {
    const err = new ErrorRepository();
    const expected = 'Имя недоступно';
    const required = err.translate(101);
    expect(required).toBe(expected);
});