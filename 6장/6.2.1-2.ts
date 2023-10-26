const developer = {
    work() {
        console.log("working...");
    },
};
developer.work(); // working...
developer.sleep(); // Property ‘sleep’ does not exist on type ‘{ work(): void;}’
