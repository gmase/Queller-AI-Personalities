function ai_types() {

    var result = {
        'Idle': {
            idle: true
        },
        'Normal': {
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "vanilla"
            ],
            metal_drain_check: 0.94,
            energy_drain_check: 1.05,
            metal_demand_check: 1.11,
            energy_demand_check: 1.20,
            micro_type: 0,
            go_for_the_kill: false,
            priority_scout_metal_spots: false,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.3,
            adv_eco_mod: 1.1,
            adv_eco_mod_alone: 1.0,
            factory_build_delay_min: 8,
            factory_build_delay_max: 15
        },
        'Hard': {
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ],
            metal_drain_check: 0.94,
            energy_drain_check: 1.05,
            metal_demand_check: 1.11,
            energy_demand_check: 1.20,
            micro_type: 0,
            go_for_the_kill: false,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.2,
            adv_eco_mod: 1.1,
            adv_eco_mod_alone: 1.0,
            factory_build_delay_min: 1,
            factory_build_delay_max: 3
        },
        'Relentless': {
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ],
            metal_drain_check: 0.74,
            energy_drain_check: 0.85,
            metal_demand_check: 0.91,
            energy_demand_check: 1.0,
            micro_type: 1,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.1,
            adv_eco_mod: 1.2,
            adv_eco_mod_alone: 0.95
        },
        'Absurd': {
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "vanilla",
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
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85
        },
        'Bronze': {
            metal_drain_check: 0.92,
            energy_drain_check: 1.05,
            metal_demand_check: 1.12,
            energy_demand_check: 1.20,
            micro_type: 0,
            go_for_the_kill: false,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.3,
            adv_eco_mod: 1.1,
            adv_eco_mod_alone: 1.0,
			factory_build_delay_min: 0,
			factory_build_delay_max: 12,
            personality_tags:
            [
                "bronze",
				"turtle"
            ]
        },
        'Silver': {
            metal_drain_check: 0.72,
            energy_drain_check: 0.85,
            metal_demand_check: 0.92,
            energy_demand_check: 1.0,
            micro_type: 1,
            go_for_the_kill: false,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.2,
            adv_eco_mod: 1.1,
            adv_eco_mod_alone: 1.0,
			factory_build_delay_min: 0,
			factory_build_delay_max: 3,
            personality_tags:
            [
                "silver"
            ]
        },
        'Gold': {
            metal_drain_check: 0.54,
            energy_drain_check: 0.67,
            metal_demand_check: 0.82,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.1,
            adv_eco_mod: 1.2,
            adv_eco_mod_alone: 0.95,
            personality_tags:
            [
                "gold"
            ]
        },
        'Platinum': {
            metal_drain_check: 0.54,
            energy_drain_check: 0.67,
            metal_demand_check: 0.82,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.05,
            adv_eco_mod: 1.25,
            adv_eco_mod_alone: 0.9,
            personality_tags:
            [
                "platinum"
            ]
        },
		'Uber': {
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.75,
            energy_demand_check: 0.62,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            personality_tags:
            [
                "uber"
            ]
        },
		'Uber Air': {
            metal_drain_check: 0.54,
            energy_drain_check: 0.65,
            metal_demand_check: 0.75,
            energy_demand_check: 0.8,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            personality_tags:
            [
                "uber",
				"airswarm",
				"botonly"
            ]
        },
		'Uber Dox': {
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.75,
            energy_demand_check: 0.62,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 0.5,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            personality_tags:
            [
                "uber",
				"botonly",
				"doxrush"
            ]
        },
		'Uber Eco': {
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.75,
            energy_demand_check: 0.62,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.0,
            adv_eco_mod_alone: 0.65,
            personality_tags:
            [
                "uber",
				"ecoboom",
				"techrush",
				"threefabber"
            ]
        },
		'Uber Grenadier': {
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.75,
            energy_demand_check: 0.62,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            personality_tags:
            [
                "uber",
				"botonly",
				"puregrenadier"
            ]
        },
		'Uber Infernodier': {
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.75,
            energy_demand_check: 0.62,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            personality_tags:
            [
                "uber",
				"infernodier"
            ]
        },
		'Uber Tank': {
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.75,
            energy_demand_check: 0.62,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            personality_tags:
            [
                "uber",
				"oldschool"
            ]
        },
		'Uber Tech': {
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.75,
            energy_demand_check: 0.62,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.0,
            adv_eco_mod_alone: 0.65,
            personality_tags:
            [
                "uber",
				"techrush",
				"threefabber"
            ]
        },
		'Uber Turtle': {
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.75,
            energy_demand_check: 0.62,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.0,
            adv_eco_mod_alone: 0.65,
            personality_tags:
            [
                "uber",
				"techrush",
				"turtle"
            ]
        },
    };

    _.forEach(result, function (element, key) {
        result[key]['name'] = key;
    });

    return result;
}