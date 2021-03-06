var qQuellerAILoaded;

function qQuellerAI() {
    if (qQuellerAILoaded) {
        return;
    }

    qQuellerAILoaded = true;

    var newBuild = _.isFunction( model.aiPersonalities );

    var qQuellerAddAIPersonalitiesAdded = false;

    model.qQuellerAddAIPersonalities = function() {

        if (qQuellerAddAIPersonalitiesAdded) {
            return;
        }

        api.debug.log('Adding Queller Personalities');

        var aiPersonalities = newBuild ? model.aiPersonalities() : model.aiPersonalities;

        var defaultAiPersonalities = ['Idle', 'Normal', 'Hard', 'Relentless', 'Absurd'];

        _.forEach( aiPersonalities, function(personality, name) {
            if(defaultAiPersonalities.indexOf(name) != -1) {
                personality.personality_tags = _.union(personality.personality_tags || [], ['Vanilla']);
            }
        });

        var newPersonalities = {
            'Casual': {
                display_name: '!LOC:Q-Casual',
                metal_drain_check: 0.64,
                energy_drain_check: 0.77,
                metal_demand_check: 1.05,
                energy_demand_check: 0.92,
                micro_type: 0,
                go_for_the_kill: false,
                priority_scout_metal_spots: false,
                enable_commander_danger_responses: false,
                neural_data_mod: 2.0,
                adv_eco_mod: 0.5,
                adv_eco_mod_alone: 0.5,
                factory_build_delay_min: 0,
                factory_build_delay_max: 12,
                personality_tags:
                [
                    "casual"
                ],
                min_basic_fabbers: 10,
                min_advanced_fabbers: 3
            },
            'Bronze': {
                display_name: '!LOC:Q-Bronze',
                metal_drain_check: 0.54,
                energy_drain_check: 0.77,
                metal_demand_check: 0.95,
                energy_demand_check: 0.92,
                micro_type: 0,
                go_for_the_kill: false,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.5,
                adv_eco_mod: 0.5,
                adv_eco_mod_alone: 0.5,
                factory_build_delay_min: 0,
                factory_build_delay_max: 6,
                personality_tags:
                [
                    "bronze"
                ],
                min_basic_fabbers: 5,
                min_advanced_fabbers: 3
            },
            'Silver': {
                display_name: '!LOC:Q-Silver',
                metal_drain_check: 0.54,
                energy_drain_check: 0.77,
                metal_demand_check: 0.95,
                energy_demand_check: 0.92,
                micro_type: 1,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.35,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 0.85,
                personality_tags:
                [
                    "silver"
                ],
                min_basic_fabbers: 4,
                min_advanced_fabbers: 3
            },
            'Gold': {
                display_name: '!LOC:Q-Gold',
                metal_drain_check: 0.54,
                energy_drain_check: 0.77,
                metal_demand_check: 0.85,
                energy_demand_check: 0.92,
                micro_type: 1,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.25,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 0.85,
                personality_tags:
                [
                    "gold"
                ],
                min_basic_fabbers: 3,
                min_advanced_fabbers: 2
            },
            'Platinum': {
                display_name: '!LOC:Q-Platinum',
                metal_drain_check: 0.54,
                energy_drain_check: 0.77,
                metal_demand_check: 0.85,
                energy_demand_check: 0.92,
                micro_type: 2,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.15,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 0.85,
                personality_tags:
                [
                    "platinum"
                ],
                min_basic_fabbers: 2,
                min_advanced_fabbers: 2
            },
            'Uber': {
                display_name: '!LOC:Q-Uber',
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.82,
                micro_type: 2,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.0,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 0.85,
                personality_tags:
                [
                    "uber"
                ],
                min_basic_fabbers: 3,
                min_advanced_fabbers: 1
            },
            'Uber Aggressive': {
                display_name: '!LOC:Q-Uber Aggressive',
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.72,
                micro_type: 2,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.2,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 0.85,
                personality_tags:
                [
                    "uber"
                ],
                fabber_to_factory_ratio_basic: 1.0,
                fabber_to_factory_ratio_advanced: 3.0,
                fabber_alone_on_planet_mod: 3.0,
                basic_to_advanced_factory_ratio: 10,
                factory_alone_on_planet_mod: 0.5,
                min_basic_fabbers: 3,
                min_advanced_fabbers: 1,
            },
            'Uber Air': {
                display_name: '!LOC:Q-Uber Air',
                metal_drain_check: 0.54,
                energy_drain_check: 0.65,
                metal_demand_check: 0.85,
                energy_demand_check: 0.8,
                micro_type: 2,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.0,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 0.85,
                personality_tags:
                [
                    "uber",
                    "air"
                ],
                min_basic_fabbers: 3,
                min_advanced_fabbers: 1
            },
            'Uber Bot': {
                display_name: '!LOC:Q-Uber Bot',
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.72,
                micro_type: 2,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 0.5,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 0.85,
                personality_tags:
                [
                    "uber",
                    "bot"
                ],
                min_basic_fabbers: 3,
                min_advanced_fabbers: 1
            },
            'Uber Cautious': {
                display_name: '!LOC:Q-Uber Cautious',
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.72,
                micro_type: 2,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 0.5,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 0.85,
                personality_tags:
                [
                    "uber",
                    "orbital"
                ],
                min_basic_fabbers: 4,
                min_advanced_fabbers: 2
            },
            'Uber Land': {
                display_name: '!LOC:Q-Uber Land',
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.72,
                micro_type: 2,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.0,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 0.85,
                personality_tags:
                [
                    "uber",
                    "land"
                ],
                min_basic_fabbers: 3,
                min_advanced_fabbers: 1
            },
            'Uber Naval': {
                display_name: '!LOC:Q-Uber Naval',
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.72,
                micro_type: 2,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.0,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 0.85,
                personality_tags:
                [
                    "uber",
                    "naval"
                ],
                min_basic_fabbers: 3,
                min_advanced_fabbers: 1
            },
            'Uber Orbital': {
                display_name: '!LOC:Q-Uber Orbital',
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.72,
                micro_type: 2,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.0,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 0,
                personality_tags:
                [
                    "uber",
                    "orbital"
                ],
                min_basic_fabbers: 3,
                min_advanced_fabbers: 1
            },
            'Uber Rush': {
                display_name: '!LOC:Q-Uber Rush',
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.72,
                micro_type: 2,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.0,
                adv_eco_mod: 2.0,
                adv_eco_mod_alone: 1.45,
                personality_tags:
                [
                    "uber",
                    "bot"
                ],
                min_basic_fabbers: 2,
                min_advanced_fabbers: 1
            },
            'Uber Tank': {
                display_name: '!LOC:Q-Uber Tank',
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.72,
                micro_type: 2,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.0,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 0.85,
                personality_tags:
                [
                    "uber",
                    "tank"
                ],
                min_basic_fabbers: 3,
                min_advanced_fabbers: 1
            },
            'Uber Tech': {
                display_name: '!LOC:Q-Uber Tech',
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.72,
                micro_type: 2,
                go_for_the_kill: true,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                neural_data_mod: 1.0,
                adv_eco_mod: 0,
                adv_eco_mod_alone: 0,
                personality_tags:
                [
                    "uber"
                ],
                min_basic_fabbers: 4,
                min_advanced_fabbers: 1
            }
        }

        var baseline = aiPersonalities.Absurd || {
            display_name: '!LOC:Absurd',
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "PreventsWaste"
            ],
            metal_drain_check: 0.54,
            energy_drain_check: 0.65,
            metal_demand_check: 0.71,
            energy_demand_check: 0.8,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.0,
            adv_eco_mod_alone: 0.85,
            fabber_to_factory_ratio_basic: 1.0,
            fabber_to_factory_ratio_advanced: 1.0,
            fabber_alone_on_planet_mod: 2.0,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 2,
            max_basic_fabbers: 6,
            min_advanced_fabbers: 3,
            max_advanced_fabbers: 20
        }

        newPersonalities = _.mapValues( newPersonalities, function(personality, name) {
            var result = _.extend(_.clone(baseline), personality);
            result['name'] = name;
            return result;
        });

        _.extend(aiPersonalities, newPersonalities);

        if (newBuild) {
            model.aiPersonalities.valueHasMutated();
        } else {
            model.aiPersonalityNames(_.keys(aiPersonalities));
        }
    }

    if (newBuild) {

        model.qQuellerAIServerModIsLoaded = ko.computed(function() {
            var result = _.intersection(model.gameModIdentifiers(), ['com.pa.quitch.qQuellerAI', 'com.pa.quitch.qQuellerAI-dev']).length > 0;

            if (result) {
                model.qQuellerAddAIPersonalities();
            }

            return result;
        });
    }
    else
    {

        model.qQuellerAIServerModIsLoaded = ko.observable(false);

        model.qQuellerAIServerModCheckLoaded = function() {
            api.mods.getMountedMods('server', function(mods) {

                // check to see if server mod (and optionally a dev version) are loaded

                var loaded = _.intersection(_.pluck(mods, 'identifier'), ['com.pa.quitch.qQuellerAI', 'com.pa.quitch.qQuellerAI-dev']).length > 0;

                model.qQuellerAIServerModIsLoaded(loaded);
            });
        }

        // once mod data is sent check if server mod is actually loaded

        if (window.scene_server_mod_list && window.scene_server_mod_list.new_game) {
            model.qQuellerAIServerModCheckLoaded();
        }
        else {
            var server_mod_info_updated_handler = handlers.server_mod_info_updated;

            handlers.server_mod_info_updated = function(payload) {
                server_mod_info_updated_handler(payload);

                model.qQuellerAIServerModCheckLoaded();
            }
        }

        model.qQuellerAIServerModIsLoaded.subscribe(function(qQuellerAIServerModIsLoaded) {
            model.qQuellerAddAIPersonalities();
        });


    }

    model.qQuellerAIServerModIsHost = ko.computed(function() {
        return model.isGameCreator() && model.qQuellerAIServerModIsLoaded();
    });
}

try {
    qQuellerAI();
}
catch (e) {
    console.error(e);
}