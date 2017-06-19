
module.exports = {
    init () {
        return {
            version: "1.0",

            rules: [
                {
                    template: "templates/index.html.hbs",
                    datafile: "data/basic.json",
                    output: "index.html"
                },
            ],

            partials: [
                'meta', 'header', 'footer', 'endofpage'
            ].map((name) => {
                return {
                    name: name, template: "templates/partials/" + name + ".html.hbs"
                }
            }),

            helpers: [
                {
                    name: 'tt',
                    fn (value) {
                        return 't' + value + 't'; 
                    }
                }
            ],

            extras: [
                // { name: "firebase-tools" }
            ]
        }
    }
};
