import Team from "../app";

describe("Team class test", () => {
    let team;
    let char1, char2;

    beforeEach(() => {
        team = new Team();
        char1 = { name: 'Archer', level: 5 };
        char2 = { name: 'Mage', level: 10 };
    });

    test('add: добавление нового персонажа в команду', () => {
        team.add(char1);
        expect(team.toArray()).toContain(char1);
    })

    test('Попытка добавления дублирующего персонажа выбрасывает ошибку', () => {
        team.add(char1);
        expect(() => team.add(char1)).toThrow('Персонаж уже добавлен в команду');
    })

    test('addAll: добавление сразу всех персонажей в комнаду', () => {
        team.addAll(char1, char2);
        expect(team.toArray()).toEqual(expect.arrayContaining([char1, char2]));
        expect(team.toArray().length).toBe(2);
    })

    test('toArray: преобразование Set в массив', () => {
        team.addAll(char1, char2, char1);
        const result = team.toArray();
        expect(Array.isArray(result)).toBe(true);
        expect(result).toEqual(expect.arrayContaining([char1, char2]));
    })
})

