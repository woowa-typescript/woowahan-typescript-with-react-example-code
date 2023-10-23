class Developer {
  name: string;

  domain: string;

  constructor(name: string, domain: string) {
    this.name = name;
    this.domain = domain;
  }
}

const me: Developer = new Developer("zig", "frontend");
