import Team from '../js/Team';

class Character {
    constructor(name) {
        this.name = name;
    }
}

describe('Team', () => {
    let team;

    beforeEach(() => {
        team = new Team();
    });

    test('добавление персонажа в команду', () => {
        const character = new Character('Персонаж 1');
        team.add(character);
        expect(team.members.has(character)).toBe(true);
    });

    test('ошибка при добавлении одного и того же персонажа', () => {
        const character = new Character('Персонаж 1');
        team.add(character);
        expect(() => team.add(character)).toThrowError('Персонаж уже добавлен в команду');
    });

    test('добавление нескольких персонажей', () => {
        const character1 = new Character('Персонаж 1');
        const character2 = new Character('Персонаж 2');
        team.addAll(character1, character2);
        expect(team.members.size).toBe(2);
    });

    test('добавление дублирующихся персонажей без ошибок', () => {
        const character = new Character('Персонаж 1');
        team.addAll(character, character);
        expect(team.members.size).toBe(1);
    });

    test('конвертация Set в массив', () => {
        const character1 = new Character('Персонаж 1');
        const character2 = new Character('Персонаж 2');
        team.add(character1);
        team.add(character2);
        const charactersArray = team.toArray();
        expect(charactersArray).toEqual([character1, character2]);
    });
});