import featuresReducer from './featuresReducer';

test('Undefined state and empty action', () => {
    let action = {}
    expect(featuresReducer(undefined, action)).toEqual([])
})

test('SET_FEATURES passed into action', () => {
    let action = { type : 'SET_FEATURES' }
    expect(featuresReducer([], action)).toEqual(undefined)
})
