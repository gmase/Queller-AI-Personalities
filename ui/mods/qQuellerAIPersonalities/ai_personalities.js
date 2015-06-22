(function() {
    var extensions = {
        'Bronze': {
            metal_drain_check: 0.92,
            energy_drain_check: 1.05,
            metal_demand_check: 1.12,
            energy_demand_check: 1.20,
            micro_type: 0,
            go_for_the_kill: false,
            priority_scout_metal_spots: false,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.3,
            adv_eco_mod: 1.1,
            adv_eco_mod_alone: 1.0,
            factory_build_delay_min: 8,
            factory_build_delay_max: 15,
            personality_tag: "bronze"
        },
        'Silver': {
            metal_drain_check: 0.92,
            energy_drain_check: 1.05,
            metal_demand_check: 1.12,
            energy_demand_check: 1.20,
            micro_type: 0,
            go_for_the_kill: false,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.2,
            adv_eco_mod: 1.1,
            adv_eco_mod_alone: 1.0,
            factory_build_delay_min: 1,
            factory_build_delay_max: 3,
            personality_tag: "silver"
        },
        'Gold': {
            metal_drain_check: 0.72,
            energy_drain_check: 0.85,
            metal_demand_check: 0.92,
            energy_demand_check: 1.0,
            micro_type: 1,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.1,
            adv_eco_mod: 1.2,
            adv_eco_mod_alone: 0.95,
            personality_tag: "gold"
        },
        'Platinum': {
            personality_tag: "platinum"
        },
        'Uber': {
            personality_tag: "uber"
        },
    }

    var baseline = model.aiPersonalities().Absurd || {
        percent_vehicle: 0.45,
        percent_bot: 0.25,
        percent_air: 0.2,
        percent_naval: 0.05,
        percent_orbital: 0.05,
        metal_drain_check: 0.52,
        energy_drain_check: 0.65,
        metal_demand_check: 0.72,
        energy_demand_check: 0.8,
        micro_type: 2,
        go_for_the_kill: true,
        priority_scout_metal_spots: true,
        enable_commander_danger_responses: true,
        neural_data_mod: 1.0,
        adv_eco_mod: 1.3,
        adv_eco_mod_alone: 0.85
    }
    Object.keys(extensions).forEach(function(name) {
        extensions[name] = _.extend(JSON.parse(JSON.stringify(baseline)), extensions[name])
    })

    var ais = {}
    _.extend(ais, model.aiPersonalities(), extensions)

    model.aiPersonalityNames = ko.computed(function() {
        return _.keys(model.aiPersonalities())
    })
    model.aiPersonalities(ais)
})()