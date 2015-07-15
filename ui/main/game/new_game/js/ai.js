
function ai_types() {

    /* 
    {
        idle: true | false,

        percent_vehicle [0 1],
		percent_bot [0 1],
        percent_air [0 1],
        percent_naval [0 1],
		percent_orbital [0 1],
        
        personality_tag: <string>,

        metal_drain_check [0 1],
        energy_drain_check [0 1],
        metal_demand_check [0 1],
        energy_demand_check [0 1],

        micro_type 0:none | 1:platoon | 2:squad,

        go_for_the_kill: true | false,
        priority_scout_metal_spots: true | false,
        enable_commander_danger_responses: true | false,
        
        neural_data_mod: [0 ... ]
        adv_eco_mod: [0 ... ]
        adv_eco_mod_alone: [0 ... ]
        factory_build_delay_min: [0 ... ] (in seconds)
        factory_build_delay_max: [0 ... ] (in seconds)
		unable_to_expand_delay: [0 ... ] (in seconds)
    } 
    */

    var result = {
        'Idle': {
            idle: true
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
            personality_tag: "bronze"
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
            personality_tag: "silver"
        },
        'Gold': {
            metal_drain_check: 0.54,
            energy_drain_check: 0.52,
            metal_demand_check: 0.67,
            energy_demand_check: 0.67,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.1,
            adv_eco_mod: 1.4,
            adv_eco_mod_alone: 0.95,
            personality_tag: "gold"
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
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            personality_tag: "platinum"
        },
		'Uber': {
            metal_drain_check: 0.52,
            energy_drain_check: 0.57,
            metal_demand_check: 0.72,
            energy_demand_check: 0.72,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            personality_tag: "uber"
        },
		'Legion': {
            metal_drain_check: 0.52,
            energy_drain_check: 0.57,
            metal_demand_check: 0.72,
            energy_demand_check: 0.72,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            personality_tag: "legion"
        },
    };

    _.forEach(result, function (element, key) {
        result[key]['name'] = key;
    });

    return result;
}