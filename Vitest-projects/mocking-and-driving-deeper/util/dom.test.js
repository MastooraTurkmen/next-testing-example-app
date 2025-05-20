import { beforeEach, expect, it, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

import { showError } from './dom';
import { Window } from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDoc = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

beforeEach(() => {
    document.body.innerHTML = "";
    document.write(htmlDoc)
})

it("should add an error paragraph to the id='errors' element", () => {
    showError('Test error message');

    const errorsEl = document.getElementById("errors")
    const errorParagraphs = errorsEl.firstElementChild;

    expect(errorParagraphs).not.toBeNull();
})

it("should not contain an error paragraph initially", () => {
    const errorsEl = document.getElementById("errors")
    const errorParagraphs = errorsEl.firstElementChild;

    expect(errorParagraphs).toBeNull();
})

it("should output the provided message in the error paragraph", () => {
    const testErrorMessage = 'Test error message';

    showError(testErrorMessage);

    const errorsEl = document.getElementById("errors")
    const errorParagraphs = errorsEl.firstElementChild;

    expect(errorParagraphs.textContent).toBe(testErrorMessage);
})