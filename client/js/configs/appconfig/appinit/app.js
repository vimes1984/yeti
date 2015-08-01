angular.module('yetibox', ['angular-meteor', 'ui.router', 'angular-blockly']);
Meteor.subscribe('pages');

angular.module('yetibox').config(['ngBlocklyProvider', function myAppConfig(ngBlocklyProvider) {
        ngBlocklyProvider.setOptions({
            path: "/blockly/media/",
            trashcan: true,
            toolbox: [
                {
                    name: "Logic",
                    blocks: [
                        {type: "logic_compare"},
                        {type: "logic_operation"},
                        {type: "logic_negate"},
                        {type: "controls_if"},
                        {type: "logic_boolean"}
                    ]
                },
                {
                    name: "Math",
                    blocks: [
                        {type: "math_number"},
                        {type: "math_arithmetic"},
                        {type: "math_round"},
                        {type: "math_constrain"},
                        {type: "math_constant"},
                        {type: "math_trig"},
                        {type: "math_number_property"},
                        {type: "math_change"}
                    ]
                }
            ]
        });
}]);
