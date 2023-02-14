// GlobalComponents for Volar
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    McButton: typeof import("my-component")["Button"];
  }
}

export {};
