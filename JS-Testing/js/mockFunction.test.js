test("mock implementation of a basic function", () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(2)).toBe(44);
    expect(mock).toHaveBeenCalledWith(2)
})

test("spying on a method of an object", () => {
    const video = {
        play() {
            return true
        }
    }

    const spy = jest.spyOn(video, "play")
    video.play()

    expect(spy).toHaveBeenCalled()
    spy.mockRestore
})