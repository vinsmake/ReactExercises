describe('Testing <myComponent/>', () => {

    test('MyTest log', function myTest() {
        //1.- Arrange
        let message1 = 'hello world';

        //2.- Act
        let message2 = message1.trim();

        //3.- Assert
        expect(message1).toBe(message2)
    })
})