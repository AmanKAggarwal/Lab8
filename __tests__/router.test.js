/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js'


describe("settings page", () => {
    test("initial setup", () => {
        expect(history.length).toBe(1);
    });
    test("history length", () => {
        pushToHistory('settings');
        expect(history.length).toBe(2);
    })
    test("settings history object", () => {
        const expectedState = {
            'page' : 'settings'
        }
        expect(history.state).toMatchObject(expectedState);
    })
});


describe("home page", () => {
    test("initial setup", () => {
        expect(history.length).toBe(2);
    });
    test("history length", () => {
        pushToHistory('home');
        expect(history.length).toBe(3);
    });

    test("history object", () => {
        const expectedState = {}
        expect(history.state).toMatchObject(expectedState);
    })
})


describe("Specific Entry page", () => {
    const entryNum = 10;
    test("initial setup", () => {
        expect(history.length).toBe(3);
    });
    test("history length", () => {
        pushToHistory('entry', entryNum);
        expect(history.length).toBe(4);
    });

    test("history object", () => {
        const expectedState = {
            page: `entry${entryNum}`
        }
        expect(history.state).toMatchObject(expectedState);
    })
})