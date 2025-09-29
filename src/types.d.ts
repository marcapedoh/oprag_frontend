// Custom type declarations to fix compatibility issues

// Fix for pdfjs-dist SetIterator issue
declare global {
  interface SetIterator<T> {
    next(): IteratorResult<T>;
    [Symbol.iterator](): SetIterator<T>;
  }
}

export {};