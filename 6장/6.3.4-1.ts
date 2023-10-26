export interface Symbol {
    flags: SymbolFlags; // Symbol flags

    escapedName: string; // Name of symbol

    declarations?: Declaration[]; // Declarations associated with this symbol

    // 이하 생략...
}
